/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function(grid) {
  let dpMap = {};
  let gridSize = grid.length;
  if (grid[0][0] === 1 || grid[gridSize - 1][gridSize - 1] === 1) {
    return -1;
  }
  let current = [[0,0]];
  let ans = 1;
  while(current.length > 0) {
    let nexts = [];
    for (var i = 0; i < current.length; i++) {
      if (current[i][0] === gridSize - 1 &&current[i][1] === gridSize - 1) {
        return ans;
      }
      if (dpMap[current[i][0] + '-' + current[i][1]]) {
        continue;
      } else {
        dpMap[current[i][0] + '-' + current[i][1]] = true;
      }
      const next = go(grid, current[i]);
      nexts = [...nexts, ...next];
    }
    current = nexts;
    ans++;
  }
  return -1;
};

const directions = [[-1,-1], [-1,0], [0,-1],[-1,+1],[+1,-1],[1,0],[0,1],[1,1]];

const go = function(grid, pos) {
  let nextPos = [];
  const [row, col] = pos;
  for (var i = 0; i < directions.length; i++) {
    const nextRow = row + directions[i][0];
    const nextCol = col + directions[i][1];
    if (nextRow < 0 || nextRow > grid.length - 1) {
      continue;
    }
    if (nextCol < 0 || nextCol > grid.length - 1) {
      continue;
    }
    if (grid[row + directions[i][0]][col + directions[i][1]] === 0) {
      nextPos.push([row + directions[i][0], col + directions[i][1]]);
    }
  }
  return nextPos;
}

console.log(shortestPathBinaryMatrix([[0,1],[1,0]]));
console.log(shortestPathBinaryMatrix([[0,0,0],[1,1,0],[1,1,0]]));
console.log(shortestPathBinaryMatrix([[0,0,0,0,1],[1,0,0,0,0],[0,1,0,1,0],[0,0,0,1,1],[0,0,0,1,0]]));
