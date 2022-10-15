/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
  let min1,
    min2 = undefined;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if (min2 !== undefined && n > min2) {
      return true;
    }
    if (min2 === undefined && n > min1) {
      min2 = n;
      // min21 = min1;
    } else if (n < min2 && n > min1) {
      min2 = n;
      // min21 = min1;
    }
    if (min1 === undefined || min1 > n) {
      min1 = n;
    }
  }
  return false;
};

console.log(increasingTriplet([1, 2, 3, 4, 5]));
console.log(increasingTriplet([5, 4, 3, 2, 1]));
console.log(increasingTriplet([2, 1, 5, 0, 4, 6]));
console.log(increasingTriplet([1, 1, 1]));
console.log(increasingTriplet([-1, 2, 3]));
