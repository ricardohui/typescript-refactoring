class ChargeCalculator{
  _customer;
  _usage;
  _provider;

  constructor(customer, usage, provider){
    this._customer = customer;
    this._usage = usage;
    this._provider = provider;
  }

  get baseCharge(){
    return this._customer.baseRate * this._usage;
  }

  get charge(){
    return this.baseCharge + this._provider.connectionCharge;
  }

}

const monthCharge = new ChargeCalculator(customer, usage, provider).charge;
