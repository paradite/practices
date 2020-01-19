/**
 * @param {number[]} nums
 * @return {number}
 */
var movesToMakeZigzag = function(nums) {
  let evenAns = 0;
  let oddAns = 0;
  for (let i = 0; i < nums.length; i++) {
    let moves = 0;
    const element = nums[i];
    if (i === 0 && nums.length > 1) {
      moves += nums[i + 1] > element ? 0 : element - nums[i + 1] + 1;
    } else if (i === nums.length - 1 && nums.length > 1) {
      moves += nums[i - 1] > element ? 0 : element - nums[i - 1] + 1;
    } else if(nums.length > 2) {
      const left = nums[i - 1];
      const right = nums[i + 1];
      const min = Math.min(left, right);
      moves += min > element ? 0 : element - min + 1;
    }
    if (i % 2 === 0) {
      oddAns += moves;
    } else {
      evenAns += moves;
    }
  }
  // console.log(oddAns);
  // console.log(evenAns);
  
  return Math.min(oddAns, evenAns);
};

console.log(movesToMakeZigzag([1, 2, 3]));
console.log(movesToMakeZigzag([9, 6, 1, 6, 2]));
console.log(movesToMakeZigzag([1]));
console.log(movesToMakeZigzag([1,1]));
console.log(movesToMakeZigzag([1,2,1]));
console.log(movesToMakeZigzag([2,1,2]));
