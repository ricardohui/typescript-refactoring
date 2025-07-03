function alertForMiscreant(people){
  if (findMiscreant(people) !== "")
    setOffAlert();
}

function findMiscreant(people){
  for (const p of people){
    if (p === "Don"){
      return "Don";
    }
    if (p === "John"){
      return "John";
    }
  }
  return "";
}
const people = ["Don", "John", "Mary"];
const found = findMiscreant(people);
alertForMiscreant(people)

