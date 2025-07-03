function alertForMiscreant(people){
  for (const p of people){
    if (p === "Don"){
      setOffAlarm(p);
      return "Don";
    }
    if (p === "John"){
      setOffAlarm(p);
      return "John";
    }
  }
  return "";
}

const found = alertForMiscreant(["Don", "John", "Mary"]);

