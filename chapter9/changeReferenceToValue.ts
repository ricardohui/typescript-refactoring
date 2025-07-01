class TelephoneNumber {
  _areaCode: string;
  _number: string;
  constructor() {
    this._areaCode = '';
    this._number = '';
  }
  get areaCode() {
    return this._areaCode;
  }
  set areaCode(value: string) {
    this._areaCode = value;
  }
  get number() {
    return this._number;
  }
  set number(value: string) {
    this._number = value;
  }
}


class Person {
 _telephoneNumber: TelephoneNumber;
 constructor(){
  this._telephoneNumber = new TelephoneNumber();
 } 

 get officeAreaCode() {
  return this._telephoneNumber.areaCode;
 }
  set officeAreaCode(value: string) {
   this._telephoneNumber.areaCode = value;
  }
  get officeNumber() {
   return this._telephoneNumber.number;
  }
  set officeNumber(value: string) {
   this._telephoneNumber.number = value;
  }
}