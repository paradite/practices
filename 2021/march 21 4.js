/**
 * @param {number[]} nums
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countPairs = function (nums, low, high) {
  count = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const element = nums[i] ^ nums[j];
      if (element >= low && element <= high) {
        count++;
      }
    }
  }
  return count;
};

// console.log(countPairs([1, 4, 2, 7], 2, 6));
// console.log(countPairs([9, 8, 4, 2, 1], 5, 14));
