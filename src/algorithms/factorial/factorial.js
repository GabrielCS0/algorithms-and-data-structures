/**
 * @param {number} n 
 * @returns {number}
*/

module.exports = function factorial (n) {
  if (n === 1)
    return n
  else
    return n * factorial(n - 1)
}
