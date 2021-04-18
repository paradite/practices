/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function (nums) {
  let ne = 0;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if (n === 0) {
      return 0;
    } else if (n < 0) {
      ne++;
    }
  }
  return ne % 2 === 0 ? 1 : -1;
};
