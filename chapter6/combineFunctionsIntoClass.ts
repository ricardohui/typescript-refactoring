function acquireReading(){
  return {
    customer: "ivan",
    quantity: 10,
    month: 5,
    year: 2023}
}

function baseRate(month, year) {
  // Assume a simple base rate calculation for demonstration
  return 0.05 * (year - 2020) + 0.01 * month;
}

const aReading = acquireReading();
const baseCharge = baseRate(aReading.month, aReading.year) * aReading.quantity;

function calculateBaseCharge(aReading) {
  return baseRate(aReading.month, aReading.year) * aReading.quantity;
}