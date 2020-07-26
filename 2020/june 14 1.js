/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  let ans = [];
  let p = 0;
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    p = element + p;
    ans.push(p);
  }
  return ans;
};
