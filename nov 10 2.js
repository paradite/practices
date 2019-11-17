/**
 * @param {number} upper
 * @param {number} lower
 * @param {number[]} colsum
 * @return {number[][]}
 */
var reconstructMatrix = function(upper, lower, colsum) {
  let um = [];
  let lm = [];
  for (let i = 0; i < colsum.length; i++) {
    const sum = colsum[i];
    if (sum === 2) {
      um.push(1);
      lm.push(1);
      upper--;
      lower--;
      if (upper < 0 || lower < 0) {
        return [];
      }
    } else if (sum === 1) {
      if (upper > lower) {
        um.push(1);
        lm.push(0);
        upper--;
        if (upper < 0) {
          return [];
        }
      } else {
        um.push(0);
        lm.push(1);
        lower--;
        if (lower < 0) {
          return [];
        }
      }
    } else {
      um.push(0);
      lm.push(0);
    }
  }
  if (lower > 0 || upper > 0) {
    // console.log('TCL: upper', upper);
    // console.log('TCL: lower', lower);
    return [];
  }
  return [um, lm];
};

console.log(reconstructMatrix(2, 1, [1, 1, 1]));
console.log(reconstructMatrix(2, 3, [2, 2, 1, 1]));
console.log(reconstructMatrix(5, 5, [2, 1, 2, 0, 1, 0, 1, 2, 0, 1]));
console.log(reconstructMatrix(1, 4, [2, 1, 2, 0, 0, 2]));
