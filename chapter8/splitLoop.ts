function toBeSplitLoop() {
  const people = [
    { name: "Don", age: 30, salary: 50000 },
    { name: "John", age: 25, salary: 60000 },
    { name: "James", age: 35, salary: 70000 },
    { name: "Alice", age: 28, salary: 55000 },
  ];
  
  return `Youngest: ${youngestAge()}, Total Salary: ${totalSalary()}`;

  function youngestAge() {
    return Math.min(...people.map(person => person.age));
  }

  function totalSalary() {
    return people.reduce((sum, person) => sum + person.salary, 0);
  }
}

