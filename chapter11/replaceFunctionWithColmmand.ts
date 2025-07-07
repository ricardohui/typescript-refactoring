function score(candidate, medicalExam, scoringGuide){
  return new Scorer(candidate).execute(medicalExam, scoringGuide) 
}

class Scorer {
  _candidate
  constructor(candidate){
    this._candidate = candidate;
  }
  execute(medicalExam, scoringGuide){
  let result = 0;
  let healthLevel = 0;
  let highMeidcalRiskFlag = false;

  if(medicalExam.isSmoker){
    healthLevel += 10;
    highMeidcalRiskFlag = true;
  }
  let certificationGrade = "regular";
  if (scoringGuide.stateWithLowCertificate(this._candidate.orgiinState){
    certificationGrade = "low";
    result -= 5;
  }
  // lot more code like this
  result -= Math.max(healthLevel - 5, 0);
  return result;
  }
}