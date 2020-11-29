// bfs
// matrix
// binarysearch binary search
/**
 * @param {number[][]} heights
 * @return {number}
 */
var minimumEffortPath = function (grid) {
  let max = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] > max) max = grid[i][j];
    }
  }

  const directions = [
    [-1, 0],
    [0, -1],
    [1, 0],
    [0, 1],
  ];

  const go = function (grid, pos, max) {
    let nextPos = [];
    const [row, col] = pos;
    for (var i = 0; i < directions.length; i++) {
      const nextRow = row + directions[i][0];
      const nextCol = col + directions[i][1];
      if (nextRow < 0 || nextRow > grid.length - 1) {
        continue;
      }
      if (nextCol < 0 || nextCol > grid[0].length - 1) {
        continue;
      }
      let diff = Math.abs(
        grid[row + directions[i][0]][col + directions[i][1]] - grid[row][col]
      );
      if (diff <= max) {
        nextPos.push([row + directions[i][0], col + directions[i][1]]);
      }
    }
    return nextPos;
  };

  const recurse = (start, end) => {
    if (start >= end) return start;
    const mid = Math.floor((start + end) / 2);
    let result = tryGo(mid);
    if (result) {
      return recurse(start, mid);
    } else {
      return recurse(mid + 1, end);
    }
  };

  const tryGo = (max) => {
    let dpMap = {};
    let current = [[0, 0]];
    while (current.length > 0) {
      let nexts = [];
      for (var i = 0; i < current.length; i++) {
        if (
          current[i][0] === grid.length - 1 &&
          current[i][1] === grid[0].length - 1
        ) {
          return true;
        }
        if (dpMap[current[i][0] + '-' + current[i][1]]) {
          continue;
        } else {
          dpMap[current[i][0] + '-' + current[i][1]] = true;
        }
        const next = go(grid, current[i], max);
        nexts = [...nexts, ...next];
      }
      current = nexts;
    }
  };

  return recurse(0, max);
};

console.log(
  minimumEffortPath([
    [1, 2, 2],
    [3, 8, 2],
    [5, 3, 5],
  ])
);
console.log(minimumEffortPath([[1, 10, 6, 7, 9, 10, 4, 9]]));
