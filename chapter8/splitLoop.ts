function toBeSplitLoop() {
  const people = [
    { name: "Don", age: 30, salary: 50000 },
    { name: "John", age: 25, salary: 60000 },
    { name: "James", age: 35, salary: 70000 },
    { name: "Alice", age: 28, salary: 55000 },
  ];
  
  return `Youngest: ${youngestAge()}, Total Salary: ${totalSalary()}`;

  function youngestAge() {
    let youngest = people[0] ? people[0].age : 999999999999999;
    for (const person of people) {
      if (person.age < youngest) {
        youngest = person.age;
      }
    }
    return youngest;
  }

  function totalSalary() {
    let totalSalary = 0;
    for (const person of people) {
      totalSalary += person.salary;
    }
    return totalSalary;
  }
}

