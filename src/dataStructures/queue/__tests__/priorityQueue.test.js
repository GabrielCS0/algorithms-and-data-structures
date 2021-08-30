const PriorityQueue = require('../priorityQueue')

const priorityQueue = new PriorityQueue()
describe('Priority Queue', () => {
  it('Should add to queue correctly', () => {
    priorityQueue.enqueue('Josh', 2)
    priorityQueue.enqueue('Julia', 1)
    priorityQueue.enqueue('Bruce', 3)

    expect(priorityQueue.items[0].element).toBe('Julia')
    expect(priorityQueue.items[1].element).toBe('Josh')
    expect(priorityQueue.items[2].element).toBe('Bruce')
  })

  it('Should remove the last element', () => {
    priorityQueue.dequeue()
    expect(priorityQueue.items.length).toBe(2)
  })
})
