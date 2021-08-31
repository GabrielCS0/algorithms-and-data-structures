const LinkedList = require('../linkedList')

const linkedList = new LinkedList()
describe('Linked List', () => {
  it('Should append to the linked list', () => {
    linkedList.append('Bruce')
    linkedList.append('Julia')
    linkedList.append('Josh')
    const string = linkedList.toString()

    expect(string).toBe('Bruce Julia Josh')
  })

  it('Should insert elements', () => {
    linkedList.insert(0, 'Gabriel')
    linkedList.insert(3, 'Linus')
    linkedList.insert(5, 'Clark')
    const string = linkedList.toString()

    expect(string).toBe('Gabriel Bruce Julia Linus Josh Clark')
  })

  it('Should remove elements by position', () => {
    linkedList.removeByPos(2)
    linkedList.removeByPos(3)
    const string = linkedList.toString()

    expect(string).toBe('Gabriel Bruce Linus Clark')
  })

  it('Should return element index', () => {
    const gabrielPos = linkedList.indexOf('Gabriel')
    const linusPos = linkedList.indexOf('Linus')

    expect(gabrielPos).toBe(0)
    expect(linusPos).toBe(2)
  })

  it('Should remove elements by element name', () => {
    linkedList.removeByEl('Clark')
    linkedList.removeByEl('Bruce')
    const string = linkedList.toString()

    expect(string).toBe('Gabriel Linus')
  })

  it('Should return if list is empty', () => {
    expect(linkedList.isEmpty()).toBe(false)
  })

  it('Should return the list size', () => {
    expect(linkedList.size()).toBe(2)
  })

  it('Should return the head', () => {
    expect(linkedList.getHead().element).toBe('Gabriel')
  })
})
