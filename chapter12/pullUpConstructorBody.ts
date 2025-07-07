class Party{

}

class Employee extends Party{
  _id
  _name
  _monthlyCost
  cosntructor(name, id, monthCost){
    super();
    this._id = id;
    this._name = name;
    this._monthlyCost = this.monthlyCost;
  }
}

class Department extends Party{
  constructor(name, staff){
    super();
    this._name = name;
    this._staff = staff;
  }
}