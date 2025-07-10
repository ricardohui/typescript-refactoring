class Person{
  _name;
  _genderCode;
  constructor(name){
    this._name = name;
    this._genderCode = this.genderCode 
  }

  get name(){return this._name;}
  get genderCode(){return "X";}
  get isMale(){return "M" === this._genderCode; }
}

class Male extends Person{
  get genderCode(){return "M"}
}

class Female extends Person{
  get genderCode(){ return "F"}
}

//client
function loadFromInput(data){
  return data.forEach(aRecord =>
    createPerson(aRecord)
  )
}

function createPerson(aRecord){
  switch (aRecord.gender){
    case 'M': return new Person(aRecord.name, "M");
    case 'F': return new Female(aRecord.name, "F");
    default: return new Person(aRecord.name, "X");
  }
}


const numberOfMales = people.filter(p => p.isMale).length;
