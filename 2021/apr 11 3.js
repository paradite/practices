/**
 * @param {number[]} obstacles
 * @return {number}
 */
var minSideJumps = function (obstacles) {
  let dp = [1000000, 1, 0, 1];
  for (let i = 0; i < obstacles.length; i++) {
    dp[obstacles[i]] = dp[0];
    // console.log('TCL ~ obstacles[i]', obstacles[i]);
    for (let j = 1; j <= 3; j++) {
      if (j !== obstacles[i]) {
        // console.log('TCL ~ dpb', dp);
        dp[j] = Math.min(
          dp[1] + (j !== 1 ? 1 : 0),
          dp[2] + (j !== 2 ? 1 : 0),
          dp[3] + (j !== 3 ? 1 : 0)
        );
      }
    }
    // console.log('TCL ~ dpa', obstacles[i], dp);
  }
  return Math.min(dp[1], dp[2], dp[3]);
};

console.log(minSideJumps([0, 1, 2, 3, 0]));
console.log(minSideJumps([0, 1, 1, 3, 3, 0]));
// prettier-ignore
console.log(minSideJumps([0,2,2,1,0,3,0,3,0,1,3,1,1,0,1,3,1,1,1,0,2,0,0,3,3,0,3,2,2,0,0,3,3,3,0,0,2,0,0,3,3,0,3,3,0,0,3,1,0,1,0,2,3,1,1,0,3,3,0,3,1,3,0,2,2,0,1,3,0,1,0,3,0,1,3,1,2,2,0,0,3,0,1,3,2,3,2,1,0,3,2,2,0,3,3,0,3,0,0,1,0]));
