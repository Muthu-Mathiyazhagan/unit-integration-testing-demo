const lib = require('../lib')
const fizzBuzz = require('../exercise1').fizzBuzz


// We can group the similar test cases 
describe(`absolute`, () => {
  it(`absolute - It should return positive number if input is positive number `, () => {
    expect(lib.absolute(1)).toBe(1)
  })

  it(`absolute - It should return positive number if input is negative number `, () => {
    expect(lib.absolute(-1)).toBe(1)
  })

  it(`absolute - It should return zero if input is zero `, () => {
    expect(lib.absolute(0)).toBe(0)
  })
})

describe('greet', () => {
  it('should return the greeting message', () => {
    expect(lib.greet('Yaadhum Aanavan')).toMatch(/Yaadhum Aanavan/)
  })
})

describe('get currencies', () => {
  it('Should return array of currencies', () => {
    const res = lib.getCurrencies()
    expect(res).toEqual(expect.arrayContaining(['AUD', 'USD', 'EUR']))
  })
})

describe('remove meriiem', () => {
  let output = '8.00'
  it(`Should remove lower case 'am' from given time string`, () => {
    expect(lib.removeMeridiem('8.00am')).toBe(output)
  })

  it(`Should remove lower case 'pm' from given time string`, () => {
    expect(lib.removeMeridiem('8.00pm')).toBe(output)
  })

  it(`Should remove Upper case 'AM' from given time string`, () => {
    expect(lib.removeMeridiem('8.00AM')).toBe(output)
  })

  it(`Should remove Upper case 'PM' from given time string`, () => {
    expect(lib.removeMeridiem('8.00PM')).toBe(output)
  })
})

// descripe.only : 'jest' will run "only" this group of test cases
describe.only('fizzBuzz', () => {
  it('should return "FizzBuzz" if input can be divide by 5 and 3', () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz')
  })

  it('should return "Fizz" if input can be divide by 3', () => {
    expect(fizzBuzz(3)).toBe('Fizz')
  })

  it('should return "Buzz" if input can be divide by 5', () => {
    expect(fizzBuzz(5)).toBe('Buzz')
  })

  it('should throw "new Error" if input not a number', () => {
    expect(() => {
      fizzBuzz('15')
    }).toThrow('Input should be a number.')


    // Below code wont work : See the Details from JEST official Documents
    // You must wrap the code in a function, otherwise the error will not be caught and the assertion will fail.
    // https://jestjs.io/docs/expect#tothrowerror
    // expect(fizzBuzz('15')).toBe('Input should be a number.')
  })
})
