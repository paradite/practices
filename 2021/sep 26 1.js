/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function (nums) {
  let min = nums[0];
  let diff = -1;
  for (let i = 1; i < nums.length; i++) {
    const element = nums[i];
    if (element - min > 0) {
      diff = Math.max(element - min, diff);
    }
    if (element < min) {
      min = element;
    }
  }
  return diff;
};
