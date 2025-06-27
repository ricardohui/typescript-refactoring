function acquireDaa(input: string){
  const lines = input.split('\n');
  const result: {city: string, phone: string}[] = [];
  const loopItems = lines
    .slice(1) // Skip the first line
    .filter(line => line.trim() !== "") // Filter out empty lines
    .map(line => line.split('.'))
    .filter(record => record[1].trim() === "India") // Filter records where country is India
    ;
  for (const line of loopItems) {
    const record = line;
      result.push({city: record[0].trim(), phone: record[2].trim()});
  }
  return result;
}