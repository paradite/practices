/**
 * @param {number[][]} grid
 * @return {number}
 */
var getMaximumGold = function(grid) {
  let max = 0;
  for (let i = 0; i < grid.length; i++) {
    const row = grid[i];
    for (let j = 0; j < row.length; j++) {
      const element = row[j];
      // console.log('TCL: element', element);
      if (isTerminal(grid, element, i, j)) {
        // start dfs at each terminal node
        const result = dfs(grid, i, j, {}, 0);
        if (result > max) {
          max = result;
        }
      }
    }
  }
  return max;
};

const isTerminal = (grid, value, i, j) => {
  if (value === 0) {
    return false;
  }
  let link = 0;
  if (i - 1 >= 0 && grid[i - 1][j] !== 0) {
    link++;
  }
  if (i + 1 <= grid.length - 1 && grid[i + 1][j] !== 0) {
    link++;
  }
  if (j - 1 >= 0 && grid[i][j - 1] !== 0) {
    link++;
  }
  if (j + 1 <= grid[0].length - 1 && grid[i][j + 1] !== 0) {
    link++;
  }
  // console.log('TCL: i', i);
  // console.log('TCL: j', j);
  // console.log('TCL: value', value);
  // console.log('TCL: link', link);
  return link >= 0 && link < 4;
};

const dfs = (grid, i, j, currentVisited, currentSum) => {
  // console.log('TCL: grid', grid);
  if (i < 0 || j < 0 || i > grid.length - 1 || j > grid[0].length - 1) {
    return currentSum;
  }
  if (grid[i][j] === 0) {
    return currentSum;
  }
  if (currentVisited[i + '-' + j]) {
    return currentSum;
  }
  // if (i === 1 && j === 2) {
  // console.log('TCL: currentSum', currentSum);
  // }
  currentSum += grid[i][j];
  currentVisited[i + '-' + j] = true;
  const left = dfs(grid, i, j - 1, Object.assign({}, currentVisited), currentSum);
  const right = dfs(grid, i, j + 1, Object.assign({}, currentVisited), currentSum);
  const up = dfs(grid, i - 1, j, Object.assign({}, currentVisited), currentSum);
  const down = dfs(grid, i + 1, j, Object.assign({}, currentVisited), currentSum);
  if (Math.max(left, right, up, down) === 127) {
    // console.log('TCL: i', i);
    // console.log('TCL: j', j);
    // console.log('TCL: currentSum', currentSum);
    // console.log(currentVisited);
  }
  return Math.max(left, right, up, down);
};

console.log(getMaximumGold([[0, 6, 0], [5, 8, 7], [0, 9, 0]]));
console.log(getMaximumGold([[1, 0, 7], [2, 0, 6], [3, 4, 5], [0, 3, 0], [9, 0, 20]]));
console.log(getMaximumGold([[0, 0, 0, 0, 0, 0, 32, 0, 0, 20], [0, 0, 2, 0, 0, 0, 0, 40, 0, 32], [13, 20, 36, 0, 0, 0, 20, 0, 0, 0], [0, 31, 27, 0, 19, 0, 0, 25, 18, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 18, 0, 6], [0, 0, 0, 25, 0, 0, 0, 0, 0, 0], [0, 0, 0, 21, 0, 30, 0, 0, 0, 0], [19, 10, 0, 0, 34, 0, 2, 0, 0, 27], [0, 0, 0, 0, 0, 34, 0, 0, 0, 0]]));
console.log(getMaximumGold([[0, 0, 34, 0, 5, 0, 7, 0, 0, 0], [0, 0, 0, 0, 21, 0, 0, 0, 0, 0], [0, 18, 0, 0, 8, 0, 0, 0, 4, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [15, 0, 0, 0, 0, 22, 0, 0, 0, 21], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 7, 0, 0, 0, 0, 0, 0, 38, 0]]));
