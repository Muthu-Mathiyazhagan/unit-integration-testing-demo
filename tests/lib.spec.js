const lib = require('../lib');

test(`absolute - It should return positive number if input is positive number `, () => {
    expect(lib.absolute(1)).toBe(1);
});

test(`absolute - It should return positive number if input is negative number `, () => {
    expect(lib.absolute(-1)).toBe(1);
});

test(`absolute - It should return zero if input is zero `, () => {
    expect(lib.absolute(0)).toBe(0);
});