import { Invoice, Play, Plays, StatementData, Performance} from './types';

export function createStatementData(invoice: Invoice, plays: Plays): StatementData {
    const statementData: StatementData = {
      customer: invoice.customer,
      performances: invoice.performances.map(enrichPerformance)};
      statementData.totalAmount = totalAmount(statementData);
      statementData.totalVolumeCredits = totalVolumeCredits(statementData);
      return statementData;
  
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
  function playFor(perf: Performance): Play {
    return plays[perf.playID as keyof typeof plays];
  }

    function amountFor(aPerformance: Performance) {
      let result = 0;
          switch (aPerformance.play?.type) {
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
              throw new Error(`unknown type: ${aPerformance.play?.type}`);
            }
        return result;
      }
        function volumeCreditsFor(aperformance: Performance) {
          let result = 0;
          result += Math.max(aperformance.audience - 30, 0);
          if ("comedy" ===aperformance.play?.type) {
            result += Math.floor(aperformance.audience / 5);
          }
          return result;
        }


  function totalVolumeCredits(data: StatementData) {
    return data.performances.reduce((total, p) => total + p.volumeCredits!, 0);
  }

  function totalAmount(data: StatementData) {
      return data.performances.reduce((total, p) =>total + p.amount!, 0)
  }
 
}