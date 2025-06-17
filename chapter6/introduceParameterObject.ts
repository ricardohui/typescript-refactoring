const station = {
  name: "ZBI",
  readings: [
    { temp: 47, time: "2016-11-10 09:00" },
    { temp: 53, time: "2016-11-10 10:00" },
    { temp: 58, time: "2016-11-10 11:00" },
    { temp: 53, time: "2016-11-10 12:00" },
    { temp: 51, time: "2016-11-10 13:00" }
  ]};

  function readingOutsideRange(station, min, max) {
    return station.readings.filter(r => r.temp < min || r.temp > max);
  }
  
  const alerts = readingOutsideRange(station, 50, 55);