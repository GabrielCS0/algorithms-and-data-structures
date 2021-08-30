const Queue = require('../../dataStructures/queue/queue')

/**
 * @param {string[]} nameList 
 * @param {number} num 
 * @returns {string}
*/

module.exports = function hotPotato (nameList, num) {
  const queue = new Queue()

  for (var i = 0; i < nameList.length; i++) {
    queue.enqueue(nameList[i])
  }

  while (queue.size() > 1) {
    for (var i = 0; i < num; i ++) {
      queue.enqueue(queue.dequeue())
    }

    queue.dequeue()
  }

  return queue.dequeue()
}
