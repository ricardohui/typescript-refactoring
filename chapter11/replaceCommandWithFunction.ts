class ChargeCalculator{

  constructor(customer, usage, provider){
  }

  charge(customer, usage, provider){
    const baseCharge = customer.baseRate * usage;
    return baseCharge + provider.connectionCharge;
  }

}

const monthCharge = charge(customer, usage, provider);

function charge(customer, usage, provider){
  return new ChargeCalculator(customer, usage, provider).charge(customer, usage, provider);
}