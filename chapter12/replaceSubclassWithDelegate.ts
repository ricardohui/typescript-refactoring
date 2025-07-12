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
        return new EuropeanSwallowDelegate(data, this);
      case  'AfricanSwallow':
        return new AfricanSwallowDelegate(data, this);
      case 'NorwegianBlueParrot':
        return new NorwegianBlueParrotDelegate(data, this);
      default: return new SpeciesDelegate(data, this);
    }
  }

  get name(){ return this._name;}

  get plumage(){
    return this._speciesDelegate; 
  }
  
  get airSpeedVelocity(): number | null{
    return this._speciesDelegate.airSpeedVelocity;
  }
}
class SpeciesDelegate{
  _bird;
  constructor(data, bird){
    this._bird = bird;
  }

  get plumage(){
    return this._bird._plumage || "average"
  }
}

class EuropeanSwallowDelegate extends SpeciesDelegate{
  get airSpeedVelocity(){ return 35;}
}

class AfricanSwallowDelegate extends SpeciesDelegate{
  _numberOfCoconuts;
  constructor(data, bird){
    super(data, bird)
    this._numberOfCoconuts = data._numberOfCoconuts;
  }

  get airSpeedVelocity(){
    return 40 - 2 * this._numberOfCoconuts;
  }
}

class NorwegianBlueParrotDelegate extends SpeciesDelegate{
  _voltage;
  _isNailed;
  constructor(data, bird){
    super(data, bird)
    this._voltage = data.voltage;
    this._isNailed = data.isNailed;
  }

  get plumage(){
    if(this._voltage > 100) return "scorched";
    else return this._bird._plumage || "beautiful";
  }
  get airSpeedVelocity(){
    return (this._isNailed) ? 0 : 10 + this._voltage / 10;
  }
}
