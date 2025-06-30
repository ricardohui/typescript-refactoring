class Organization{
  _title;
  _country;
  constructor(data) {
    this._title =  data.title ;
    this._country = data.country;
  }
  get title() {
    return this._title;
  }
  set title(aString) {
    this._title = aString;
  }
  get country() {
    return this._country;
  }
  set country(aString) {
    this._country = aString;
  }
}

const organization = {
  title: "Tech Corp",
  country: "GB"
};