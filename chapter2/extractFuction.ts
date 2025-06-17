function printOwing(invoice){
  printBanner();
  let outstanding = calculateOutstanding();

  console.log(`name: ${invoice.customer}`)
  console.log(`amount: ${outstanding}`);
}