/**
 * @param {number[]} calories
 * @param {number} k
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var dietPlanPerformance = function(calories, k, lower, upper) {
  let windowCount = 0;
  let ans = 0;
  for (let i = 0; i < k; i++) {
    windowCount += calories[i];
  }
  // console.log(windowCount);
  if (windowCount < lower) {
    ans -= 1;
  }
  if (windowCount > upper) {
    ans += 1;
  }
  for (let index = 0; index < calories.length - k; index++) {
    windowCount -= calories[index];
    windowCount += calories[index + k];
    // console.log(windowCount);
    if (windowCount < lower) {
      ans -= 1;
    }
    if (windowCount > upper) {
      ans += 1;
    }
  }
  return ans;
};

console.log(dietPlanPerformance([1, 2, 3, 4, 5], 1, 3, 3));
console.log(dietPlanPerformance([3, 2], 2, 0, 1));
console.log(dietPlanPerformance([6, 5, 0, 0], 2, 1, 5));
