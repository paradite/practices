/**
 * @param {number[]} jobDifficulty
 * @param {number} d
 * @return {number}
 */
var minDifficulty = function (jobDifficulty, d) {
  const dp = [];
  // dp[i][j] min total difficulty on ith day with jth jobs completed
  for (let i = 0; i < d; i++) {
    dp[i] = [];
  }
  // dp[0][-1] = 0;
  let currDiff = 0;
  for (let i = 0; i < jobDifficulty.length; i++) {
    currDiff = Math.max(jobDifficulty[i], currDiff);
    dp[0][i] = currDiff;
  }
  for (let i = 1; i < d; i++) {
    const prevD = dp[i - 1];
    for (let j = 0; j < prevD.length; j++) {
      if (prevD[j] >= 0) {
        const prevTotalDifficulty = prevD[j];
        // don't take job
        // if (dp[i][j]) {
        //   if (dp[i - 1][j] < dp[i][j]) {
        //     dp[i][j] = dp[i - 1][j];
        //   }
        // } else {
        //   dp[i][j] = dp[i - 1][j];
        // }
        // take job
        let nextJob = j + 1;
        let currDifficulty = jobDifficulty[nextJob];
        while (jobDifficulty[nextJob] !== undefined) {
          currDifficulty = Math.max(currDifficulty, jobDifficulty[nextJob]);
          const newTotalDifficulty = currDifficulty + prevTotalDifficulty;
          if (dp[i][nextJob] >= 0) {
            // already exist
            if (newTotalDifficulty < dp[i][nextJob]) {
              dp[i][nextJob] = newTotalDifficulty;
            }
          } else {
            dp[i][nextJob] = newTotalDifficulty;
          }
          nextJob++;
        }
      }
    }
  }
  // console.log('TCL ~ dp', dp);
  if (dp[d - 1][jobDifficulty.length - 1] >= 0) {
    return dp[d - 1][jobDifficulty.length - 1];
  }
  return -1;
};

console.log(minDifficulty([6, 5, 4, 3, 2, 1], 2)); // 7
console.log(minDifficulty([9, 9, 9], 4)); // -1
console.log(minDifficulty([9, 9, 9], 3)); // 27
console.log(minDifficulty([9, 8, 9, 9], 3)); // 26
console.log(minDifficulty([1, 1, 1], 3)); // 3
console.log(minDifficulty([1], 1)); // 1
console.log(minDifficulty([0], 1)); // 0
// prettier-ignore
console.log(minDifficulty([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 10)); // 0
