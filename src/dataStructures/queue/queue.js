module.exports = class Queue {
  items = []

  /**
    * @param element
  */
  enqueue (element) {
    this.items.push(element)
  }

  dequeue () {
    this.items.shift()
  }

  /**
    * @return {*}
  */
  front () {
    return this.items[0]
  }

  /**
    * @return {boolean}
  */
  isEmpty () {
    return this.items.length === 0
  }

  /**
    * @return {number}
  */
  size () {
    return this.items.length
  }
}
