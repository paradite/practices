/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  let max = 0;
  let max2 = 0;
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    if (element > max) {
      max2 = max;
      max = element;
    } else if (element > max2) {
      max2 = element;
    }
  }
  return (max - 1) * (max2 - 1);
};
