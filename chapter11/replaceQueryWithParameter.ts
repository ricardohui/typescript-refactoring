class Thermostat {
  selectedTemperature: number;
  currentTemperature: number;

  constructor(selectedTemperature: number, currentTemperature: number) {
    this.selectedTemperature = selectedTemperature;
    this.currentTemperature = currentTemperature;
  }
}

class HeatingPlan {
  _min: number;
  _max: number;

  constructor(min: number, max: number) {
    this._min = min;
    this._max = max;
  }

  get targetTemperature() {
    const selectedTemperature = thermostat.selectedTemperature;
    return this.xxNEWtargetTemperature(selectedTemperature);
  }

  xxNEWtargetTemperature(selectedTemperature: number) {
    if (selectedTemperature > this._max) return this._max;
    else if (selectedTemperature < this._min) return this._min;
    else return selectedTemperature;
  }

}

// Mock functions for heating/cooling/off
function setToHeat() {
  console.log("Heating is ON");
}
function setToCool() {
  console.log("Cooling is ON");
}
function setToOff() {
  console.log("System is OFF");
}

// Example objects
const thermostat = new Thermostat(22, 20);
const thePlan = new HeatingPlan(18, 25);

// Main logic
if (thePlan.targetTemperature > thermostat.currentTemperature) setToHeat();
else if (thePlan.targetTemperature < thermostat.currentTemperature) setToCool();
else setToOff();
