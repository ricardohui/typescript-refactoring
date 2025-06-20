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

class Reading{
  _customer;
  _quantity;
  _month;
  _year;
  constructor(data) {
    this._customer = data.customer;
    this._quantity = data.quantity;
    this._month = data.month;
    this._year = data.year;
  }

  get customer() {
    return this._customer;
  }

  get quantity() {
    return this._quantity;
  }

  get month() {
    return this._month;
  }

  get year() {
    return this._year;
  }

 get calculateBaseCharge() {
    return baseRate(this.month, this.year) * this.quantity;
  }
}

const rawReading = acquireReading();
const aReading = new Reading(rawReading);
const baseCharge = aReading.calculateBaseCharge;
