/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var kLengthApart = function(nums, k) {
  let cur = 0;
  let found = false;
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    if (element === 1) {
      if (found === true) {
        if (cur < k) {
          return false;
        }
      } else {
        found = true;
      }
      cur = 0;
    } else {
      if (found === true) {
        cur++;
      }
    }
  }
  return true;
};

// prettier-ignore
console.log(kLengthApart([1,0,0,0,1,0,0,1],2));
// prettier-ignore
console.log(kLengthApart([1,0,0,1,0,1],2));
// prettier-ignore
console.log(kLengthApart([1,1,1,1,1],0));
// prettier-ignore
console.log(kLengthApart([0,1,0,1],1));
