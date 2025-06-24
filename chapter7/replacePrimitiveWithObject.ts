([] as Order[]).filter(order => {
  return order.priority.higherThan(new Priority("normal"));
})

class Priority {
  constructor(public value: any) {
    if (value instanceof Priority) return value;
    if (Priority.legalValues().includes(value))
      this.value = value;
    else
      throw new Error(`Invalid priority value: ${value}`);
    }

    toString(){
      return this.value;
    }

    get _index(){ return Priority.legalValues().findIndex(v => v === this.value); }

    static legalValues() {
      return ["low", "normal", "high", "rush"];
    }
    equals(other: Priority) {
      if (other instanceof Priority) {
        return this._index === other._index;
      }
      return false;
    }
    higherThan(other: Priority) {
      if (other instanceof Priority) {
        return this._index > other._index;
      }
      return false;
    }
    lowerThan(other: Priority) {
      if (other instanceof Priority) {
        return this._index < other._index;
      }
      return false;
    }
}
class Order{
  _priority: Priority;
  get priority() {
    return this._priority;
  }

  set priority(value) {
    this._priority = value;
  }
}