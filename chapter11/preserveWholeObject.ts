class HeatingPlan {
  _temperatureRange: { low: number; high: number };

  constructor(temperatureRange: { low: number; high: number }) {
    this._temperatureRange = temperatureRange;
  }

  withinRange(aNumberRange){
    return (
      aNumberRange.low >= this._temperatureRange.low &&
      aNumberRange.high <= this._temperatureRange.high
    );
  }
}

class Room {
  daysTemperatureRange: { low: number; high: number };

  constructor(daysTemperatureRange: { low: number; high: number }) {
    this.daysTemperatureRange = daysTemperatureRange;
  }
}

const aRoom = new Room({ low: 18, high: 25 });
const heatingPlan = new HeatingPlan({ low: 16, high: 26 });
const alerts: string[] = [];

if (!heatingPlan.withinRange(aRoom.daysTemperatureRange)) {
  alerts.push("room temperature went outside range");
}

console.log(alerts);

