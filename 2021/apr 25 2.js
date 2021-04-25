/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxFrequency = function (nums, k) {
  nums.sort((a, b) => a - b);
  let start = 0;
  let end = 0;
  let cumulate = nums[0];
  let max = 1;
  while (end + 1 < nums.length) {
    const next = nums[end + 1];
    // console.log('TCL ~ next', next);
    if (next * (end - start + 1) - cumulate <= k) {
      end++;
      cumulate = cumulate + next;
      if (end - start + 1 > max) max = end - start + 1;
    } else {
      const startN = nums[start];
      cumulate = cumulate - startN;
      start++;
      if (end < start) {
        end = start;
        cumulate = nums[end];
        if (nums[end + 1] - cumulate <= k && max === 0) {
          max = 1;
        }
      }
    }
  }
  return max;
};

console.log(maxFrequency([1, 2, 4], 5));
console.log(maxFrequency([1, 2, 4, 98, 99, 99, 98], 5));
console.log(maxFrequency([1, 2, 4, 97, 97, 98, 99, 99, 98], 6));
console.log(maxFrequency([1, 4, 8, 13], 5));
console.log(maxFrequency([3, 9, 6], 2));
