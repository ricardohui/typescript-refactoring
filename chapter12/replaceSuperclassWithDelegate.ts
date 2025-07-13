class CatalogItem{
  _id;
  _title;
  _tags;
  constructor(id, title, tags){
    this._id = id;
    this.title = title;
    this._tags = tags;
  }

  get id(){
    return this._id;
  }

  get title(){ return this.title;}

  hasTag(arg){ return this._tags.includes(arg);}
}

class Scroll extends CatalogItem {
  _lastCleaned
  constructor(id, title, tags, dataLastCleaned) {
    super(id, title, tags);
    this._lastCleaned = dataLastCleaned;
  }

  needsCleaning(targetDate){
    const threshold = this.hasTag("revered")? 700: 1500;
    return this.daysSinceLastCleaning(targetDate) > threshold;
  }

  daysSinceLastCleaning(targetDate){
    return this._lastCleaned.until(targetDate, ChronoUnit.DAYS)
  }
}