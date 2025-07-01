function disabilityAmount(anEmployee){
  if(isNotEligibleForDisability(anEmployee)) return 0;
  // compute the disability amount
  return anEmployee.monthsDisabled * 100;
}

function isNotEligibleForDisability(anEmployee: any) {
  return anEmployee.seniority < 2 || anEmployee.monthDisabled > 12 || anEmployee.isPartTime;
}
