class Employee {
  _name: string;
  _typeCode: string;

  constructor(name: string, typeCode: string) {
    this._name = name;
    this._typeCode = typeCode;
  }

  get name() {
    return this._name;
  }

  get type() {
    return Employee.legalTypeCodes[this._typeCode];
  }

  static get legalTypeCodes() {
    return { E: "Engineer", M: "Manager", S: "Salesman" };
  }
}

// Mock document object for demonstration
const document = {
  name: "Alice",
  empType: "M",
  leadEngineer: "Bob"
};

const candidate = new Employee(document.name, document.empType);
const leadEngineer = new Employee(document.leadEngineer, "E");

console.log(candidate.name, candidate.type); // Alice Manager
console.log(leadEngineer.name, leadEngineer.type); // Bob Engineer