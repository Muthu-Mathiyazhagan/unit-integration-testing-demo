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
        const result = lib.greet('Mosh');
        expect(result).toMatch(/Mosh/);
    })
})