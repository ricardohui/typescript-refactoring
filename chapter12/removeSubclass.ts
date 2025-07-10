class Person{
  _name;
  constructor(name){
    this._name = name;
  }

  get name(){return this._name;}
  get genderCode(){return "X";}
  get isMale(){return this instanceof Male;}
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
    case 'M': return new Male(aRecord.name);
    case 'F': return new Female(aRecord.name);
    default: return new Person(aRecord.name);
  }
}


const numberOfMales = people.filter(p => p.isMale).length;
