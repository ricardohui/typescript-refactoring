class Account {
  
}

class AccountType {
  get overdraftCharge() {
    return this._type.overdraftCharge(this);
  }
}