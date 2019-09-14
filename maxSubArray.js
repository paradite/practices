/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  if (nums.length === 0) {
    return 0;
  }
  const dp = [nums[0]];
  let max = nums[0];
  for (let index = 1; index < nums.length; index++) {
    const num = nums[index];
    dp[index] = dp[index - 1] > 0 ? dp[index - 1] + num : num;
    if (dp[index] > max) {
      max = dp[index];
    }
  }
  // console.log(dp);

  return max;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubArray([1, 2, -4, 2, 2]));
