/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let max = nums.length;
  let zeros = 0;
  for (let i = 0; i < max; i++) {
    // console.log('moveZeroes -> i', i);
    // console.log('moveZeroes -> nums', nums);
    const n = nums[i];
    if (n === 0) {
      nums.splice(i, 1);
      i--;
      max--;
      zeros++;
    }
  }
  for (let i = 0; i < zeros; i++) {
    nums.push(0);
  }
};

let a = [0, 1, 0, 3, 12];
let b = [0, 0, 1];
moveZeroes(a);
console.log(a);
moveZeroes(b);
console.log(b);
