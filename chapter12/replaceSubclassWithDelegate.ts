class Bird {
  _name: string;
  _plumage;
  _speciesDelegate;
  constructor(data){
    this._name = data.name;
    this._plumage = data.plumage;
    this._speciesDelegate = this.selectSpeciesDelegate(data);
  }

  selectSpeciesDelegate(data){
    switch(data.type){
      case 'EuropeanSwallow':
        return new EuropeanSwallowDelegate();
      default: return null;
    }
  }

  get name(){ return this._name;}

  get plumage(){
    return this._plumage || "average"
  }
  
  get airSpeedVelocity(): number | null{
    return this._speciesDelegate ? this._speciesDelegate.airSpeedVelocity :null;}
}


class AfricanSwallow extends Bird{
  _numberOfCoconuts;
  constructor(data){
    super(data);
    this._numberOfCoconuts = data._numberOfCoconuts;
  }
  
  get airSpeedVelocity(){
    return 40 - 2 * this._numberOfCoconuts;
  }
}

class NorwegianBlueParrot extends Bird{
  _voltage;
  _isNailed;
  constructor(data){
    super(data)
    this._voltage = data.voltage;
    this._isNailed = data.isNailed;
  }

  get plumage(){
    if(this._voltage > 100) return "scorched";
    else return this._plumage || "beautiful";
  }

  get airSpeedVelocity(){
    return (this._isNailed)? 0 : 10 + this._voltage / 10;
  }
}


class EuropeanSwallowDelegate{
  get airSpeedVelocity(){ return 35;}
}

function createBird(data){
  switch (data.type){
    case 'AfricanSwallow':
      return new AfricanSwallow(data)
    case 'NorwegianBlueParrot':
      return new NorwegianBlueParrot(data);
    default: 
      return new Bird(data);
  }
}