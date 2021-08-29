/**
  * @param nth
  * @return {number}
*/

module.exports = function fibonacciNth (nth) {
  let currentValue = 1
  let previousValue = 0

  if (nth === 1) return currentValue

  nth -= 1

  while (nth) {
    currentValue += previousValue
    previousValue = currentValue - previousValue
    nth -= 1
  }

  return currentValue
}
