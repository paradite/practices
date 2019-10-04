/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (map[num] >= 0) {
      return [map[num], i];
    }
    map[target - num] = i;
  }
};

console.log(twoSum([2, 2, 11, 15], 4));
