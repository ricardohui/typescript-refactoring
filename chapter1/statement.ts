import { totalmem } from "os";
import invoices from "./invoices.json";
import plays from "./plays.json";
type Performance = {
  playID: string;
  audience: number;
  play?: Play; // Optional property to hold the play details
  amount?: number;
  volumeCredits?: number;
};

type Invoice = {
  customer: string;
  performances: Performance[];
};
type Play = {
  name: string;
  type: string;
};

type Plays = {
  [key: string]: Play;
};

type StatementData = {
  customer: string;
  totalAmount?: number;
  totalVolumeCredits?: number;
  performances: Performance[];
};

export function statement(invoice: Invoice, plays: Plays) {
  const statementData : StatementData  = {
    customer: invoice.customer,
    performances: invoice.performances.map(enrichPerformance)
  };

    statementData.totalAmount= totalAmount(statementData)
    statementData.totalVolumeCredits= totalVolumeCredits(statementData)
  return renderPlainText(statementData, plays);

  function enrichPerformance(aPerformance: Performance): Performance {
    const result = Object.assign({}, aPerformance);
    result.play = playFor(aPerformance);
    result.amount = amountFor(result);
    result.volumeCredits = volumeCreditsFor(result);
    return result;

    function playFor(aPerformance: Performance): Play {
      return plays[aPerformance.playID as keyof typeof plays];
    }

  }
  
  function totalVolumeCredits(data: StatementData) {
    let volumeCredits = 0;
    for(let perf of data.performances){
      volumeCredits += perf.volumeCredits!;    }
    return volumeCredits;
  }

  function totalAmount(data: StatementData) {
      let totalAmount = 0;
      for(let perf of data.performances){
        totalAmount += (perf).amount!;
      }
      return totalAmount;
  }
}


function renderPlainText(data: StatementData, plays: Plays) {
  let result = `Statement for ${data.customer}\n`;

  for(let perf of data.performances){
    // print line for this order
    result += ` ${perf.play?.name}: ${usd((perf).amount!)} (${perf.audience} seats)\n`;
  }

  result += `Amount owed is ${usd(data.totalAmount!)}\n`;
  result += `You earned ${data.totalVolumeCredits} credits\n`;
  return result;
  

  
}



function usd(aNumber: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format(aNumber/100);
}

function volumeCreditsFor(aPerformance: Performance){
  let result = 0;
  result += Math.max(aPerformance.audience - 30, 0);
  if ("comedy" ===aPerformance.play?.type) {
    result += Math.floor(aPerformance.audience / 5);
  }
  return result;
}

function playFor(perf: Performance) : Play{
  return plays[perf.playID as keyof typeof plays];
}

function amountFor(aPerformance: Performance) {
  let result = 0;
  switch ((aPerformance).play?.type) {
    case "tragedy":
      result = 40000;
      if (aPerformance.audience > 30) {
        result += 1000 * (aPerformance.audience - 30);
      }
      break;
    case "comedy":
      result = 30000;
      if (aPerformance.audience > 20) {
        result += 10000 + 500 * (aPerformance.audience - 20);
      }
      result += 300 * aPerformance.audience;
      break;
    default:
      throw new Error(`unknown type: ${(aPerformance).play?.type}`);
  }
  return result;
}
