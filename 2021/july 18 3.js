/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function (points) {
  const rows = points.length;
  const cols = points[0].length;
  let dp = [];
  for (let j = 0; j < cols; j++) {
    dp[j] = points[0][j];
  }
  // console.log('TCL ~ dp', dp);
  for (let i = 1; i < rows; i++) {
    // console.log('TCL ~ dp1', dp);
    for (let j = 0; j < cols; j++) {
      if (j !== 0) {
        dp[j] = Math.max(dp[j], dp[j - 1] - 1);
      }
    }
    for (let j = cols - 1; j >= 0; j--) {
      if (j !== cols - 1) {
        dp[j] = Math.max(dp[j], dp[j + 1] - 1);
      }
    }
    for (let j = 0; j < cols; j++) {
      dp[j] = dp[j] + points[i][j];
    }
    // console.log('TCL ~ dp2', dp);
  }
  // console.log(dp);
  return Math.max(...dp);
};

console.log(
  maxPoints([
    [1, 2, 3],
    [1, 5, 1],
    [3, 1, 1],
  ])
);

console.log(
  maxPoints([
    [1, 5],
    [2, 3],
    [4, 2],
  ])
);

console.log(
  maxPoints([
    [1, 5],
    [3, 2],
    [4, 2],
  ])
);
