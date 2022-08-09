// prettier-ignore
if (typeof _ === 'undefined') {
  _ = require('lodash');
}
/**
 * @param {number} n
 * @param {number[]} quantities
 * @return {number}
 */
var minimizedMaximum = function (n, quantities) {
  const max = _.max(quantities);
  if (n === 1) return quantities[0];

  const check = (input) => {
    let used = 0;
    for (let i = 0; i < quantities.length; i++) {
      const q = quantities[i];
      used += Math.ceil(q / input);
    }
    return used <= n;
  };

  let currMax = max;

  const recurse = (start, end) => {
    if (start > end) {
      return currMax ? currMax : -1;
    }
    const mid = Math.ceil((start + end) / 2);
    const midValue = check(mid);
    if (midValue) {
      if (!currMax || mid < currMax) {
        currMax = mid;
      }
      return recurse(start, mid - 1);
    } else {
      return recurse(mid + 1, end);
    }
  };

  return recurse(1, max);
};

console.log(minimizedMaximum(6, [11, 6]));
console.log(minimizedMaximum(7, [15, 10, 10]));
console.log(minimizedMaximum(1, [100000]));
console.log(minimizedMaximum(7, [15, 10, 13]));
