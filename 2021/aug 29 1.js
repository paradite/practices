/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function (nums, k) {
  if (nums.length === 1) return 0;
  nums.sort((a, b) => b - a);
  let min = Infinity;
  for (let i = 0; i < nums.length - k + 1; i++) {
    const first = nums[i];
    const second = nums[i + k - 1];
    // console.log('TCL ~ first - second', first - second);
    min = Math.min(min, first - second);
  }
  return min;
};

console.log(minimumDifference([9, 4, 1, 7], 2));
console.log(minimumDifference([9, 4, 1, 7], 3));
