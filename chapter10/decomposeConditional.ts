if(isSummer()) {
  charge = quantity * plan.summerRate;
} else {
  charge = quantity * plan.regularRate + plan.regularServiceCharge;
}

function isSummer() {
  return !aData.isBefore(plan.summerStart) && !aDate.isAfter(plan.summerEnd);
}
