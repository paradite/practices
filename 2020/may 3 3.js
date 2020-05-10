/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
var longestSubarray = function(nums, limit) {
  let ans = 0;
  let dp = new Array(nums.length + 1).fill([Infinity, 0]);

  for (let length = 1; length <= nums.length; length++) {
    let newdp = new Array(nums.length + 1);
    for (let index = length - 1; index < nums.length; index++) {
      // console.log('longestSubarray -> length', length);
      // console.log('longestSubarray -> index', index);
      // console.log('longestSubarray -> dp', dp);
      // console.log('longestSubarray -> dp[length - 1]', dp[length - 1]);
      const [pmin, pmax] = dp[index];
      // console.log('longestSubarray -> [pmin, pmax]', [pmin, pmax]);
      // console.log('longestSubarray -> nums[index]', nums[index]);
      let min = Math.min(pmin, nums[index]);
      let max = Math.max(pmax, nums[index]);
      newdp[index + 1] = [min, max];
      if (max - min <= limit) {
        if (length > ans) {
          ans = length;
        }
      }
    }
    dp = newdp;
  }
  // console.log('longestSubarray -> dp', dp.length);
  // console.log('longestSubarray -> dp', dp);
  return ans;
};

// prettier-ignore
console.log(longestSubarray([8,2,4,7],4));
// prettier-ignore
console.log(longestSubarray([10,1,2,4,7,2],5));
// prettier-ignore
console.log(longestSubarray([4,2,2,2,4,4,2,2],0));
// prettier-ignore
console.log(longestSubarray([2,5,2],9));
