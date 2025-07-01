function disabilityAmount(anEmployee){
  if(anEmployee.seniority < 2 || anEmployee.monthDisabled > 12 || anEmployee.isPartTime) return 0;
  // compute the disability amount
  return anEmployee.monthsDisabled * 100;
}