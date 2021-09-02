const BinarySearchTree = require('../binarySearchTree')

const tree = new BinarySearchTree()
describe('Binary Search Tree', () => {
  it('Should insert values', () => {
    tree.insert(11)
    tree.insert(7)
    tree.insert(15)
    tree.insert(5)
    tree.insert(3)
    tree.insert(9)
    tree.insert(8)
    tree.insert(10)
    tree.insert(13)
    tree.insert(12)
    tree.insert(14)
    tree.insert(20)
    tree.insert(18)
    tree.insert(25)
    tree.insert(6)

    expect(tree.root.key).toBe(11)
    expect(tree.root.left.key).toBe(7)
    expect(tree.root.left.right.key).toBe(9)
    expect(tree.root.right.key).toBe(15)
    expect(tree.root.right.left.key).toBe(13)
  })

  it('Should search for a value', () => {
    expect(tree.search(11)).toBe(true)
    expect(tree.search(15)).toBe(true)
    expect(tree.search(3)).toBe(true)
    expect(tree.search(99)).toBe(false)
  })

  it('Should remove a value', () => {
    tree.remove(12)
    tree.remove(3)
    tree.remove(20)

    expect(tree.search(12)).toBe(false)
    expect(tree.search(3)).toBe(false)
    expect(tree.search(20)).toBe(false)
  })

  it('Should return the min value', () => {
    expect(tree.min()).toBe(5)
  })

  it('Should return the max value', () => {
    expect(tree.max()).toBe(25)
  })
})
