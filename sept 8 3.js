/**
 * @param {number[]} arr
 * @return {number}
 */
var maximumSum = function(arr) {
  const dp = [[arr[0], arr[0]]];
  let max = arr[0];
  for (let index = 1; index < arr.length; index++) {
    const num = arr[index];
    dp[index] = [];
    dp[index][0] = dp[index - 1][0] > 0 ? dp[index - 1][0] + num : num;
    if (dp[index][0] > max) {
      max = dp[index][0];
    }
    const removeCurrent = dp[index - 1][0] > 0 ? dp[index][0] - num : num;
    const removePrevious = dp[index - 1][1] + num;
    dp[index][1] = Math.max(removeCurrent, removePrevious);
    if (dp[index][1] > max) {
      max = dp[index][1];
    }
  }
  // console.log(dp);

  return max;
};

console.log(maximumSum([1, -2, 0, 3]));
console.log(maximumSum([1, -2, -2, 3]));
console.log(maximumSum([-1, -1, -1, -1]));
