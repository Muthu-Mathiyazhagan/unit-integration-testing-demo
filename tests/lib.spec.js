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

describe.only('remove meriiem', () => {
    let input = '8.00am';
    let output = '8.00';
    it(`Should remove lower case 'am' from given time string`, () => {
        expect(lib.removeMeridiem(input)).toBe(output)
    });
    input = '8.00pm';

    it(`Should remove lower case 'pm' from given time string`, () => {
        expect(lib.removeMeridiem(input)).toBe(output)
    });
    input = '8.00AM'
    it(`Should remove Upper case 'AM' from given time string`, () => {
        expect(lib.removeMeridiem(input)).toBe(output)
    });
    input = '8.00PM'
    it(`Should remove Upper case 'PM' from given time string`, () => {
        expect(lib.removeMeridiem(input)).toBe(output)
    });
})