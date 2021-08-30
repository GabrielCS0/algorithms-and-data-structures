const dec2Bin = require('../dec2Bin')

describe('Decimal to Binary', () => {
  it('Should transform a decimal number to binary', () => {
    expect(dec2Bin(1)).toBe('1')
    expect(dec2Bin(2)).toBe('10')
    expect(dec2Bin(3)).toBe('11')
    expect(dec2Bin(4)).toBe('100')
    expect(dec2Bin(5)).toBe('101')
    expect(dec2Bin(10)).toBe('1010')
    expect(dec2Bin(100)).toBe('1100100')
    expect(dec2Bin(1000)).toBe('1111101000')
  })
})
