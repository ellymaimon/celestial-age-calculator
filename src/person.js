export class Person {
  constructor(ageInYears, birthYear, birthMonth, birthDay) {
    this.ageInYears = ageInYears; //26
    this.birthYear = birthYear; //1991
    this.birthMonth = birthMonth; //6 (June)
    this.birthDay = birthDay; // 22
    this.currentDate = new Date(); //Fri Aug 03 2018 10:26:38 GMT-0700 (Pacific Daylight Time)
  };

  convertToSeconds() {
    let ageInSeconds = this.ageInYears * 3.154e+7;
    return ageInSeconds;
  }
}
