import { Person } from '../src/person.js';

describe('Person', function () {
	let reusablePerson;
	let oldPerson;

	beforeEach(function () {
		reusablePerson = new Person(26, 1991, 8, 21);
		oldPerson = new Person(82, 1935, 8, 21);
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

	it('should test whether a the age of an old person can be converted to seconds', function () {
		let ageInSeconds = oldPerson.convertYearsToSeconds();
		let expectedAgeInSeconds = 82 * 31557600;
		expect(ageInSeconds).toEqual(expectedAgeInSeconds);
	});

	it('should test whether the age of a user can be calculated in seconds', function () {
		let ageInSeconds = reusablePerson.ageInSeconds();

		let secondsToCurrentDate = reusablePerson.currentDate.getTime() / 1000;
		let secondsToBirthDate = reusablePerson.birthDate.getTime() / 1000;
		let expectedAgeInSeconds = secondsToCurrentDate - secondsToBirthDate;

		expect(ageInSeconds).toEqual(expectedAgeInSeconds);
	});

	it('should test whether the age of an old user can be calculated in seconds', function () {
		let ageInSeconds = oldPerson.ageInSeconds();

		let secondsToCurrentDate = oldPerson.currentDate.getTime() / 1000;
		let secondsToBirthDate = (-oldPerson.birthDate.getTime() + oldPerson.currentDate.getTime()) / 1000;
		let expectedAgeInSeconds = secondsToCurrentDate + secondsToBirthDate;

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

	it('should test whether the age of an old user in Mercury years can be calculated', function () {
		let planet = "mercury";
		let ageInMercury = oldPerson.ageInPlanetYears(planet);

		let ageInSeconds = oldPerson.ageInSeconds();
		let secondsInMercuryYear = oldPerson.secondsInYear * 0.241;
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

		let expectancyInMercury = reusablePerson.lifeExpectancy / reusablePerson.planetOrbitalPeriods[0];
		let userAgeInMercury = reusablePerson.ageInPlanetYears(planet);
		let expectedYearsToLive = expectancyInMercury - userAgeInMercury;

		expect(yearsToLive).toBeGreaterThan(0);
		expect(yearsToLive).toEqual(expectedYearsToLive);
	});

	it('should test whether the years over the expected an old user has to live in Mercury can be calculated', function () {
		let planet = "mercury";
		let yearsLivedAboveExpectancy = oldPerson.yearsToLive(planet);

		let expectancyInMercury = oldPerson.lifeExpectancy / oldPerson.planetOrbitalPeriods[0];
		let userAgeInMercury = oldPerson.ageInPlanetYears(planet);
		let expectedYearsLivedAboveExpecancy = userAgeInMercury - expectancyInMercury;

		expect(yearsLivedAboveExpectancy).toBeGreaterThan(0);
		expect(yearsLivedAboveExpectancy).toEqual(expectedYearsLivedAboveExpecancy);
	});

	it('should test whether the remaining years a user has to live in Venus can be calculated', function () {
		let planet = "venus";
		let yearsToLive = reusablePerson.yearsToLive(planet);

		let expectancyInVenus = reusablePerson.lifeExpectancy / reusablePerson.planetOrbitalPeriods[1];
		let userAgeInVenus = reusablePerson.ageInPlanetYears(planet);
		let expectedYearsToLive = expectancyInVenus - userAgeInVenus;

		expect(yearsToLive).toEqual(expectedYearsToLive);
	});

	it('should test whether the remaining years a user has to live in Earth can be calculated', function () {
		let planet = "earth";
		let yearsToLive = reusablePerson.yearsToLive(planet);

		let expectancyInEarth = reusablePerson.lifeExpectancy / reusablePerson.planetOrbitalPeriods[2];
		let userAgeInEarth = reusablePerson.ageInPlanetYears(planet);
		let expectedYearsToLive = expectancyInEarth - userAgeInEarth;

		expect(yearsToLive).toEqual(expectedYearsToLive);
	});

	it('should test whether the years over the expected an old user has to live in Earth can be calculated', function () {
		let planet = "earth";
		let yearsLivedAboveExpectancy = oldPerson.yearsToLive(planet);

		let expectancyInEarth = oldPerson.lifeExpectancy / oldPerson.planetOrbitalPeriods[2];
		let userAgeInEarth = oldPerson.ageInPlanetYears(planet);
		let expectedYearsLivedAboveExpecancy = userAgeInEarth - expectancyInEarth;

		expect(yearsLivedAboveExpectancy).toBeGreaterThan(0);
		expect(yearsLivedAboveExpectancy).toEqual(expectedYearsLivedAboveExpecancy);
	});

	it('should test whether the remaining years a user has to live in Mars can be calculated', function () {
		let planet = "mars";
		let yearsToLive = reusablePerson.yearsToLive(planet);

		let expectancyInMars = reusablePerson.lifeExpectancy / reusablePerson.planetOrbitalPeriods[3];
		let userAgeInMars = reusablePerson.ageInPlanetYears(planet);
		let expectedYearsToLive = expectancyInMars - userAgeInMars;

		expect(yearsToLive).toEqual(expectedYearsToLive);
	});

	it('should test whether the remaining years a user has to live in Jupiter can be calculated', function () {
		let planet = "jupiter";
		let yearsToLive = reusablePerson.yearsToLive(planet);

		let expectancyInJupiter = reusablePerson.lifeExpectancy / reusablePerson.planetOrbitalPeriods[4];
		let userAgeInJupiter = reusablePerson.ageInPlanetYears(planet);
		let expectedYearsToLive = expectancyInJupiter - userAgeInJupiter;

		expect(yearsToLive).toEqual(expectedYearsToLive);
	});

	it('should test whether the remaining years a user has to live in Saturn can be calculated', function () {
		let planet = "saturn";
		let yearsToLive = reusablePerson.yearsToLive(planet);

		let expectancyInSaturn = reusablePerson.lifeExpectancy / reusablePerson.planetOrbitalPeriods[5];
		let userAgeInSaturn = reusablePerson.ageInPlanetYears(planet);
		let expectedYearsToLive = expectancyInSaturn - userAgeInSaturn;

		expect(yearsToLive).toEqual(expectedYearsToLive);
	});

	it('should test whether the remaining years a user has to live in Uranus can be calculated', function () {
		let planet = "uranus";
		let yearsToLive = reusablePerson.yearsToLive(planet);

		let expectancyInUranus = reusablePerson.lifeExpectancy / reusablePerson.planetOrbitalPeriods[6];
		let userAgeInUranus = reusablePerson.ageInPlanetYears(planet);
		let expectedYearsToLive = expectancyInUranus - userAgeInUranus;

		expect(yearsToLive).toEqual(expectedYearsToLive);
	});

	it('should test whether the remaining years a user has to live in Neptune can be calculated', function () {
		let planet = "neptune";
		let yearsToLive = reusablePerson.yearsToLive(planet);

		let expectancyInNeptune = reusablePerson.lifeExpectancy / reusablePerson.planetOrbitalPeriods[7];
		let userAgeInNeptune = reusablePerson.ageInPlanetYears(planet);
		let expectedYearsToLive = expectancyInNeptune - userAgeInNeptune;

		expect(yearsToLive).toEqual(expectedYearsToLive);
	});

	it('should test whether the remaining years a user has to live in Pluto can be calculated', function () {
		let planet = "pluto";
		let yearsToLive = reusablePerson.yearsToLive(planet);

		let expectancyInPluto = reusablePerson.lifeExpectancy / reusablePerson.planetOrbitalPeriods[8];
		let userAgeInPluto = reusablePerson.ageInPlanetYears(planet);
		let expectedYearsToLive = expectancyInPluto - userAgeInPluto;

		expect(yearsToLive).toEqual(expectedYearsToLive);
	});

	it('should test whether the years over the expected an old user has to live in Pluto can be calculated', function () {
		let planet = "pluto";
		let yearsLivedAboveExpectancy = oldPerson.yearsToLive(planet);

		let expectancyInPluto = oldPerson.lifeExpectancy / oldPerson.planetOrbitalPeriods[8];
		let userAgeInPluto = oldPerson.ageInPlanetYears(planet);
		let expectedYearsLivedAboveExpecancy = userAgeInPluto - expectancyInPluto;

		expect(yearsLivedAboveExpectancy).toBeGreaterThan(0);
		expect(yearsLivedAboveExpectancy).toEqual(expectedYearsLivedAboveExpecancy);
	});
});