class HeatingPlan {
  _temperatureRange: { low: number; high: number };

  constructor(temperatureRange: { low: number; high: number }) {
    this._temperatureRange = temperatureRange;
  }

  withinRange(bottom: number, top: number) {
    return (
      bottom >= this._temperatureRange.low &&
      top <= this._temperatureRange.high
    );
  }


  NEWwithinRange(aNumberRange){
    return this.withinRange(aNumberRange.low, aNumberRange.high);
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

const low = aRoom.daysTemperatureRange.low;
const high = aRoom.daysTemperatureRange.high;
if (!heatingPlan.withinRange(low, high)) {
  alerts.push("room temperature went outside range");
}

console.log(alerts);

