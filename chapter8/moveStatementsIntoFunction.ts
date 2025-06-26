function renderPerson(outStream, person){
  const result = [];
  result.push(`<p>${person.name}</p>`);
  result.push(`renderPhoto(person.photo`);
  result.push(`<p>title: ${person.photo.title}</p>`);
  result.push((emitPhotoData(person.photo)));
  return result.join("\n");
}


function photoDiv(p){
  return [
    "<div>",
    zznew(p),
    "</div>"
  ].join("\n");
}



function emitPhotoData(p) {
  return [
    `<p>title: ${p.title}</p>`,
    `<p>location: ${p.location}</p>`,
    `<p>date: ${p.date.toDateString()}</p>`,
  ].join("\n");
}