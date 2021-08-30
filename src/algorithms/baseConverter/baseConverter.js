/**
  * @param decNumber
  * @param base
  * @return {string}
*/

module.exports = function baseConverter (decNumber, base) {
  let restStack = [],
  rest,
  baseString = ''
  const digits = '0123456789ABCDEF'

  while (decNumber) {
    rest = Math.floor(decNumber % base)
    restStack.push(rest)
    decNumber = Math.floor(decNumber / base)
  }

  while (restStack.length) {
    baseString += digits[restStack.pop()]
  }

  return baseString
}
