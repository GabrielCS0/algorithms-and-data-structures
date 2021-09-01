const Dictionary = require('../dictionary')

const dic = new Dictionary()
describe('Dictionary', () => {
  it('Should add to the dictionary', () => {
    dic.set('Gabriel', 'gabriel@email.com')
    dic.set('Linus', 'linus@email.com')
    dic.set('Julia', 'julia@email.com')

    expect(dic.getItems()).toStrictEqual({
      'Gabriel': 'gabriel@email.com',
      'Linus': 'linus@email.com',
      'Julia': 'julia@email.com'
    })
  })

  it('Should delete items', () => {
    dic.delete('Julia')
    expect(dic.getItems()).toStrictEqual({
      'Gabriel': 'gabriel@email.com',
      'Linus': 'linus@email.com'
    })
  })

  it('Should check for an item', () => {
    expect(dic.has('Gabriel')).toBe(true)
    expect(dic.has('Julia')).toBe(false)
  })

  it('Should return an item', () => {
    expect(dic.get('Linus')).toBe('linus@email.com')
  })

  it('Should return the dictionary size', () => {
    expect(dic.size()).toBe(2)
  })

  it('Should return the keys', () => {
    expect(dic.keys()).toStrictEqual([
      'Gabriel',
      'Linus'
    ])
  })

  it('Should return the values', () => {
    expect(dic.values()).toStrictEqual([
      'gabriel@email.com',
      'linus@email.com'
    ])
  })

  it('Should clear the dictionary', () => {
    dic.clear()
    expect(dic.size()).toBe(0)
  })
})
