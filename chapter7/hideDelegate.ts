class Person1 {
  private _department: Department
  private _name: string;
  constructor(name: string){
    this._name = name;
  }

  get department() {
    return this._department;
  }

  set department(arg) {
    this._department = arg;
  }

}

class Department{
  private _chargeCode: string;
  private _manager: Person;

  constructor(chargeCode, manager) {
    this._chargeCode = chargeCode;
    this._manager = manager;
  }

  get chargeCode() {
    return this._chargeCode;
  }

  set chargeCode(arg) {
    this._chargeCode = arg;
  }

  get manager() {
    return this._manager;
  }

  set manager(arg) {
    this._manager = arg;
  }
}

const person = new Person1("John Doe");
const department = new Department("HR", person);
person.department = department;
console.log(`Person: ${person.department.manager}, Department Charge Code: ${person.department.chargeCode}`);