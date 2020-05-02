/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
  const ans = [];
  const q = [];
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    while (q.length && element > q[q.length - 1]) {
      q.pop();
    }
    q.push(element);
    const start = i - k + 1;
    if (start >= 0) {
      ans.push(q[0]);
      if (nums[start] === q[0]) {
        q.shift();
      }
    }
  }
  return ans;
};

console.log(maxSlidingWindow([1, -1], 1));
console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));
console.log(maxSlidingWindow([1, 3, 1, 2, 0, 5], 3));
