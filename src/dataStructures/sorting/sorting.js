module.exports = class Sorting {
  array = []

  /**
   * @param {number} item 
   */
  insert (item) {
    this.array.push(item)
  }

  /**
   * @returns {string}
   */
  toString () {
    return this.array.join()
  }

  bubbleSort () {
    for (var i = 0; i < this.array.length - 1; i++) {
      for (var j = 0; j < this.array.length - 1; j++) {
        if (this.array[j] > this.array[j + 1])
          this.#swap(this.array, j, j + 1)
      }
    }
  }

  selectionSort () {
    let indexMin

    for (var i = 0; i < this.array.length - 1; i++) {
      indexMin = i

      for (var j = i; j < this.array.length; j++) {
        if (this.array[indexMin] > this.array[j]) indexMin = j
      }

      if (i !== indexMin) this.#swap(this.array, i, indexMin)
    }
  }

  insertionSort () {
    let j, temp

    for (var i = 1; i < this.array.length; i++) {
      j = i
      temp = this.array[i]

      while (j > 0 && this.array[j - 1] > temp) {
        this.array[j] = this.array[j - 1]
        j--
      }

      this.array[j] = temp
    }
  }

  mergeSort () {
    this.array = this.#mergeSortRec(this.array)
  }

  /**
   * @param {Array} array 
   */
  #mergeSortRec (array) {
    const length = array.length

    if (length === 1) return array

    const mid = Math.floor(length / 2),
    left = array.slice(0, mid),
    right = array.slice(mid, length)

    return this.#merge(this.#mergeSortRec(left), this.#mergeSortRec(right))
  }

  /**
   * @param {Array} left 
   * @param {Array} right 
   * @returns {Array}
   */
  #merge (left, right) {
    let result = [],
    il = 0,
    ir = 0

    while (il < left.length && ir < right.length) {
      if (left[il] < right[ir]) 
        result.push(left[il++])
      else
        result.push(right[ir++])
    }

    while (il < left.length) {
      result.push(left[il++])
    }

    while (ir < right.length) {
      result.push(right[ir++])
    }

    return result
  }

  quickSort () {
    this.#quick(this.array, 0, this.array.length - 1)
  }

  /**
   * @param {Array} array 
   * @param {number} left 
   * @param {number} right 
   */
  #quick (array, left, right) {
    let index

    if (array.length > 1) {
      index = this.#partition(array, left, right)

      if (left < index - 1) this.#quick(array, left, index - 1)
      if (index < right) this.#quick(array, index, right)
    }
  }

  /**
   * @param {Array} array 
   * @param {number} left 
   * @param {number} right 
   * @returns {number}
   */
  #partition (array, left, right) {
    const pivot = array[Math.floor((right + left) / 2)]
    let i = left,
    j = right

    while (i <= j) {
      while (array[i] < pivot) { i++ }
      while (array[j] > pivot) { j-- }

      if (i <= j) {
        this.#swap(array, i, j)
        i++
        j--
      } 
    }

    return i
  }

  /**
   * @param {Array} array 
   * @param {number} index1 
   * @param {number} index2 
   */
  #swap (array, index1, index2) {
    const aux = array[index1]
    array[index1] = array[index2]
    array[index2] = aux
  }
} 
