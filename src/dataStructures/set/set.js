module.exports = class Set {
  items = {}

  /**
   * @param {*} value 
   * @returns {boolean} 
   */
  add (value) {
    if (!this.has(value)) {
      this.items[value] = value
      return true
    }

    return false
  }

  /**
   * @param {*} value 
   * @returns {boolean} 
   */
  delete (value) {
    if (this.has(value)) {
      delete this.items[value]
      return true
    }

    return false
  }

  /**
   * @param {*} value 
   * @returns {boolean} 
   */
  has (value) {
    return this.items.hasOwnProperty(value)
  }

  clear () {
    this.items = {}
  }

  /**
   * @returns {number} 
   */ 
  size () {
    return Object.keys(this.items).length
  }

  /**
   * @returns {Array} 
   */
  values () {
    let values = []
    const keys = Object.keys(this.items)

    for (var i = 0; i < keys.length; i++) {
      values.push(this.items[keys[i]])
    }

    return values
  }

  /**
   * @param {Set} otherSet 
   * @returns {Set}
   */
  union (otherSet) {
    let unionSet = new Set(),
    values = this.values()

    for (var i = 0; i < values.length; i++) {
      unionSet.add(values[i])
    }

    values = otherSet.values()

    for (var i = 0; i < values.length; i++) {
      unionSet.add(values[i])
    }

    return unionSet
  }

  /**
   * @param {Set} otherSet 
   * @returns {Set} 
   */
  intersection (otherSet) {
    let intersectionSet = new Set()
    const values = this.values()

    for (var i = 0; i < values.length; i++) {
      if (otherSet.has(values[i])) {
        intersectionSet.add(values[i])
      }
    }

    return intersectionSet
  }

  /**
   * @param {Set} otherSet 
   * @returns {Set}
   */
  difference (otherSet) {
    let differenceSet = new Set()
    const values = this.values()

    for (var i = 0; i < values.length; i++) {
      if (!otherSet.has(values[i])) {
        differenceSet.add(values[i])
      }
    }

    return differenceSet
  }

  /**
   * @param {Set} otherSet 
   * @returns {boolean}
   */
  subset (otherSet) {
    if (this.size() > otherSet.size()) {
      return false
    } else {
      const values = this.values()

      for (var i = 0; i < values.length; i++) {
        if (!otherSet.has(values[i])) {
          return false
        }
      }

      return true
    }
  }
}
