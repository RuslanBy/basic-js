const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit( n ) {
  let arrayNumbers = []
  let str = String(n)
  for (let i = 0; i < str.length; i++) {
    arrayNumbers = [...arrayNumbers, Number(str.slice(0, i) +str.slice(i + 1))]
  }
  return arrayNumbers.sort((a, b) => b - a)[0]
}

module.exports = {
  deleteDigit
};
