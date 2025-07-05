class Person{
  get name(){ return this._name;}
  set name(arg){ this._name = arg;}
  get id() { return this._id; }
  set id(arg) { this._id = arg; } 
}


const martin = new Person();
martin.name = "Martin";
martin.id = "12345";
