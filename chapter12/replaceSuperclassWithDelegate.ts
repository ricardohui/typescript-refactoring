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

class Scroll{
  _id
  _lastCleaned
  _catalogItem
  constructor(id, dataLastCleaned, catalogId, catalog) {
    this._id = id;
    this._catalogItem = catalog.get(catalogId)
    this._lastCleaned = dataLastCleaned;
  }

  needsCleaning(targetDate){
    const threshold = this.hasTag("revered")? 700: 1500;
    return this.daysSinceLastCleaning(targetDate) > threshold;
  }

  daysSinceLastCleaning(targetDate){
    return this._lastCleaned.until(targetDate, ChronoUnit.DAYS)
  }

  get id(){
    return this._id;
  }

  get title(){return this._catalogItem.title;}
  hasTag(aString){return this._catalogItem.hasTag(aString)}
}

const scrolls = aDocument.map(record => new Scroll(
  record.id, 
  LocalDate.parse(record.lastCleaned),
  record.catalogData.id,
  catalog
)
)