module.exports = class Queue {
  items = []

  /**
    * @param {*} element
    * @returns {Array}
  */
  enqueue (element) {
    return this.items.push(element)
  }

  dequeue () {
    return this.items.shift()
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
