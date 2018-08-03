export class Person {
  constructor(ageInYears, birthYear, birthMonth, birthDay) {
    this.ageInYears = ageInYears;
    this.birthDate = new Date(birthYear + "-" + birthMonth + "-" + birthDay);
    this.currentDate = new Date();
  };

  convertYearsToSeconds() {
    let ageInSeconds = this.ageInYears * 31557600;
    return ageInSeconds;
  }

  
}

//day = 86400 seconds
//var d = new Date(year, month, day, hours, minutes, seconds, milliseconds