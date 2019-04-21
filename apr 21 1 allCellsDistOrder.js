// https://leetcode.com/contest/weekly-contest-133/problems/matrix-cells-in-distance-order/

/**
 * @param {number} R
 * @param {number} C
 * @param {number} r0
 * @param {number} c0
 * @return {number[][]}
 */
var allCellsDistOrder = function(R, C, r0, c0) {
  const maxDistance = R + C;
  const coordinatesByDistance = {};
  for (var i = 0; i < maxDistance; i++) {
    coordinatesByDistance[i] = [];
  }
  for (var r = 0; r < R; r++) {
    for (var c = 0; c < C; c++) {
      const xDistance = r > r0 ? r - r0 : r0 - r;
      const yDistance = c > c0 ? c - c0 : c0 - c;
      const distance = xDistance + yDistance;
      coordinatesByDistance[distance].push([r, c]);
    }
  }
  let ans = [];
  for (var i = 0; i < maxDistance; i++) {
    ans = [...ans, ...coordinatesByDistance[i]];
  }
  return ans;
};

console.log(allCellsDistOrder(0, 0, 0, 0));
console.log(allCellsDistOrder(1, 1, 0, 0));
console.log(allCellsDistOrder(1, 2, 0, 0));
console.log(allCellsDistOrder(2, 2, 0, 1));
console.log(allCellsDistOrder(2, 3, 1, 2));
