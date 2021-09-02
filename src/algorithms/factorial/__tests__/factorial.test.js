const factorial = require('../factorial')

describe('Factorial', () => {
  it('Should calculate the factorial correctly', () => {
    expect(factorial(1)).toBe(1)
    expect(factorial(2)).toBe(2)
    expect(factorial(3)).toBe(6)
    expect(factorial(4)).toBe(24)
    expect(factorial(5)).toBe(120)
  })
})
