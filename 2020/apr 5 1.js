/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minSubsequence = function(nums) {
  const sum = nums.reduce((a, b) => a + b, 0);
  nums.sort((a, b) => b - a);
  let cur = 0;
  let ans = [];
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    cur += element;
    ans.push(element);
    if (cur > sum / 2) {
      return ans;
    }
  }
};

console.log(minSubsequence([4, 3, 10, 9, 8]));
console.log(minSubsequence([4, 4, 7, 6, 7]));
console.log(minSubsequence([6]));
