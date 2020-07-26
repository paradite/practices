/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function (n, start) {
  let ans = start;
  for (let i = 1; i < n; i++) {
    const element = start + 2 * i;
    ans = ans ^ element;
  }
  return ans;
};
