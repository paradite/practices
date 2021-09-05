/**
 * @param {string[]} nums
 * @return {string}
 */
var findDifferentBinaryString = function (nums) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    const n = parseInt(element, 2);
    map[n] = true;
  }
  let i = 0;
  while (map[i]) {
    i++;
  }
  return i.toString(2).padStart(nums.length, '0');
};
