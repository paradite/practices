/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function (nums, k) {
  // dp is set of current remainder of nums
  let dp = new Set([nums[0] % k]);

  for (let i = 1; i < nums.length; i++) {
    const newDp = new Set();
    const newRemainder = nums[i] % k;
    newDp.add(newRemainder);
    for (const prevRemainder of dp) {
      const sumRemainder = (prevRemainder + newRemainder) % k;
      if (sumRemainder % k === 0) return true;
      newDp.add(sumRemainder);
    }
    dp = newDp;
  }
  return false;
};

console.log(checkSubarraySum([23, 2, 4, 6, 7], 6));
console.log(checkSubarraySum([23, 2, 6, 4, 7], 6));
console.log(checkSubarraySum([23, 2, 6, 4, 7], 13));
console.log(checkSubarraySum([0], 2));
console.log(checkSubarraySum([0, 0], 2));
console.log(checkSubarraySum([1, 5, 2], 5));
console.log(checkSubarraySum([1, 5, 2, 3], 5));
console.log(checkSubarraySum([1, 5, 0, 2], 5));
