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

    it('should test whether the age of the user in seconds can be calculated', function() {
        let ageInSeconds = reusablePerson.ageInSeconds();

        let x = reusablePerson.currentDate.getTime() / 1000; //seconds from 1/1/1970 to current date (8/3/2018)
        let y = reusablePerson.birthDate.getTime() / 1000; //seconds from 1/1/1970 to 8/21/1991
        let expectedAgeInSeconds = x - y;

        expect(ageInSeconds).toEqual(expectedAgeInSeconds);
    });

    it('should test whether the age of the user in Mercury years can be calculated', function() {
        let planet = "mercury";
        let ageInMercury = reusablePerson.ageInPlanetYears(planet);

        let ageInSeconds = reusablePerson.ageInSeconds();
        let secondsInMercuryYear = reusablePerson.secondsInYear * 0.241;
        let expectedAgeInMercury = ageInSeconds/secondsInMercuryYear;

        expect(ageInMercury).toEqual(expectedAgeInMercury);
    });

    it('should test whether the age of the user in Venus years can be calculated', function() {
        let planet = "venus";
        let ageInVenus = reusablePerson.ageInPlanetYears(planet);

        let ageInSeconds = reusablePerson.ageInSeconds();
        let secondsInVenusYear = reusablePerson.secondsInYear * 0.6152;
        let expectedAgeInVenus = ageInSeconds/secondsInVenusYear;

        expect(ageInVenus).toEqual(expectedAgeInVenus);
    });

    it('should test whether the age of the user in Earth years can be calculated', function() {
        let planet = "earth";
        let ageInEarth = reusablePerson.ageInPlanetYears(planet);

        let ageInSeconds = reusablePerson.ageInSeconds();
        let secondsInEarthYear = reusablePerson.secondsInYear;
        let expectedAgeInEarth = ageInSeconds/secondsInEarthYear;

        expect(ageInEarth).toEqual(expectedAgeInEarth);
    });

    it('should test whether the age of the user in Mars years can be calculated', function() {
        let planet = "mars";
        let ageInMars = reusablePerson.ageInPlanetYears(planet);

        let ageInSeconds = reusablePerson.ageInSeconds();
        let secondsInMarsYear = reusablePerson.secondsInYear * 1.8809;
        let expectedAgeInMars = ageInSeconds/secondsInMarsYear;

        expect(ageInMars).toEqual(expectedAgeInMars);
    });

    it('should test whether the age of the user in Jupiter years can be calculated', function() {
        let planet = "jupiter";
        let ageInJupiter = reusablePerson.ageInPlanetYears(planet);

        let ageInSeconds = reusablePerson.ageInSeconds();
        let secondsInJupiterYear = reusablePerson.secondsInYear * 11.8618;
        let expectedAgeInJupiter = ageInSeconds/secondsInJupiterYear;

        expect(ageInJupiter).toEqual(expectedAgeInJupiter);
    });


});