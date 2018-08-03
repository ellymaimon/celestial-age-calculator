import { Person } from '../src/person.js';

describe('Person', function () {
    let reusablePerson;

    beforeEach(function () {
        reusablePerson = new Person(26, 1991, 8, 21);
    });

    it('should test whether a Person has an age, birth year, birth month, and birth day', function () {
        expect(reusablePerson.ageInYears).toEqual(26);
        expect(reusablePerson.birthYear).toEqual(1991);
        expect(reusablePerson.birthMonth).toEqual(8);
        expect(reusablePerson.birthDay).toEqual(21);
    });

    it('should test whether a the age of a person can be converted to seconds', function () {
        let ageInSeconds = reusablePerson.convertToSeconds();
        let expected = 26 * 31557600;
        expect(ageInSeconds).toEqual(expected);
    });
});