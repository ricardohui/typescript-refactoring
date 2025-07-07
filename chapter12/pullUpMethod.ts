class Employee extends Party{
  get annualCost(){
    return this.monthlyCost * 12;
  }
}

class Department extends Party{
  get annualCost(){
    return this.monthlyCost * 12;
  }
}


class Party{
  get annualCost(){
    return this.monthlyCost * 12;
  }

  get monthlyCost(){ // let subcalas implement this
    throw new SubclassResponsibilityError();
  }
}