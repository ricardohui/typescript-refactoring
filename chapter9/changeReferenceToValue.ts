class TelephoneNumber {
  _areaCode: string;
  _number: string;
  constructor(areaCode, number) {
    this._areaCode = areaCode;
    this._number = number;
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

  equals(other: TelephoneNumber) {
    if(!(other instanceof TelephoneNumber)) return false;
    return this.areaCode === other.areaCode && this.number === other.number;
  }
}


class Person {
  _telephoneNumber: TelephoneNumber;
  constructor() {
  }

  get officeAreaCode() {
    return this._telephoneNumber.areaCode;
  }
  set officeAreaCode(value: string) {
    this._telephoneNumber = new TelephoneNumber(value, this.officeNumber);
  }
  get officeNumber() {
    return this._telephoneNumber.number;
  }
  set officeNumber(value: string) {
    this._telephoneNumber = new TelephoneNumber(this.officeAreaCode, value);
  }
}