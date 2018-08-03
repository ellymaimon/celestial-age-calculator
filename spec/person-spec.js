import { Person } from '../src/person.js';

describe('Person', function () {
    let reusablePerson;

    beforeEach(function () {
        reusablePerson = new Person(26, 1991, 8, 21);
    });

    it('should test whether a Person has an age, a birth date, and a current date', function () {
        expect(reusablePerson.ageInYears).toEqual(26);
        expect(reusablePerson.birthDate.getFullYear()).toEqual(1991);
        expect(reusablePerson.birthDate.getMonth()).toEqual(7);
        expect(reusablePerson.birthDate.getDate()).toEqual(21);
        expect(reusablePerson.currentDate.getMonth()).toEqual(7);
    });

    it('should test whether a the age of a person can be converted to seconds', function () {
        let ageInSeconds = reusablePerson.convertYearsToSeconds();
        let expectedAgeInSeconds = 26 * 31557600;
        expect(ageInSeconds).toEqual(expectedAgeInSeconds);
    });

    it('should test whether the age of the user in seconds can be calculated', function () {
        let ageInSeconds = reusablePerson.ageInSeconds();

        let secondsToCurrentDate = reusablePerson.currentDate.getTime() / 1000; //seconds from 1/1/1970 to current date (8/3/2018)
        let secondsToBirthDate = reusablePerson.birthDate.getTime() / 1000; //seconds from 1/1/1970 to input birth date (8/21/1991)
        let expectedAgeInSeconds = secondsToCurrentDate - secondsToBirthDate;

        expect(ageInSeconds).toEqual(expectedAgeInSeconds);
    });

    it('should test whether the age of the user in Mercury years can be calculated', function () {
        let planet = "mercury";
        let ageInMercury = reusablePerson.ageInPlanetYears(planet);

        let ageInSeconds = reusablePerson.ageInSeconds();
        let secondsInMercuryYear = reusablePerson.secondsInYear * 0.241;
        let expectedAgeInMercury = ageInSeconds / secondsInMercuryYear;

        expect(ageInMercury).toEqual(expectedAgeInMercury);
    });

    it('should test whether the age of the user in Venus years can be calculated', function () {
        let planet = "venus";
        let ageInVenus = reusablePerson.ageInPlanetYears(planet);

        let ageInSeconds = reusablePerson.ageInSeconds();
        let secondsInVenusYear = reusablePerson.secondsInYear * 0.6152;
        let expectedAgeInVenus = ageInSeconds / secondsInVenusYear;

        expect(ageInVenus).toEqual(expectedAgeInVenus);
    });

    it('should test whether the age of the user in Earth years can be calculated', function () {
        let planet = "earth";
        let ageInEarth = reusablePerson.ageInPlanetYears(planet);

        let ageInSeconds = reusablePerson.ageInSeconds();
        let secondsInEarthYear = reusablePerson.secondsInYear;
        let expectedAgeInEarth = ageInSeconds / secondsInEarthYear;

        expect(ageInEarth).toEqual(expectedAgeInEarth);
    });

    it('should test whether the age of the user in Mars years can be calculated', function () {
        let planet = "mars";
        let ageInMars = reusablePerson.ageInPlanetYears(planet);

        let ageInSeconds = reusablePerson.ageInSeconds();
        let secondsInMarsYear = reusablePerson.secondsInYear * 1.8809;
        let expectedAgeInMars = ageInSeconds / secondsInMarsYear;

        expect(ageInMars).toEqual(expectedAgeInMars);
    });

    it('should test whether the age of the user in Jupiter years can be calculated', function () {
        let planet = "jupiter";
        let ageInJupiter = reusablePerson.ageInPlanetYears(planet);

        let ageInSeconds = reusablePerson.ageInSeconds();
        let secondsInJupiterYear = reusablePerson.secondsInYear * 11.8618;
        let expectedAgeInJupiter = ageInSeconds / secondsInJupiterYear;

        expect(ageInJupiter).toEqual(expectedAgeInJupiter);
    });

    it('should test whether the age of the user in Saturn years can be calculated', function () {
        let planet = "saturn";
        let ageInSaturn = reusablePerson.ageInPlanetYears(planet);

        let ageInSeconds = reusablePerson.ageInSeconds();
        let secondsInSaturnYear = reusablePerson.secondsInYear * 29.457;
        let expectedAgeInSaturn = ageInSeconds / secondsInSaturnYear;

        expect(ageInSaturn).toEqual(expectedAgeInSaturn);
    });

    it('should test whether the age of the user in Uranus years can be calculated', function () {
        let planet = "uranus";
        let ageInUranus = reusablePerson.ageInPlanetYears(planet);

        let ageInSeconds = reusablePerson.ageInSeconds();
        let secondsInUranusYear = reusablePerson.secondsInYear * 84;
        let expectedAgeInUranus = ageInSeconds / secondsInUranusYear;

        expect(ageInUranus).toEqual(expectedAgeInUranus);
    });

    it('should test whether the age of the user in Neptune years can be calculated', function () {
        let planet = "neptune";
        let ageInNeptune = reusablePerson.ageInPlanetYears(planet);

        let ageInSeconds = reusablePerson.ageInSeconds();
        let secondsInNeptuneYear = reusablePerson.secondsInYear * 164.8;
        let expectedAgeInNeptune = ageInSeconds / secondsInNeptuneYear;

        expect(ageInNeptune).toEqual(expectedAgeInNeptune);
    });

    it('should test whether the age of the user in Pluto years can be calculated', function () {
        let planet = "pluto";
        let ageInPluto = reusablePerson.ageInPlanetYears(planet);

        let ageInSeconds = reusablePerson.ageInSeconds();
        let secondsInPlutoYear = reusablePerson.secondsInYear * 248;
        let expectedAgeInPluto = ageInSeconds / secondsInPlutoYear;

        expect(ageInPluto).toEqual(expectedAgeInPluto);
    });

    it('should test whether the remaining years a user has to live in Mercury can be calculated', function () {
        let planet = "mercury";
        let yearsToLive = reusablePerson.yearsToLive(planet);


        let expectancyInMercury = reusablePerson.lifeExpectancy / reusablePerson.planetOrbitalPeriods[0]; // ~331
        let userAgeInMercury = reusablePerson.ageInPlanetYears(planet); // ~112
        let expectedYearsToLive = expectancyInMercury - userAgeInMercury;

        console.log(expectedYearsToLive);

        expect(yearsToLive).toEqual(expectedYearsToLive);
    });
});