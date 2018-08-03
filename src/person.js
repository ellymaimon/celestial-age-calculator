export class Person {
  constructor(ageInYears, birthYear, birthMonth, birthDay) {
    this.ageInYears = ageInYears;
    this.birthDate = new Date("0" + birthMonth + "/" + birthDay + "/" + birthYear);
    this.currentDate = new Date();
  };

  convertYearsToSeconds() {
    let ageInSeconds = this.ageInYears * 31557600;
    return ageInSeconds;
  }

  ageInSeconds() {
    let currentTime = this.currentDate.getTime() / 1000;
    let birthTime = this.birthDate.getTime() / 1000;
    let ageInSeconds = currentTime - birthTime;
    return ageInSeconds;
  }


}

//day = 86400 seconds
//var d = new Date(year, month, day, hours, minutes, seconds, milliseconds