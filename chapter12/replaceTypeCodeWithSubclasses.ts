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

class Salesman extends Employee{
  get type(){return "salesman";}
}

class Manager extends Employee{
  get type(){return "manager";}
}

function createEmployee(name, type){
  switch(type){
    case "engineer": return new Engineer(name, type);
    case "salesman": return new Salesman(name, type);
    case "manager": return new Manager(name, type);
  }
  return new Employee(name, type);
}