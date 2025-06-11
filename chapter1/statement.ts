import { Invoice, Plays, StatementData } from "./types";
import { createStatementData } from "./createStatementData";

export function statement(invoice: Invoice, plays: Plays) {
  return renderPlainText(createStatementData(invoice, plays));
}

function renderPlainText(data: StatementData) {
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


export function htmlStatement(invoice: Invoice, plays: Plays) {
 return renderHtml(createStatementData(invoice, plays));
}

function renderHtml(data: StatementData) {
  let result = `<h1>Statement for ${data.customer}</h1>\n`;

  result += "<table>\n";
  result += "<tr><th>play</th><th>seats</th><th>cost</th></tr>\n";
  for (let perf of data.performances) {
    result += ` <tr><td>${perf.play?.name}</td><td>${perf.audience}</td>`;
    result += `<td>${usd(perf.amount!)}</td></tr>\n`;
  }
  result += "</table>\n";
  result += `<p>Amount owed is <em>${usd(data.totalAmount!)}</em></p>\n`;
  result += `<p>You earned <em>${data.totalVolumeCredits} credits</em></p>\n`;
  return result;
}

