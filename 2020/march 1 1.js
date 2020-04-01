/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
  let ans = Array(nums.length).fill(0);
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    for (let j = 0; j < nums.length; j++) {
      const n2 = nums[j];
      if ((i === j) | (n <= n2)) continue;
      ans[i] = ans[i] >= 0 ? ans[i] + 1 : 1;
    }
  }
  return ans;
};

console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3]));
console.log(smallerNumbersThanCurrent([6, 5, 4, 8]));
console.log(smallerNumbersThanCurrent([7, 7, 7, 7]));
