/**
 * @param {number} n
 * @return {number}
 */
var getMaximumGenerated = function (n) {
  let max = 0;
  let nums = [0, 1];
  if (n === 0) return 0;
  if (n === 1) return 1;
  for (let i = 2; i <= n; i++) {
    if (i % 2 === 0) {
      nums[i] = nums[i / 2];
      if (nums[i] > max) max = nums[i];
    } else {
      let k = i - 1;
      nums[i] = nums[k / 2] + nums[k / 2 + 1];
      if (nums[i] > max) max = nums[i];
    }
  }
  return max;
};
