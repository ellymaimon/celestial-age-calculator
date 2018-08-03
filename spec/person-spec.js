import { Person } from '../src/person.js';

describe('Person', function () {
    let reusablePerson;

    beforeEach(function () {
        reusablePerson = new Person(26, 1991, 08, 21);
    });

    it('should test whether a Person has an age, a birth date, and a current date', function () {
        expect(reusablePerson.ageInYears).toEqual(26);
        expect(reusablePerson.birthDate.getFullYear()).toEqual(1991);
        expect(reusablePerson.birthDate.getMonth()).toEqual(7);
        expect(reusablePerson.birthDate.getDate()).toEqual(21);
        expect(reusablePerson.currentDate.getMonth()).toEqual(new Date().getMonth());
    });

    it('should test whether a the age of a person can be converted to seconds', function () {
        let ageInSeconds = reusablePerson.convertYearsToSeconds();
        let expected = 26 * 31557600;
        expect(ageInSeconds).toEqual(expected);
    });

    // it('should test whether the age of the user in seconds can be calculated', function() {
    //     let ageInSeconds =  reusablePerson.ageInSeconds();
    //     let expected = (26 * 31557600) + (86400 * ;
    //     expect(ageInSeconds).toEqual(expected);
    // });
});