function acquireDaa(input: string){
  const lines = input.split('\n');
  const result: {city: string, phone: string}[] = [];
  const loopItems = lines
    .slice(1) // Skip the first line
  for (const line of loopItems) {
    if (line.trim()==='') {
      continue;
    }
    const record = line.split(',');
    if (record[1].trim() === "India") {
      result.push({city: record[0].trim(), phone: record[2].trim()});
    }
  }
  return result;
}