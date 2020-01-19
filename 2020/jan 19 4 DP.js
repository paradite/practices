/**
 * @param {number} n
 * @param {number[]} ranges
 * @return {number}
 */
var minTaps = function(n, ranges) {
  // dp[i] means the smallest number of taps required to water under i;
  const dp = Array(n + 1).fill(n + 2);
  dp[0] = 0;
  // iterate all taps
  for (let i = 0; i <= n; i++) {
    const start = i - ranges[i] > 0 ? i - ranges[i] : 0;
    const end = ranges[i] + i > n ? n : ranges[i] + i;
    // for each point j that the range of tap covers, update dp[j]
    for (let j = start; j <= end; j++) {
      // check what's the previous min number of taps required to cover until start of the range or j
      const previousMin = Math.min(...dp.slice(start, j + 1));
      dp[j] = Math.min(dp[j], previousMin + 1);
    }
  }

  return dp[n] === n + 2 ? -1 : dp[n];
};

console.log(minTaps(5, [3, 4, 1, 1, 0, 0]));
console.log(minTaps(3, [0, 0, 0, 0]));
console.log(minTaps(7, [1, 2, 1, 0, 2, 1, 0, 1]));
console.log(minTaps(8, [4, 0, 0, 0, 0, 0, 0, 0, 4]));
console.log(minTaps(8, [4, 0, 0, 0, 4, 0, 0, 0, 4]));
console.log(
  minTaps(35, [
    1,
    0,
    4,
    0,
    4,
    1,
    4,
    3,
    1,
    1,
    1,
    2,
    1,
    4,
    0,
    3,
    0,
    3,
    0,
    3,
    0,
    5,
    3,
    0,
    0,
    1,
    2,
    1,
    2,
    4,
    3,
    0,
    1,
    0,
    5,
    2
  ])
);
