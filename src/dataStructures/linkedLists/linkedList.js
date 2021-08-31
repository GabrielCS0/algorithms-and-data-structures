module.exports = class LinkedList {
  length = 0
  head = null

  /**
   * @param {*} element 
  */
  append (element) {
    const node = new Node(element)
    let current

    if (this.head === null) {
      this.head = node
    } else {
      current = this.head

      while (current.next) {
        current = current.next
      }

      current.next = node
    }

    this.length++
  }

  /**
   * @param {number} position 
   * @param {*} element 
   * @returns {boolean}
  */
  insert (position, element) {
    if (position >= 0 && position <= this.length) {
      let node = new Node(element),
      current = this.head,
      previous,
      index = 0

      if (position === 0) {
        node.next = current
        this.head = node
      } else {
        while (index++ < position) {
          previous = current
          current = current.next
        }

        node.next = current
        previous.next = node
      }

      this.length++
      return true
    } else {
      return false
    }
  }

  /**
   * @param {number} position 
   * @returns {*}
  */
  removeByPos (position) {
    if (position > -1 && position < this.length) {
      let current = this.head,
      previous,
      index = 0

      if (position === 0) {
        this.head = current.next
      } else {
        while (index++ < position) {
          previous = current
          current = current.next
        }

        previous.next = current.next
      }

      this.length--
      return current.element
    } else {
      return null
    }
  }

  /**
   * @param {*} element 
   * @returns {*}
   */
  removeByEl (element) {
    const index = this.indexOf(element)
    return this.removeByPos(index)
  }

  /**
   * @param {*} element 
   * @returns {number} 
  */
  indexOf (element) {
    let current = this.head,
    index = 0

    while (current) {
      if (current.element === element) return index

      index++
      current = current.next
    }

    return -1
  }

  /**
   * @returns {boolean}
  */
  isEmpty () {
    return this.length === 0
  }

  /**
   * @returns {number}
  */
  size () {
    return this.length
  }

  /**
   * @returns {Node}
  */
  getHead () {
    return this.head
  }

  /**
   * @returns {string} 
  */
  toString () {
    let current = this.head,
    string = ''

    while (current) {
      string += current.element + ' '
      current = current.next
    }

    return string.substring(0, string.length - 1)
  }
}

class Node {
  /**
   * @param {*} element 
  */
  constructor (element) {
    this.element = element
    this.next = null
  }
}
