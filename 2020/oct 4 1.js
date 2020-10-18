/**
 * @param {number[]} nums
 * @return {number}
 */
var specialArray = function (nums) {
  for (let i = 0; i <= 100; i++) {
    let count = 0;
    for (let j = 0; j < nums.length; j++) {
      const element = nums[j];
      if (element >= i) {
        count++;
      }
    }
    if (i === count) {
      return i;
    }
  }
  return -1;
};
