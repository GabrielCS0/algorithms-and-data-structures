module.exports = class DoublyLinkedList {
  length = 0
  head = null
  tail = null

  /**
   * @param {*} element 
  */
  append (element) {
    const node = new Node(element)
    let current

    if (this.head === null) {
      this.head = node
      this.tail = node
    } else {
      current = this.head

      while (current.next) {
        current = current.next
      }

      current.next = node
      this.tail = node
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
        if (!this.head) {
          this.head = node
          this.tail = node
        } else {
          node.next = current
          current.prev = node
          this.head = node
        }
      } else if (position === this.length) {
        current = this.tail
        current.next = node
        node.prev = current
        this.tail = node
      } else {
        while (index++ < position) {
          previous = current
          current = current.next
        }

        node.next = current
        previous.next = node
        current.prev = node
        node.prev = previous
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

        if (this.length === 1)
          this.tail = null
        else
          this.head.prev = null
      } else if (position === this.length - 1) {
        current = this.tail
        this.tail = current.prev
        this.tail.next = null
      } else {
        while (index++ < position) {
          previous = current
          current = current.next
        }

        previous.next = current.next
        current.next.prev = previous
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
    this.prev = null
  }
}
