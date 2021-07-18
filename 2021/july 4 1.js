/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function (nums) {
  return nums.map(function (n) {
    return nums[n];
  });
};
