class Employee{
  _name;
  _type;
  validateType(arg){
    if(!["engineer", "manager", "salesman"].includes(arg))
      throw new Error(`Employee cannot be of type ${arg}`);
  }
  toString(){return `${this._name} (${this._type})`}
}