function score(candidate, medicalExam, scoringGuide){
  let result = 0;
  let healthLevel = 0;
  let highMeidcalRiskFlag = false;

  if(medicalExam.isSmoker){
    healthLevel += 10;
    highMeidcalRiskFlag = true;
  }
  let certificationGrade = "regular";
  if (scoringGuide.stateWithLowCertificate.orgiinState)){
    certificationGrade = "low";
    result -= 5;
  }
  // lot more code like this
  result -= Math.max(healthLevel - 5, 0);
  return result;
}