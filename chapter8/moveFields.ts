class Customer{
  _discountRate;
  _name;
  _contract;

  constructor(name, discountRate) {
    this._name = name;
    this._setDiscountRate(discountRate);
    const dateToday = () => new Date();
    this._contract = new CustomerContract(dateToday(), discountRate); 
  }

  get discountRate() {
    return this._contract._discountRate;
  }

  _setDiscountRate(value) {
    this._contract._discountRate = value;
  }

  becomePreferred() {
    this._setDiscountRate(this.discountRate + 0.03);
  }

  applyDiscount(amount) {
    return amount.substract(amount.multiply(this.discountRate));
  }
}

class CustomerContract {
  _startDate;
  _discountRate;
  constructor(startDate, discountRate) {
    this._startDate = startDate;
    this._discountRate = discountRate;
  }

  get discountRate() {
    return this._discountRate;
  }

  set discountRate(value) {
    this._discountRate = value;
  }

  get startDate() {
    return this._startDate;
  }
}