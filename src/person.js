export class Person {
  constructor(ageInYears, birthYear, birthMonth, birthDay) {
    this.ageInYears = ageInYears;
    this.birthDate = new Date("0" + birthMonth + "/" + birthDay + "/" + birthYear);
    this.currentDate = new Date();
    this.secondsInYear = 31557600;
    //In order: Mercury, Venus, Mars, Jupiter, Saturn, Uranus, Neptune, Pluto
    this.planetOrbitalPeriods = [0.241, 0.6152, 1.8809, 11.8618, 29.457, 84, 164.8, 248];
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
    let secondsInMercuryYear = this.secondsInYear * 0.241;
    return ageInSeconds/secondsInMercuryYear;
  }

  ageInVenusYears() {
    let ageInSeconds = this.ageInSeconds();
    let secondsInVenusYear = this.secondsInYear * 0.6152;
    return ageInSeconds/secondsInVenusYear;
  }

  // ageInPlanetYears(planet) {
  //   if (planet == "mercury") {
  //     let ageInSeconds = this.ageInSeconds();
  //     let secondsInPlanetYear = this.secondsInYear * this.planetOrbitalPeriods[0];
  //     return ageInSeconds/secondsInPlanetYear; 
  //   }
  // }
}
