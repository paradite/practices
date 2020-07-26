/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    if (map[element]) {
      map[element] = map[element] + 1;
    } else {
      map[element] = 1;
    }
  }
  let ans = 0;
  for (const key in map) {
    if (map.hasOwnProperty(key)) {
      const element = map[key];
      for (let i = 1; i < element; i++) {
        ans += i;
      }
    }
  }
  return ans;
};
