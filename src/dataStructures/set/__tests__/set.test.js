const Set = require('../set')

const set = new Set()
const set2 = new Set()
describe('Set', () => {
  it('Should add elements to the set', () => {
    set.add(1)
    set.add(2)
    set.add(3)
    const array = set.values()

    expect(array).toStrictEqual([1, 2, 3])
    expect(set.size()).toBe(3)
  })

  it('Should not add repeated elements', () => {
    set.add(3)
    set.add(3)
    const array = set.values()

    expect(array).toStrictEqual([1, 2, 3])
    expect(set.size()).toBe(3)
  })

  it('Should delete a element', () => {
    set.delete(3)
    const array = set.values()

    expect(array).toStrictEqual([1, 2])
    expect(set.size()).toBe(2)
  })

  it('Should clear the set', () => {
    set.clear()
    const array = set.values()

    expect(array).toStrictEqual([])
    expect(set.size()).toBe(0)
  })

  it('Should make the union between two sets', () => {
    set.add(1)
    set.add(2)

    set2.add(2)
    set2.add(3)

    const newUnionSet = set.union(set2)
    const array = newUnionSet.values()

    expect(array).toStrictEqual([1, 2, 3])
    expect(newUnionSet.size()).toBe(3)
  })

  it('Should make a new set of intersecting elements', () => {
    set2.add(4)
    const intersectionSet = set.intersection(set2).values()
    expect(intersectionSet).toStrictEqual([2])
  })

  it('Should make a new set of set difference', () => {
    const differenceSet = set.difference(set2).values()
    expect(differenceSet).toStrictEqual([1])
  })

  it('Should return true if the set is a subset', () => {
    const isSubset = set.subset(set2)
    
    set2.clear()
    set2.add(1)
    set2.add(2)
    
    const newIsSubset = set.subset(set2)
    
    expect(isSubset).toBe(false)
    expect(newIsSubset).toBe(true)
  })
})
