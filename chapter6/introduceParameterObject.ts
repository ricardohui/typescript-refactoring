class NumberRange {
  _data;
  constructor(min, max) {
   this._data = { min, max };
  }

  get min() {
    return this._data.min;
  }

  get max(){
    return this._data.max;
  }
}


const station = {
  name: "ZBI",
  readings: [
    { temp: 47, time: "2016-11-10 09:00" },
    { temp: 53, time: "2016-11-10 10:00" },
    { temp: 58, time: "2016-11-10 11:00" },
    { temp: 53, time: "2016-11-10 12:00" },
    { temp: 51, time: "2016-11-10 13:00" }
  ]};


  function readingOutsideRange(station, range: NumberRange) {
    return station.readings.filter(r => r.temp < range.min|| r.temp > range.max);
  }
  
  const range = new NumberRange(50, 55);
  const alerts = readingOutsideRange(station, range);