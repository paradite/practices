/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function (nums, k) {
  if (k === 1 && nums.length > 1) return true;
  // dp is set of current remainder of nums
  const dp = new Set();
  let accu = 0;
  for (let i = 1; i < nums.length; i++) {
    const curr = nums[i];
    const prev = i === 1 ? 0 : nums[i - 1];
    accu = (accu + prev) % k;
    const currRe = (curr + accu) % k;
    if ((curr + nums[i - 1]) % k === 0) {
      return true;
    }
    if (dp.has(k - currRe)) {
      return true;
    }
    const toAdd = (k + nums[i - 1] - accu) % k;
    dp.add(toAdd);
    if (toAdd === 0) {
      dp.add(k);
    } else if (toAdd === k) {
      dp.add(0);
    }
  }
  return false;
};

// console.log(checkSubarraySum([2], 1));
// console.log(checkSubarraySum([5, 2, 5, 2, 5], 6));
// console.log(checkSubarraySum([5, 2, 6, 2, 5], 6));
// console.log(checkSubarraySum([23, 2, 6, 2, 5], 6));
console.log(checkSubarraySum([23, 2, 4, 6, 7], 6));
console.log(checkSubarraySum([23, 2, 6, 4, 7], 6));
console.log(checkSubarraySum([0, 0], 2));
console.log(checkSubarraySum([1, 5, 2, 3], 5));
console.log(checkSubarraySum([1, 5, 0, 2], 5));
console.log(checkSubarraySum([1, 1], 1));
console.log(checkSubarraySum([8, 2, 3, 1, 10], 7));
console.log(checkSubarraySum([8, 2, 3, 4, 10], 7));
console.log(checkSubarraySum([8, 2, 3, 4, 10, 3, 3], 8));
console.log(checkSubarraySum([8, 2, 3, 4, 10, 3, 3], 20));
console.log();
console.log(checkSubarraySum([8, 2, 3, 4, 10], 8));
console.log(checkSubarraySum([23, 2, 6, 4, 7], 13));
console.log(checkSubarraySum([0], 2));
console.log(checkSubarraySum([1, 5, 2], 5));
console.log(checkSubarraySum([23, 2, 6, 2, 5], 6));
