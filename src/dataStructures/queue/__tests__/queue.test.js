const Queue = require('../queue')

const queue = new Queue()
describe('Queue', () => {
  it('Should add elements to the queue', () => {
    queue.enqueue('Ryan')
    queue.enqueue('Julia')
    queue.enqueue('Bruce')
    expect(queue.items.toString()).toBe('Ryan,Julia,Bruce')
  })

  it('Should remove the first element', () => {
    queue.dequeue()
    expect(queue.items.toString()).toBe('Julia,Bruce')
  })

  it('Should return the first element', () => {
    const firstElement = queue.front()
    expect(firstElement).toBe('Julia')
  })

  it('Should verify if the queue is empty', () => {
    const isEmpty = queue.isEmpty()
    expect(isEmpty).toBe(false)
  })

  it('Should return the queue size', () => {
    const size = queue.size()
    expect(size).toBe(2)
  })
})
