const Dictionary = require('../dictionary/dictionary')
const Queue = require('../queue/queue')

module.exports = class Graph {
  vertices = []
  adjList = new Dictionary()

  /**
   * @param {*} v 
   */
  addVertex (v) {
    this.vertices.push(v)
    this.adjList.set(v, [])
  }

  /**
   * @param {*} v 
   * @param {*} w 
   */
  addEdge (v, w) {
    this.adjList.get(v).push(w)
    this.adjList.get(w).push(v)
  }

  /**
   * @returns {string}
   */
  toString () {
    let string = ''

    for (var i = 0; i < this.vertices.length; i++) {
      string += `${this.vertices[i]} -> `
      const neighbors = this.adjList.get(this.vertices[i])

      for (var e = 0; e < neighbors.length; e++) {
        string += `${neighbors[e]} `
      }

      string += '\n'
    }

    return string
  }

  #initializeColor () {
    let color = []

    for (var i = 0; i < this.vertices.length; i++) {
      color[this.vertices[i]] = 'white'
    }

    return color
  }

  /**
   * @param {*} v 
   * @param {Function} callback 
   */
  bfs (v, callback) {
    let color = this.#initializeColor(),
    queue = new Queue

    queue.enqueue(v)

    while(!queue.isEmpty()) {
      const u = queue.dequeue(),
      neighbors = this.adjList.get(u)
      color[u] = 'grey'

      for (var i = 0; i < neighbors.length; i++) {
        const w = neighbors[i]

        if (color[w] === 'white') {
          color[w] = 'grey'
          queue.enqueue(w)
        }
      }

      color[u] = 'black'
      callback(u)
    }
  }

  /**
   * @param {Function} callback 
   */
  dfs (callback) {
    let color = this.#initializeColor()
    for (var i = 0; i < this.vertices.length; i++) {
      if (color[this.vertices[i]] === 'white')
        this.#dfsVisit(this.vertices[i], color, callback)
    }
  }

  #dfsVisit (u, color, callback) {
    color[u] = 'grey'
    callback(u)

    const neighbors = this.adjList.get(u)
    for (var i = 0; i < neighbors.length; i++) {
      const w = neighbors[i]
      if (color[w] === 'white')
        this.#dfsVisit(w, color, callback)
    }

    color[u] = 'black'
  }
}
