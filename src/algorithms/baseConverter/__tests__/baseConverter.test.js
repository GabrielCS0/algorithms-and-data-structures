const baseConverter = require('../baseConverter')

describe('Base Converter', () => {
  it('Should convert from decimal to binary (base 2)', () => {
    expect(baseConverter(10, 2)).toBe('1010')
    expect(baseConverter(100, 2)).toBe('1100100')
  })

  it('Should convert from decimal to octal (base 8)', () => {
    expect(baseConverter(10, 8)).toBe('12')
    expect(baseConverter(100, 8)).toBe('144')
  })

  it('Should convert from decimal to hex (base 16)', () => {
    expect(baseConverter(100, 16)).toBe('64')
    expect(baseConverter(1000, 16)).toBe('3E8')
  })
})
