/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  const map = {};
  while (!map[n]) {
    map[n] = true;
    const sum = (n + '').split('').reduce((pre, cur) => pre + Number(cur) * Number(cur), 0);
    if (sum == 1) return true;
    n = sum;
  }
  return false;
};
console.log(isHappy(17));
console.log(isHappy(18));
console.log(isHappy(19));
