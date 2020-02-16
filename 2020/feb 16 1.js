/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
  let ans = 0;
  for (let i = 0; i < grid.length; i++) {
    const row = grid[i];
    for (let j = 0; j < row.length; j++) {
      const element = row[j];
      if (element < 0) {
        ans += row.length - j;
        break;
      }
    }
  }
  return ans;
};

console.log(
  countNegatives([
    [4, 3, 2, -1],
    [3, 2, 1, -1],
    [1, 1, -1, -2],
    [-1, -1, -2, -3]
  ])
);

console.log(
  countNegatives([
    [3, 2],
    [1, 0]
  ])
);
