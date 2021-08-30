/**
  * @param {number} decNumber
  * @return {string}
*/

module.exports = function dec2Bin (decNumber) {
  let restStack = [],
  rest,
  binaryString = ''

  while (decNumber) {
    rest = Math.floor(decNumber % 2)
    restStack.push(rest)
    decNumber = Math.floor(decNumber / 2)
  }

  while (restStack.length) {
    binaryString += restStack.pop().toString()
  }

  return binaryString
}
