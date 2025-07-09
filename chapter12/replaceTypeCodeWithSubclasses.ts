class Employee{
  _name;
  _type;

  constructor(name){
    this._name = name;
  }
  
  toString(){return `${this._name} (${this.type})`}

}

class Engineer extends Employee{
}

class Salesman extends Employee{
}

class Manager extends Employee{
}

function createEmployee(name, type){
  switch(type){
    case "engineer": return new Engineer(name);
    case "salesman": return new Salesman(name);
    case "manager": return new Manager(name);
    default: throw new Error(`Employee cannot be of type ${type}`)
  }
}