// prettier-ignore
if (typeof _ === 'undefined') {
  _ = require('lodash');
}

/**
 * @param {number[]} rolls
 * @param {number} mean
 * @param {number} n
 * @return {number[]}
 */
var missingRolls = function (rolls, mean, n) {
  const total = mean * (n + rolls.length) - _.sum(rolls);
  const extra = total % n;
  const ave = (total - extra) / n;
  if (ave > 6 || (ave === 6 && extra > 0) || ave < 1) return [];
  const ans = Array(n).fill(ave);
  for (let i = 0; i < extra; i++) {
    ans[i] = ans[i] + 1;
  }
  return ans;
};
