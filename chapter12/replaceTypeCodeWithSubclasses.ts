class Employee{
  _name;
  _type;
  validateType(arg){
    if(!["engineer", "manager", "salesman"].includes(arg))
      throw new Error(`Employee cannot be of type ${arg}`);
  }
  toString(){return `${this._name} (${this.type})`}

  get type(){return this._type;}
}

class Engineer extends Employee{
  get type(){return "engineer";}
}

function createEmployee(name, type){
  return new Employee(name, type);
}