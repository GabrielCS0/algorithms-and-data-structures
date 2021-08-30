const Stack = require('../stack')

const stack = new Stack()
describe('Stack', () => {
  it('Should stack data', () => {
    stack.push(1)
    stack.push(2)
    stack.push(3)
    expect(stack.items.toString()).toBe('1,2,3')
  })

  it('Should remove the last element', () => {
    stack.pop()
    expect(stack.items.toString()).toBe('1,2')
  })

  it('Should return the last element', () => {
    const lastElement = stack.peek()
    expect(lastElement).toBe(2)
  })

  it('Should verify if the stack is empty', () => {
    const isEmpty = stack.isEmpty() 
    expect(isEmpty).toBe(false)
  })

  it('Should clear the stack', () => {
    stack.clear()
    expect(stack.items.toString()).toBe('')
  })

  it('Should return the stack size', () => {
    const stackSize = stack.size()
    expect(stackSize).toBe(0)
  })
})
