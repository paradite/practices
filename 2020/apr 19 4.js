/**
 * @param {number} n
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var numOfArrays = function(n, m, k) {
  const mod = Math.pow(10, 9) + 7;
  const dp = new Array(n + 1);
  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(m + 2);
    for (let j = 0; j < dp[i].length; j++) {
      dp[i][j] = new Array(k + 2).fill(0);
    }
  }
  dp[0][0][0] = 1;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= m; j++) {
      for (let l = 0; l <= k; l++) {
        for (let ii = 1; ii <= m; ii++) {
          // console.log('numOfArrays -> dp[i][j][l]', dp[i][j][l]);
          if (ii <= j) {
            dp[i + 1][j][l] = (dp[i + 1][j][l] + dp[i][j][l]) % mod;
          } else {
            dp[i + 1][ii][l + 1] = (dp[i + 1][ii][l + 1] + dp[i][j][l]) % mod;
          }
        }
      }
    }
  }
  let ans = 0;
  // console.log('numOfArrays -> dp', dp);
  for (let i = 0; i <= m; i++) {
    ans = (ans + dp[n][i][k]) % mod;
  }
  return ans;
};

console.log(numOfArrays(2, 3, 1));
console.log(numOfArrays(5, 2, 3));
console.log(numOfArrays(9, 1, 1));
console.log(numOfArrays(50, 100, 25));
console.log(numOfArrays(37, 17, 7));
