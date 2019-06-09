// https://leetcode.com/contest/weekly-contest-135/problems/valid-boomerang/

/**
 * @param {number[][]} points
 * @return {boolean}
 */
var isBoomerang = function(points) {
  const [p1, p2, p3] = points;
  if (p1[0] === p2[0] && p1[1] === p2[1]) {
    return false;
  }
  if (p1[0] === p3[0] && p1[1] === p3[1]) {
    return false;
  }
  if (p3[0] === p2[0] && p3[1] === p2[1]) {
    return false;
  }
  const gradient12 = (p2[1] - p1[1]) / (p2[0] - p1[0]);
  const gradient13 = (p3[1] - p1[1]) / (p3[0] - p1[0]);
  // console.log(gradient12);
  // console.log(gradient13);
  if (gradient12 === gradient13) {
    return false;
  }
  return true;
};

console.log(isBoomerang([[1, 1], [2, 3], [3, 2]]), true);
console.log(isBoomerang([[1, 1], [2, 2], [3, 3]]), false);
console.log(isBoomerang([[1, 1], [1, 1], [3, 3]]), false);
console.log(isBoomerang([[0, 0], [-0.1, -0.1], [3, 3]]), false);
console.log(isBoomerang([[0, 0], [-0.1, -0.2], [3, 3]]), true);
