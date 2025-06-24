const organization = {
  name: "Tech Corp",
  country: "GB"
};


class Organziation{
  _name;
  _country;

  constructor(data) {
    this._name = data.name;
    this._country = data.country;
  }

  get name() {
    return this._name;
  }
  get country() {
    return this._country;
  } 
  set name(arg) {
    this._name = arg;
  }
  set country(arg) {
    this._country = arg;
  }
}