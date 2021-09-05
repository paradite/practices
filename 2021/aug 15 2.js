/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function (nums) {
  let ans = [];
  nums = nums.sort((a, b) => a - b);
  let i = 0;
  let j = nums.length - 1;
  while (i < j) {
    ans.push(nums[i]);
    ans.push(nums[j]);
    i++;
    j--;
  }
  if (i === j) ans.push(nums[i]);
  return ans;
};

console.log(rearrangeArray([1, 2, 3, 4, 5]));
console.log(rearrangeArray([6, 2, 0, 9, 7]));
console.log(rearrangeArray([1, 2, 3, 4]));

// 0 9 2 7 6
