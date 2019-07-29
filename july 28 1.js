/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
  const memo = {};
  memo[0]= 0;
  memo[1]= 1;
  memo[2]= 1;
  return getN(n);

  function getN(n) {
    if (memo[n] >= 0) {
      return memo[n];
    }
    const nminus1 = memo[n-1] >= 0 ? memo[n-1] : getN(n-1);
    const nminus2 = memo[n-2] >= 0 ? memo[n-2] : getN(n-2);
    const nminus3 = memo[n-3] >= 0 ? memo[n-3] : getN(n-3);
    memo[n] = nminus1 + nminus2 + nminus3;
    return memo[n];
  }
};

console.log(tribonacci(3));
console.log(tribonacci(4));
console.log(tribonacci(25));