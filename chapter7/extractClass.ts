class Person{
  _name: string;
  _telephoneNumber: telephoneNumber;
  constructor(name, officeAreaCode, officeNumber) {
    this._name = name;
    this._telephoneNumber = new telephoneNumber();
  }
  get name(){
    return this._name;
  }
  set name(arg){
    this._name = arg;
  }

  get telephoneNumber(){
    return `${this._telephoneNumber.toString()}`;
  }

  get officeAreaCode(){
    return this._telephoneNumber.areaCode;
  }
  set officeAreaCode(arg){
    this._telephoneNumber.areaCode = arg;
  }
  get officeNumber(){
    return this._telephoneNumber.number;
  }
  set officeNumber(arg){
    this._telephoneNumber.number = arg;
  }
}

class telephoneNumber{

  _areaCode: string;
  _number: string;

  get areaCode(){
    return this.areaCode;
  }
  set areaCode(arg){
    this.areaCode = arg;
  }
  get number(){
    return this._number;
  }
  set number(arg){
    this._number = arg;
  }

  toString(){
    return `${this._areaCode}-${this._number}`;
  }  
}