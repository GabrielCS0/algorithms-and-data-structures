/**
  * @param n
  * @return {number[]}
*/

module.exports = function fibonacci (untilSequence) {
  const fibSequence = [1]

  let currentValue = 1
  let previousValue = 0

  if (untilSequence === 1) return fibSequence

  untilSequence -= 1

  while (untilSequence) {
    currentValue += previousValue
    previousValue = currentValue - previousValue

    fibSequence.push(currentValue)

    untilSequence -= 1
  }

  return fibSequence
}
