/**
 * @param {number[]} nums
 * @param {number} target
 * @param {number} start
 * @return {number}
 */
var getMinDistance = function (nums, target, start) {
  let result = Infinity;
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    if (element === target && Math.abs(i - start) < result) {
      result = Math.abs(i - start);
    }
  }
  return result;
};
