const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats( matrix ) {
  let sum1 = 0;
  let sum2 = 0;
  for (let i = 0; i < matrix.length; i++) {
    let x = matrix[i].includes('^^')
      if (x === true) {
        sum1++
      } else {
        sum2 = 0;
      }
  } return sum1 + sum2;
}

module.exports = {
  countCats
};

