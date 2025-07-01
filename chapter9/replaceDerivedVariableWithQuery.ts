type Adjustment = {
  amount: number;
};

class ProductionPlan{
    private _production: string;
    private _initialProduction: string;
    private _productionAccumulator: number;
    private _adjustments: Adjustment[];


    constructor(production: string){
      this._initialProduction = production;
      this._productionAccumulator = 0;
      this._adjustments = [];
    }
    get production(){
      return this._initialProduction + this._productionAccumulator;
    }

    applyAdjustment(anAdjustment: Adjustment) {
      this._adjustments.push(anAdjustment);
    }

    get calculatedProductionAccumulator() {
      return this._adjustments.reduce((total, adjustment) => total + adjustment.amount, 0);
    }
    
  }