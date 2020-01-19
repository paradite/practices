// https://leetcode.com/contest/weekly-contest-138/problems/height-checker/

/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
  const sorted = heights.slice().sort((a, b) => a - b);
  // console.log(heights.length);
  // console.log(heights);
  // console.log(sorted);
  let ans = 0;
  for (var i = 0; i < heights.length; i++) {
    if (heights[i] !== sorted[i]) {
      ans++;
    }
  }
  return ans;
};

console.log(heightChecker([1, 1, 4, 2, 1, 3]));
console.log(heightChecker([10, 6, 6, 10, 10, 9, 8, 8, 3, 3, 8, 2, 1, 5, 1, 9, 5, 2, 7, 4, 7, 7]));
// console.log(heightChecker([1]));
// console.log(heightChecker([1, 2]));
// console.log(heightChecker([2, 1]));
// console.log(heightChecker([3, 2, 1]));
