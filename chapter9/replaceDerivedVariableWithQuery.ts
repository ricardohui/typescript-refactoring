type Adjustment = {
  amount: number;
};

class ProductionPlan{
    private _production: string;
    _adjustments: Adjustment[] = [];
    get production(){
      return this._production;
    }

    applyAdjustment(anAdjustment: Adjustment) {
      this._adjustments.push(anAdjustment);
      this._production += anAdjustment.amount;
    }

    get calculatedProduction() {
      return this._adjustments.reduce((sum, a)=> sum + a.amount,0);
    }
    
  }