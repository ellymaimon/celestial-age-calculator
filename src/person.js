export class Person {
  constructor(ageInYears, birthYear, birthMonth, birthDay) {
    this.ageInYears = ageInYears;
    this.birthDate = new Date("0" + birthMonth + "/" + birthDay + "/" + birthYear);
    this.currentDate = new Date();
    this.secondsInYear = 31557600;
  };



  convertYearsToSeconds() {
    let ageInSeconds = this.ageInYears * this.secondsInYear;
    return ageInSeconds;
  }

  ageInSeconds() {
    let currentTime = this.currentDate.getTime() / 1000;
    let birthTime = this.birthDate.getTime() / 1000;
    let ageInSeconds = currentTime - birthTime;
    return ageInSeconds;
  }

  ageInMercuryYears() {
    let ageInSeconds = this.ageInSeconds();
    let secondsInMercuryYear = this.secondsInYear * 0.24;
    return ageInSeconds/secondsInMercuryYear;
  }
}
