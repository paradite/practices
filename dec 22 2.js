/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var isPossibleDivide = function(nums, k) {
  if (nums.length % k !== 0) {
    return false;
  }
  const n = nums.length / k;
  // console.log('TCL: n', n);
  nums.sort((a, b) => a - b);
  for (let i = 0; i < n; i++) {
    // console.log('TCL: nums', nums);
    let min = nums.shift();
    let current = 1;
    for (let j = 0; j < nums.length; j++) {
      const element = nums[j];
      if (element === min + 1) {
        nums.splice(j, 1);
        j = j - 1;
        // console.log('TCL: nums', nums);
        min = element;
        current += 1;
        // console.log('TCL: current', current);
        if (current === k) {
          // console.log('TCL: current === k', current === k);
          break;
        }
      }
    }
    if (current !== k) {
      return false;
    }
  }
  return true;
};

console.log(isPossibleDivide([1, 2, 3, 3, 4, 4, 5, 6], 4));
console.log(isPossibleDivide([3, 2, 1, 2, 3, 4, 3, 4, 5, 9, 10, 11], 3));
console.log(isPossibleDivide([3, 3, 2, 2, 1, 1], 3));
console.log(isPossibleDivide([1, 2, 3, 4], 3));
console.log(isPossibleDivide([1, 2, 3, 4], 4));
