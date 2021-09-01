module.exports = class Dictionary {
  items = {}

  /**
   * @param {string} key 
   * @param {*} value 
   */
  set (key, value) {
    this.items[key] = value
  }

  /**
   * @param {string} key 
   * @returns {boolean}
   */
  delete (key) {
    if (this.has(key)) {
      delete this.items[key]
      return true
    }

    return false
  }

  /**
   * @param {string} key 
   * @returns {boolean}
   */
  has (key) {
    return this.items.hasOwnProperty(key)
  }

  /**
   * @param {string} key 
   * @returns {*}
   */
  get (key) {
    return this.has(key) ? this.items[key] : undefined
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
   * @returns {string[]}
   */
  keys () {
    return Object.keys(this.items)
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
   * @returns {object} 
   */
  getItems () {
    return this.items
  }
}
