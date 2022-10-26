/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function (nums, k) {
  for (let i = 0; i < nums.length - 1; i++) {
    let sum = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      sum += nums[j];
      if (sum % k === 0) return true;
    }
  }
  return false;
};

console.log(checkSubarraySum([23, 2, 4, 6, 7], 6));
console.log(checkSubarraySum([23, 2, 6, 4, 7], 6));
console.log(checkSubarraySum([0], 2));
console.log(checkSubarraySum([23, 2, 6, 4, 7], 13));
