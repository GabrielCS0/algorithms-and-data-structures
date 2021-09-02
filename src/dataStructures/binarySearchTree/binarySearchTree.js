module.exports = class BinarySearchTree {
  root = null

  /**
   * @param {number} key 
   */
  insert (key) {
    const newNode = new Node(key)

    if (this.root === null)
      this.root = newNode
    else 
      this.#insertNode(this.root, newNode)
  }

  /**
   * @param {Node} node 
   * @param {Node} newNode 
   */
  #insertNode (node, newNode) {
    if (node.key > newNode.key) {
      if (node.left === null) 
        node.left = newNode
      else 
        this.#insertNode(node.left, newNode)
    } else {
      if (node.right === null)
        node.right = newNode
      else
        this.#insertNode(node.right, newNode)
    }
  }

  /**
   * @param {number} key 
   * @returns {boolean}
   */
  search (key) {
    return this.#searchNode(this.root, key)
  }

  /**
   * @param {Node} node 
   * @param {number} key 
   * @returns {boolean}
   */
  #searchNode (node, key) {
    if (node === null) return false

    if (key < node.key)
      return this.#searchNode(node.left, key)
    else if (key > node.key)
      return this.#searchNode(node.right, key)
    else
      return true
  }

  /**
   * @param {number} key 
   */
  remove (key) {
    this.root = this.#removeNode(this.root, key)
  }

  /**
   * @param {Node} node 
   * @param {number} key 
   * @returns {Node}
   */
  #removeNode (node, key) {
    if (node === null) return null

    if (key < node.key) {
      node.left = this.#removeNode(node.left, key)
      return node
    } else if (key > node.key) {
      node.right = this.#removeNode(node.right, key)
      return node
    } else {
      if (node.left === null && node.right === null) {
        node = null
        return node
      }

      if (node.left === null) {
        node = node.right
        return node
      } else if (node.right === null) {
        node = node.left
        return node
      }

      const aux = this.#findMinNode(node.right)
      node.key = aux.key
      node.right = this.#removeNode(node.right, aux.key)
      return node
    }
  }

  /**
   * @param {Node} node 
   * @returns {Node}
   */
  #findMinNode (node) {
    while (node && node.left !== null) {
      node = node.left
    }

    return node
  }

  /**
   * @returns {number}
   */
  min () {
    return this.#minNode(this.root)
  }

  /**
   * @param {Node} node 
   * @returns {number}
   */
  #minNode (node) {
    if (node) {
      while (node && node.left !== null) {
        node = node.left
      }

      return node.key
    }

    return null
  }

  /**
   * @returns {number}
   */
  max () {
    return this.#maxNode(this.root)
  }

  /**
   * @param {Node} node 
   * @returns {number}
   */
  #maxNode (node) {
    if (node) {
      while (node && node.right !== null) {
        node = node.right
      }

      return node.key
    }

    return null
  }

  /**
   * @param {Function} callback 
   */
  inOrderTraverse (callback) {
    this.#inOrderTraverseNode(this.root, callback)
  }

  /**
   * @param {Node} node 
   * @param {Function} callback 
   */
  #inOrderTraverseNode (node, callback) {
    if (node !== null) {
      this.#inOrderTraverseNode(node.left, callback)
      callback(node.key)
      this.#inOrderTraverseNode(node.right, callback)
    }
  }

  /**
   * @param {Function} callback 
   */
  preOrderTraverse (callback) {
    this.#preOrderTraverseNode(this.root, callback)
  }

  /**
   * @param {Node} node 
   * @param {Function} callback 
   */
  #preOrderTraverseNode (node, callback) {
    if (node !== null) {
      callback(node.key)
      this.#preOrderTraverseNode(node.left, callback)
      this.#preOrderTraverseNode(node.right, callback)
    }
  }

  /**
   * @param {Function} callback 
   */
  postOrderTraverse (callback) {
    this.#postOrderTraverseNode(this.root, callback)
  }

  /**
   * @param {Node} node 
   * @param {Function} callback 
   */
  #postOrderTraverseNode (node, callback) {
    if (node !== null) {
      this.#postOrderTraverseNode(node.left, callback)
      this.#postOrderTraverseNode(node.right, callback)
      callback(node.key)
    }
  }
}

class Node {
  /** 
   * @param {string} key 
   */
  constructor (key) {
    this.key = key
    this.left = null
    this.right = null
  }
}
