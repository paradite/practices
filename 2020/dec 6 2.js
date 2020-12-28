/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function (nums, k) {
  const map = {};
  let ans = 0;
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    if (map[element]) {
      map[element] = map[element] - 1;
      ans++;
    } else {
      let comp = k - element;
      if (map[comp]) {
        map[comp] = map[comp] + 1;
      } else {
        map[comp] = 1;
      }
    }
  }
  return ans;
};
