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
  let prefixSum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    prefixSum = (nums[i] + prefixSum) % k;
    console.log({ i, accu, prefixSum });
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

console.log(checkSubarraySum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 22));
