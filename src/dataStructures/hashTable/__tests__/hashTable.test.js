const HashTable = require('../hashTable')

const hash = new HashTable()
describe('Hash Table', () => {
  it('Should insert elements', () => {
    hash.put('Jonathan', 'jonathan@email.com')
    hash.put('Sue', 'sue@email.com')
    hash.put('John', 'john@email.com')
    hash.put('Tyrion', 'tyrion@email.com')
    hash.put('Aaron', 'aaron@email.com')
    hash.put('Nathan', 'nathan@email.com')

    const jonathanPos = hash.loseloseHashCode('Jonathan')

    expect(hash.table[jonathanPos].head.element.value).toBe('jonathan@email.com')
    expect(hash.table[jonathanPos].head.next.element.value).toBe('sue@email.com')
    expect(hash.table.length).toBe(30)
  })

  it('Should remove elements', () => {
    hash.remove('Sue')
    hash.remove('Tyrion')

    const suePos = hash.loseloseHashCode('Sue')
    const tyrionPos = hash.loseloseHashCode('Tyrion')

    expect(hash.table[suePos].head.next).toBe(null)
    expect(hash.table[suePos].head.element.key).toBe('Jonathan')
    expect(hash.table[tyrionPos].head.next).toBe(null)
    expect(hash.table[tyrionPos].head.element.key).toBe('Aaron')
  })

  it('Should get by element key', () => {
    hash.put('Tyrion', 'tyrion@email.com')

    expect(hash.get('Tyrion')).toBe('tyrion@email.com')
    expect(hash.get('Aaron')).toBe('aaron@email.com')
    expect(hash.get('Nathan')).toBe('nathan@email.com')
  })
})
