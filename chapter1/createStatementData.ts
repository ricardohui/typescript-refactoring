import { Invoice, Play, Plays, StatementData, Performance} from './types';

class PerformanceCalculator {
  play: Play;
  performance: Performance;
  constructor(aPerformance: Performance, aPlay: Play) {
    this.performance = aPerformance;
    this.play = aPlay;
  }
   get amount() : number {
      throw new Error("Subclass must override amount");
    }

    get volumeCredits() {
      let result = 0;
      result += Math.max(this.performance.audience - 30, 0);
      return result;
    }
}


class TragedyCalculator extends PerformanceCalculator {
  get amount() {
    let result = 40000;
    if (this.performance.audience > 30) {
      result += 1000 * (this.performance.audience - 30);
    }
    return result;
  }
}

class ComedyCalculator extends PerformanceCalculator {
  get amount() {
    let result = 30000;
    if (this.performance.audience > 20) {
      result += 10000 + 500 * (this.performance.audience - 20);
    }
    result += 300 * this.performance.audience;
    return result;
  }

  get volumeCredits() {
    return super.volumeCredits + Math.floor(this.performance.audience / 5); 
  }
}

function createPerformanceCalculator(aPerformance: Performance, aPlay: Play) {
  switch (aPlay.type) {
    case 'tragedy':
      return new TragedyCalculator(aPerformance, aPlay);
    case 'comedy':
      return new ComedyCalculator(aPerformance, aPlay);
    default:
      throw new Error(`Unknown type: ${aPlay.type}`);
  }
}

export function createStatementData(invoice: Invoice, plays: Plays): StatementData {
    const statementData: StatementData = {
      customer: invoice.customer,
      performances: invoice.performances.map(enrichPerformance), }; statementData.totalAmount = totalAmount(statementData);
      statementData.totalVolumeCredits = totalVolumeCredits(statementData);
      return statementData;
  
 function enrichPerformance(aPerformance: Performance): Performance {
    const calculator = createPerformanceCalculator(aPerformance, playFor(aPerformance)); 
    const result = Object.assign({}, aPerformance);
    result.play = calculator.play;
    result.amount = calculator.amount;
    result.volumeCredits = calculator.volumeCredits;
    return result;

    function playFor(aPerformance: Performance): Play {
      return plays[aPerformance.playID as keyof typeof plays];
    }

  }
  
  function totalVolumeCredits(data: StatementData) {
    return data.performances.reduce((total, p) => total + p.volumeCredits!, 0);
  }

  function totalAmount(data: StatementData) {
      return data.performances.reduce((total, p) =>total + p.amount!, 0)
  }
 
}