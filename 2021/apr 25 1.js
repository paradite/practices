/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var sumBase = function (n, k) {
  return n
    .toString(k)
    .split('')
    .reduce((a, c) => {
      return (a += Number(c));
    }, 0);
};
