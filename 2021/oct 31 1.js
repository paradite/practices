/**
 * @param {number[]} nums
 * @return {number}
 */
var smallestEqual = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    if (i % 10 === element) return i;
  }
  return -1;
};
