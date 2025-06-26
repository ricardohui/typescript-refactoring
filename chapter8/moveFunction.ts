class Account {
  get overdraftCharge() {
    return this._type.overdraftCharge(this);
  }
}

class AccountType{

}