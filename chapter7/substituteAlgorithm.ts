function foundPerson(people){
  const candidates = ["Don", "John", "James"];
  return people.find((p) => candidates.includes(p.name) || "");
}
