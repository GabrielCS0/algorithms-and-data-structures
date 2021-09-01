const LinkedList = require('../linkedLists/linkedList')

module.exports = class HashTable {
  table = []

  /**
   * @param {string} key 
   * @param {*} value 
   */
  put (key, value) {
    const position = this.loseloseHashCode(key)
    
    if (this.table[position] === undefined) this.table[position] = new LinkedList()
    
    this.table[position].append(new ValuePair(key, value)) 
  }

  /**
   * @param {string} key 
   * @returns {boolean}
   */
  remove (key) {
    const position = this.loseloseHashCode(key)

    if (this.table[position] !== undefined) {
      let current = this.table[position].getHead()

      while (current.next) {
        if (current.element.key === key) {
          this.table[position].removeByEl(current.element)
          if (this.table[position].isEmpty()) this.table[position] = undefined
          return true
        }

        current = current.next
      }

      if (current.element.key === key) {
        this.table[position].removeByEl(current.element)
        if (this.table[position].isEmpty()) this.table[position] = undefined
        return true
      }
    }

    return false
  }

  /** 
   * @param {string} key 
   * @returns {*}
   */
  get (key) {
    const position = this.loseloseHashCode(key)

    if (this.table[position] !== undefined) {
      let current = this.table[position].getHead()

      while (current.next) {
        if (current.element.key === key) return current.element.value
        current = current.next
      }

      if (current.element.key === key) return current.element.value
    }

    return undefined
  }

  /**
   * @param {string} key 
   * @returns {number}
   */
  loseloseHashCode (key) {
    let hash = 0

    for (var i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i)
    }

    return hash % 37
  }

  /**
   * @returns {string}
   */
  string () {
    let string = ''

    for (var i = 0; i < this.table.length; i++) {
      if (this.table[i] !== undefined) string += i + ' - ' + this.table[i] + '\n'
    }

    return string
  }
}

class ValuePair {
  /**
   * @param {string} key 
   * @param {*} value 
   */
  constructor (key, value) {
    this.key = key
    this.value = value
    this.toString = () => {
      return `[${this.key}: ${this.value}]`
    }
  }
}
