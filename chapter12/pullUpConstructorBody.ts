class Party{
    this._name = name;
}

class Employee extends Party{
  _id
  _name
  _monthlyCost
  cosntructor(name, id, monthCost){
    super(name);
    this._id = id;
    this._monthlyCost = this.monthlyCost;
  }
}

class Department extends Party{
  constructor(name, staff){
    super(name);
    this._staff = staff;
  }
}