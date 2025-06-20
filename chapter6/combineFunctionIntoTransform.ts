const rawReading = acquireReading();
const aReading = enrichReading(rawReading);
const base = aReading.baseCharge;
const taxableCharge = Math.max(0, aReading.baseCharge - taxThreshold(aReading.year)); 




function calculateBaseCharge(aReading) {
  return baseRate(aReading.month, aReading.year) * aReading.quantity;
}

function enrichReading(original){
  const result = Object.assign({}, original);
  result.baseCharge = calculateBaseCharge(result);
  return result;
}