/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} distanceThreshold
 * @return {number}
 */
var findTheCity = function(n, edges, distanceThreshold) {
  const dp = Array(n);
  for (let i = 0; i < n; i++) {
    dp[i] = Array(n).fill(Infinity);
    dp[i][i] = 0;
  }
  for (let i = 0; i < edges.length; i++) {
    const [from, to, weight] = edges[i];
    if (weight < distanceThreshold) {
      dp[from][to] = weight;
    }
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < edges.length; j++) {
      const [from, to, weight] = edges[j];
      for (let k = 0; k < n; k++) {
        if (dp[k][from] + weight < dp[k][to] && dp[k][from] + weight <= distanceThreshold) {
          dp[k][to] = dp[k][from] + weight;
        }
        if (dp[k][to] + weight < dp[k][from] && dp[k][to] + weight <= distanceThreshold) {
          dp[k][from] = dp[k][to] + weight;
        }
      }
    }
  }
  let min = Infinity;
  let ans = -1;
  // console.log('TCL: dp', dp);
  for (let i = 0; i < dp.length; i++) {
    const d = dp[i];
    let n = 0;
    for (let i = 0; i < d.length; i++) {
      const element = d[i];
      if (element >= 0 && element !== Infinity) {
        n++;
      }
    }
    if (n <= min) {
      if (i > ans) {
        min = n;
        ans = i;
      }
    }
  }
  return ans;
};

console.log(
  findTheCity(
    4,
    [
      [0, 1, 3],
      [1, 2, 1],
      [1, 3, 4],
      [2, 3, 1]
    ],
    4
  )
);

console.log(
  findTheCity(
    5,
    [
      [0, 1, 2],
      [0, 4, 8],
      [1, 2, 3],
      [1, 4, 2],
      [2, 3, 1],
      [3, 4, 1]
    ],
    2
  )
);
