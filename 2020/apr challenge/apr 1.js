/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  const map = {};
  let ans = nums[0];
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if (map[n]) {
      map[n] = 2;
    } else {
      map[n] = 1;
      ans = n;
    }
  }
  for (const key in map) {
    if (map.hasOwnProperty(key)) {
      const element = map[key];
      if (element === 1) return key;
    }
  }
  return ans;
};

console.log(singleNumber([2, 2, 1]));
console.log(singleNumber([4, 1, 2, 1, 5, 2, 4]));
