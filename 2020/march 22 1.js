/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function(nums, index) {
  const arr = [];
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    arr.splice(index[i], 0, num);
  }
  return arr;
};

console.log(createTargetArray([0, 1, 2, 3, 4], [0, 1, 2, 2, 1]));
console.log(createTargetArray([1, 2, 3, 4, 0], [0, 1, 2, 3, 0]));
console.log(createTargetArray([1], [0]));
