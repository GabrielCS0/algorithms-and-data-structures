const DoublyLinkedList = require('../doublyLinkedList')

const doublyLinkedList = new DoublyLinkedList()
describe('Doubly Linked List', () => {
  it('Should append & insert to the Doubly Linked List', () => {
    doublyLinkedList.append('Josh')
    doublyLinkedList.append('Gabriel')
    doublyLinkedList.append('Linus')

    doublyLinkedList.insert(0, 'Clark')
    doublyLinkedList.insert(4, 'Bruce')
    doublyLinkedList.insert(2, 'Julia')

    const string = doublyLinkedList.toString()
    expect(string).toBe('Clark Josh Julia Gabriel Linus Bruce')
  })

  it('Should remove by positon', () => {
    doublyLinkedList.removeByPos(0)
    doublyLinkedList.removeByPos(4)
    doublyLinkedList.removeByPos(2)
    const string = doublyLinkedList.toString()

    expect(string).toBe('Josh Julia Linus')
  })
})
