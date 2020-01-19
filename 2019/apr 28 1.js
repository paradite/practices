// https://leetcode.com/contest/weekly-contest-134/problems/moving-stones-until-consecutive/
/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number[]}
 */
var numMovesStones = function(a, b, c) {
  let minAns = 2;
  let maxAns = 2;
  const arr = [a, b, c].sort((a, b) => a - b);
  let [left, mid, right] = arr;
  // console.log(left);
  // console.log(mid);
  // console.log(right);
  if (left + 1 === mid && mid + 1 === right) {
    return [0, 0];
  } else {
    if (left + 1 === mid) {
      minAns = 1;
      maxAns = right - mid - 1;
    } else if (mid + 1 === right) {
      minAns = 1;
      maxAns = mid - left - 1;
    } else if (left + 2 === mid) {
      minAns = 1;
      maxAns = right - mid;
    } else if (mid + 2 === right) {
      minAns = 1;
      maxAns = mid - left;
    } else {
      minAns = 2;
      maxAns = right - mid - 1 + (mid - left - 1);
    }
    return [minAns, maxAns];
  }
};

console.log(numMovesStones(1, 2, 5));
console.log(numMovesStones(1, 6, 10));
console.log(numMovesStones(6, 1, 10));
console.log(numMovesStones(4, 3, 2));
console.log(numMovesStones(21, 27, 3));
