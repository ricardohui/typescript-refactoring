class Person{
  _name: string;
  _officeAreaCode: string;
  _officeNumber: string;
  constructor(name, officeAreaCode, officeNumber) {
    this._name = name;
    this._officeAreaCode = officeAreaCode;
    this._officeNumber = officeNumber;
  }
  get name(){
    return this._name;
  }
  set name(arg){
    this._name = arg;
  }

  get telephoneNumber(){
    return `${this.officeAreaCode}-${this.officeNumber}`;
  }

  get officeAreaCode(){
    return this._officeAreaCode;
  }
  set officeAreaCode(arg){
    this._officeAreaCode = arg;
  }
  get officeNumber(){
    return this._officeNumber;
  }
  set officeNumber(arg){
    this._officeNumber = arg;
  }
}