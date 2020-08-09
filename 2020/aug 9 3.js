/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var maxNonOverlapping = function (nums, target) {
  let prefixMap = {
    0: 0,
  };
  let cur = 0;
  let ans = 0;
  // use prefixMap to keep track of the prefix sum
  for (let i = 0; i < nums.length; i++) {
    cur += nums[i];
    // check if we hit a subarray by checking against existing prefix sum
    if (prefixMap[cur - target] >= 0) {
      ans++;
      cur = 0;
      prefixMap = {
        0: i + 1,
      };
    } else {
      prefixMap[cur] = i;
    }
  }
  return ans;
};

console.log(maxNonOverlapping([1, 1, 1, 1, 1], 2));
console.log(maxNonOverlapping([-1, 3, 5, 1, 4, 2, -9], 6));
console.log(maxNonOverlapping([-2, 6, 6, 3, 5, 4, 1, 2, 8], 10));
console.log(maxNonOverlapping([0, 0, 0], 0));
console.log(maxNonOverlapping([2, 3, 3, -3, 3, 2, 0, -1, 3, -2], 2));
console.log(maxNonOverlapping([1, 1, 1, 1], 2));
