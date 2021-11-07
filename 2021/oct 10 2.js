// prettier-ignore
if (typeof _ === 'undefined') {
  _ = require('lodash');
}
/**
 * @param {number[][]} grid
 * @param {number} x
 * @return {number}
 */
var minOperations = function (grid, x) {
  let best = Infinity;
  const search = (lo, hi) => {
    if (lo > hi) {
      return best;
    }

    const mid = lo + Math.floor((hi - lo) / 2);
    const midValue = getValue(mid, factors);
    const midpValue = getValue(mid - 1, factors);
    const midnValue = getValue(mid + 1, factors);
    if (midValue < best) best = midValue;
    if (midpValue > midValue && midValue < midnValue) {
      return midValue;
    }

    if (midValue >= midnValue) {
      return search(mid + 1, hi);
    }
    return search(lo, mid - 1);
  };

  const getValue = (factor, factors) => {
    let diff = 0;
    for (let i = 0; i < factors.length; i++) {
      const element = factors[i];
      diff = diff + Math.abs(factor - element);
    }
    return diff;
  };

  let arr = [];
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      const element = grid[i][j];
      arr.push(element);
    }
  }
  const remainder = arr[0] % x;
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element % x !== remainder) return -1;
  }

  const factors = arr.map((n) => {
    return (n - remainder) / x;
  });
  let min = Infinity;
  let max = -Infinity;
  for (let i = 0; i < factors.length; i++) {
    const element = factors[i];
    if (element < min) min = element;
    if (element > max) max = element;
  }
  const ans = search(min, max);
  return ans;
};

// Input:
// [[529,529,989],[989,529,345],[989,805,69]]
// 92
// Output:
// 26
// Expected:
// 25
