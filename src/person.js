export class Person {
  constructor(birthYear, birthMonth, birthDay) {
    this.birthDate = new Date("0" + birthMonth + "/" + birthDay + "/" + birthYear);
    this.currentDate = new Date();
    this.secondsInYear = 31557600;
    this.lifeExpectancy = 80;
    //In order: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune, Pluto
    this.planetOrbitalPeriods = [0.241, 0.6152, 1, 1.8809, 11.8618, 29.457, 84, 164.8, 248];
  };

  ageInSeconds() {
    if (this.birthDate.getTime() < 0) {
      let currentTime = this.currentDate.getTime() / 1000;
      let birthTime = (-this.birthDate.getTime() + this.currentDate.getTime()) / 1000;
      let ageInSeconds = currentTime + birthTime;
      return ageInSeconds;
    } 
    else {
      let currentTime = this.currentDate.getTime() / 1000;
      let birthTime = this.birthDate.getTime() / 1000;
      let ageInSeconds = currentTime - birthTime;
      return ageInSeconds;
    }
  }

  ageInPlanetYears(planet) {
    if (planet === "mercury") {
      let ageInSeconds = this.ageInSeconds();
      let secondsInPlanetYear = this.secondsInYear * this.planetOrbitalPeriods[0];
      return ageInSeconds/secondsInPlanetYear; 
    }

    if (planet === "venus") {
      let ageInSeconds = this.ageInSeconds();
      let secondsInPlanetYear = this.secondsInYear * this.planetOrbitalPeriods[1];
      return ageInSeconds/secondsInPlanetYear; 
    }

    if (planet === "earth") {
      let ageInSeconds = this.ageInSeconds();
      let secondsInPlanetYear = this.secondsInYear * this.planetOrbitalPeriods[2];
      return ageInSeconds/secondsInPlanetYear; 
    }

    if (planet === "mars") {
      let ageInSeconds = this.ageInSeconds();
      let secondsInPlanetYear = this.secondsInYear * this.planetOrbitalPeriods[3];
      return ageInSeconds/secondsInPlanetYear; 
    }

    if (planet === "jupiter") {
      let ageInSeconds = this.ageInSeconds();
      let secondsInPlanetYear = this.secondsInYear * this.planetOrbitalPeriods[4];
      return ageInSeconds/secondsInPlanetYear; 
    }
    
    if (planet === "saturn") {
      let ageInSeconds = this.ageInSeconds();
      let secondsInPlanetYear = this.secondsInYear * this.planetOrbitalPeriods[5];
      return ageInSeconds/secondsInPlanetYear; 
    }

    if (planet === "uranus") {
      let ageInSeconds = this.ageInSeconds();
      let secondsInPlanetYear = this.secondsInYear * this.planetOrbitalPeriods[6];
      return ageInSeconds/secondsInPlanetYear; 
    }

    if (planet === "neptune") {
      let ageInSeconds = this.ageInSeconds();
      let secondsInPlanetYear = this.secondsInYear * this.planetOrbitalPeriods[7];
      return ageInSeconds/secondsInPlanetYear; 
    }

    if (planet === "pluto") {
      let ageInSeconds = this.ageInSeconds();
      let secondsInPlanetYear = this.secondsInYear * this.planetOrbitalPeriods[8];
      return ageInSeconds/secondsInPlanetYear; 
    }
  }

  yearsToLive(planet) {
    if (planet === "mercury") {
      let expectancy = this.lifeExpectancy / this.planetOrbitalPeriods[0];
      let userAgeInPlanet = this.ageInPlanetYears(planet);
      
      if(userAgeInPlanet > expectancy) return userAgeInPlanet - expectancy;
      else return expectancy - userAgeInPlanet;
    }

    if (planet === "venus") {
      let expectancy = this.lifeExpectancy / this.planetOrbitalPeriods[1];
      let userAgeInPlanet = this.ageInPlanetYears(planet);

      if(userAgeInPlanet > expectancy) return userAgeInPlanet - expectancy;
      else return expectancy - userAgeInPlanet;
    }

    if (planet === "earth") {
      let expectancy = this.lifeExpectancy / this.planetOrbitalPeriods[2];
      let userAgeInPlanet = this.ageInPlanetYears(planet);

      if(userAgeInPlanet > expectancy) return userAgeInPlanet - expectancy;
      else return expectancy - userAgeInPlanet;
    }

    if (planet === "mars") {
      let expectancy = this.lifeExpectancy / this.planetOrbitalPeriods[3];
      let userAgeInPlanet = this.ageInPlanetYears(planet);

      if(userAgeInPlanet > expectancy) return userAgeInPlanet - expectancy;
      else return expectancy - userAgeInPlanet;
    }

    if (planet === "jupiter") {
      let expectancy = this.lifeExpectancy / this.planetOrbitalPeriods[4];
      let userAgeInPlanet = this.ageInPlanetYears(planet);

      if(userAgeInPlanet > expectancy) return userAgeInPlanet - expectancy;
      else return expectancy - userAgeInPlanet;
    }

    if (planet === "saturn") {
      let expectancy = this.lifeExpectancy / this.planetOrbitalPeriods[5];
      let userAgeInPlanet = this.ageInPlanetYears(planet);

      if(userAgeInPlanet > expectancy) return userAgeInPlanet - expectancy;
      else return expectancy - userAgeInPlanet;
    }

    if (planet === "uranus") {
      let expectancy = this.lifeExpectancy / this.planetOrbitalPeriods[6];
      let userAgeInPlanet = this.ageInPlanetYears(planet);

      if(userAgeInPlanet > expectancy) return userAgeInPlanet - expectancy;
      else return expectancy - userAgeInPlanet;
    }

    if (planet === "neptune") {
      let expectancy = this.lifeExpectancy / this.planetOrbitalPeriods[7];
      let userAgeInPlanet = this.ageInPlanetYears(planet);

      if(userAgeInPlanet > expectancy) return userAgeInPlanet - expectancy;
      else return expectancy - userAgeInPlanet;
    }

    if (planet === "pluto") {
      let expectancy = this.lifeExpectancy / this.planetOrbitalPeriods[8];
      let userAgeInPlanet = this.ageInPlanetYears(planet);

      if(userAgeInPlanet > expectancy) return userAgeInPlanet - expectancy;
      else return expectancy - userAgeInPlanet;
    }
  }
}