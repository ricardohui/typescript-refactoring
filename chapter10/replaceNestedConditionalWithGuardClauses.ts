function payAmount(employee){
  if (employee.isSeparated)  return { amount: 0, reasonCode: "SEP" }; 
  if (employee.isRetired)  return { amount: 0, reasonCode: "RET" };
    // logic to compuate the amount
    return someFinalComputation();
  
  
}