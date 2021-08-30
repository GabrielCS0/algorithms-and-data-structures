module.exports = class PriorityQueue {
  items = []

  /**
   * @param {*} element 
   * @param {number} priority 
   */
  enqueue (element, priority) {
    const queueElement = {element, priority}
    let added = false
    
    for (var i = 0; i < this.items.length; i++) {
      if (queueElement.priority < this.items[i].priority) {
        this.items.splice(i, 0, queueElement)
        added = true
        break
      }
    }

    if (!added) this.items.push(queueElement)
  }

  dequeue () {
    this.items.shift()
  }
}
