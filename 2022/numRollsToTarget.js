const mod = Math.pow(10, 9) + 7;
/**
 * @param {number} n
 * @param {number} k
 * @param {number} target
 * @return {number}
 */
var numRollsToTarget = function (n, k, target) {
  const dp = [];
  for (let i = 0; i < n; i++) {
    dp[i] = [];
  }
  for (let i = 1; i <= target; i++) {
    if (i <= k) {
      dp[0][i] = 1;
    } else {
      dp[0][i] = 0;
    }
  }
  for (let i = 1; i < n; i++) {
    for (let j = 1; j <= k; j++) {
      for (let l = 1; l <= target; l++) {
        const old = dp[i - 1][l] ? dp[i - 1][l] : 0;
        dp[i][l + j] = dp[i][l + j] ? (dp[i][l + j] + old) % mod : old;
      }
    }
  }
  // console.log('TCL ~ dp', dp);
  return dp[n - 1][target];
};

console.log(numRollsToTarget(1, 6, 3));
console.log(numRollsToTarget(2, 6, 7));
// console.log(numRollsToTarget(3, 6, 7));
console.log(numRollsToTarget(30, 30, 500));
