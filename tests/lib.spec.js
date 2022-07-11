const lib = require('../lib');

describe(`absolute`, () => {

    it(`absolute - It should return positive number if input is positive number `, () => {
        expect(lib.absolute(1)).toBe(1);
    });

    it(`absolute - It should return positive number if input is negative number `, () => {
        expect(lib.absolute(-1)).toBe(1);
    });

    it(`absolute - It should return zero if input is zero `, () => {
        expect(lib.absolute(0)).toBe(0);
    });

});

describe('greet', () => {
    it('should return the greeting message', () => {
        expect(lib.greet('Mosh')).toMatch(/Mosh/);
    })
});

describe('get currencies', () => {
    it('Should return array of currencies', () => {
        const res = lib.getCurrencies();
        expect(res).toEqual(expect.arrayContaining(['AUD', 'USD', 'EUR']))
    })
});

describe.only('remove Meridiem', () => {
    let output = '8.00';
    it(`Should remove lower case 'am' from given time string`, () => {
        expect(lib.removeMeridiem('8.00am')).toBe(output)
    });

    it(`Should remove lower case 'pm' from given time string`, () => {
        expect(lib.removeMeridiem('8.00Pm')).toBe(output);
        // console.log("Output : ", lib.removeMeridiem('8.00Pm'));
    });

    it(`Should remove Upper case 'AM' from given time string`, () => {
        expect(lib.removeMeridiem('8.00AM')).toBe(output)
    });

    it(`Should remove Upper case 'PM' from given time string`, () => {
        expect(lib.removeMeridiem('8.00PM')).toBe(output)
    });
})