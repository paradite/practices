/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum = function (nums) {
  let max = 0;
  let sum = 0;
  let pre = null;
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    if (pre === null || element > pre) {
      sum = sum + element;
      pre = element;
    } else {
      if (sum > max) {
        max = sum;
      }
      pre = element;
      sum = element;
    }
  }
  if (sum > max) max = sum;
  return max;
};
