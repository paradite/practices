/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxDistance = function(grid) {
  let cell1 = [];
  let has1 = false;
  let has0 = false;
  for (let i = 0; i < grid.length; i++) {
    const element = grid[i];
    for (let j = 0; j < element.length; j++) {
      const cell = element[j];
      if (cell === 0) {
        has0 = true;
      }
      if (cell === 1) {
        has1 = true;
        cell1.push([i, j]);
      }
    }
  }
  if (has0 === false || has1 === false) {
    return -1;
  }
  let ans = 0;
  let newCell1 = [];

  while (cell1.length > 0) {
    const element = cell1.pop();
    [[-1, 0], [1, 0], [0, -1], [0, 1]].forEach(([dx, dy]) => {
      const x = element[0] + dx;
      const y = element[1] + dy;
      if (x >= 0 && x < grid.length && y >= 0 && y < grid[0].length) {
        if (grid[x][y] === 0) {
          grid[x][y] = 1;
          newCell1.push([x, y]);
        }
      }
    });
    if (cell1.length === 0) {
      cell1 = newCell1;
      if (cell1.length > 0) {
        ans++;
      }
      newCell1 = [];
    }
  }
  return ans;
};

console.log(maxDistance([[1, 0, 1], [0, 0, 0], [1, 0, 1]]));
console.log(maxDistance([[1, 0, 0], [0, 0, 0], [0, 0, 0]]));
