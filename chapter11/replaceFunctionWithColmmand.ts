function score(candidate, medicalExam, scoringGuide){
  return new Scorer(candidate,medicalExam,scoringGuide).execute() 
}

class Scorer {
  _candidate
  _medicalExam;
  _scoringGuide;
  constructor(candidate, medicalExam, scoringGuide){
    this._candidate = candidate;
    this._medicalExam = medicalExam;
    this._scoringGuide = scoringGuide;
  }
  execute(){
  let result = 0;
  let healthLevel = 0;
  let highMeidcalRiskFlag = false;

  if(this._medicalExam.isSmoker){
    healthLevel += 10;
    highMeidcalRiskFlag = true;
  }
  let certificationGrade = "regular";
  if (this._scoringGuide.stateWithLowCertificate(this._candidate.orgiinState){
    certificationGrade = "low";
    result -= 5;
  }
  // lot more code like this
  result -= Math.max(healthLevel - 5, 0);
  return result;
  }
}