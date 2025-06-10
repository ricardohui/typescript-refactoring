import { Invoice, Plays, StatementData } from "./types";
import { createStatementData } from "./createStatementData";

export function statement(invoice: Invoice, plays: Plays) {
  return renderplaintext(createStatementData(invoice, plays));
}

function renderplaintext(data: StatementData) {
  let result = `Statement for ${data.customer}\n`;

  for(let perf of data.performances){
    // print line for this orde
    result += ` ${perf.play?.name}: ${usd((perf).amount!)} (${perf.audience} seats)\n`;
  }

  result += `Amount owed is ${usd(data.totalAmount!)}\n`;
  result += `You earned ${data.totalVolumeCredits} credits\n`;
  return result;
}

function usd(anumber: number) {
  return new Intl.NumberFormat("en-us", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format(anumber/100);
}

