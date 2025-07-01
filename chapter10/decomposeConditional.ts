if(isSummer()) {
  charge = summerCharge();
} else {
  charge = quantity * plan.regularRate + plan.regularServiceCharge;
}

function summerCharge(): any {
  return quantity * plan.summerRate;
}

function isSummer() {
  return !aData.isBefore(plan.summerStart) && !aDate.isAfter(plan.summerEnd);
}
