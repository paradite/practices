/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
// use combinatorics formula
var uniquePaths = function (m, n) {
  return factorial(m + n - 2) / factorial(m - 1) / factorial(n - 1);
};

function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log(uniquePaths(3, 7));
console.log(uniquePaths(3, 2));
