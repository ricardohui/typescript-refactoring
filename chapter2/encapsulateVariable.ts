let defaultOwnerData = {
  firstName: "Martin",
  lastName: "Fowler"
}

export function defaultOwner() {
  return defaultOwnerData;
}
export function setDefaultOwner(firstName: string, lastName: string) {
  defaultOwnerData = { firstName, lastName };
}