function score(candidate, medicalExam, scoringGuide){
  return new Scorer(candidate,medicalExam,scoringGuide).execute() 
}

class Scorer {
  _candidate
  _medicalExam;
  _scoringGuide;
  _result;
  _healthLevel;
  _highMedicalRiskFlag;

  constructor(candidate, medicalExam, scoringGuide){
    this._candidate = candidate;
    this._medicalExam = medicalExam;
    this._scoringGuide = scoringGuide;
  }
  execute(){
  this._result = 0;
  this._healthLevel = 0;
  this._highMedicalRiskFlag = false;

  if(this._medicalExam.isSmoker){
    this._healthLevel += 10;
    this._highMedicalRiskFlag = true;
  }
  let certificationGrade = "regular";
  if (this._scoringGuide.stateWithLowCertificate(this._candidate.orgiinState){
    certificationGrade = "low";
    this._result -= 5;
  }
  // lot more code like this
  this._result -= Math.max(this._healthLevel - 5, 0);
  return this._result;
  }
}