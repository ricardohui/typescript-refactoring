function acquireDaa(input: string){
  const lines = input.split('\n');
  type result = {city: string, phone: string}[];
  const result = lines
    .slice(1) // Skip the first line
    .filter(line => line.trim() !== "") // Filter out empty lines
    .map(line => line.split('.'))
    .filter(record => record[1].trim() === "India") // Filter records where country is India
    .map(record => ({ city: record[0].trim(), phone: record[2].trim() })) // Map to desired structure
    ;
  return result;
}