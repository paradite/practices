/**
 * @param {number[][]} grid
 * @return {number}
 */
var closedIsland = function(grid) {
  let ans = 0;
  let visited = {};

  const dfs = (r, c) => {
    let selfValid = true;
    if (visited[r + '-' + c]) {
      return 1;
    }
    visited[r + '-' + c] = true;
    // not visited
    if (r < 0 || c < 0 || r > grid.length - 1 || c > grid[0].length - 1) {
      return 1;
    }
    // valid position

    if (grid[r][c] === 1) {
      return 1;
    }
    // cell is 0
    if (r === 0 || c === 0 || r === grid.length - 1 || c === grid[0].length - 1) {
      selfValid = false;
    }
    let ans1 = dfs(r - 1, c);
    let ans2 = dfs(r + 1, c);
    let ans3 = dfs(r, c - 1);
    let ans4 = dfs(r, c + 1);
    if (ans1 && ans2 && ans3 && ans4 && selfValid) {
      return true;
    }
  };

  for (let i = 0; i < grid.length; i++) {
    const row = grid[i];
    for (let j = 0; j < row.length; j++) {
      const res = dfs(i, j);
      if (res === true) {
        // console.log('TCL: i j', i, j);
        ans++;
      }
    }
  }
  // console.log('TCL: visited', visited);
  return ans;
};

console.log(closedIsland([[1, 1, 1, 1, 1, 1, 1, 0], [1, 0, 0, 0, 0, 1, 1, 0], [1, 0, 1, 0, 1, 1, 1, 0], [1, 0, 0, 0, 0, 1, 0, 1], [1, 1, 1, 1, 1, 1, 1, 0]]));
console.log(closedIsland([[0, 0, 1, 0, 0], [0, 1, 0, 1, 0], [0, 1, 1, 1, 0]]));
console.log(closedIsland([[1, 1, 1, 1, 1, 1, 1], [1, 0, 0, 0, 0, 0, 1], [1, 0, 1, 1, 1, 0, 1], [1, 0, 1, 0, 1, 0, 1], [1, 0, 1, 1, 1, 0, 1], [1, 0, 0, 0, 0, 0, 1], [1, 1, 1, 1, 1, 1, 1]]));
console.log(closedIsland([[1, 1, 0, 1, 1, 1, 1, 1, 1, 1], [0, 0, 1, 0, 0, 1, 0, 1, 1, 1], [1, 0, 1, 0, 0, 0, 1, 0, 1, 0], [1, 1, 1, 1, 1, 0, 0, 1, 0, 0], [1, 0, 1, 0, 1, 1, 1, 1, 1, 0], [0, 0, 0, 0, 1, 1, 0, 0, 0, 0], [1, 0, 1, 0, 0, 0, 0, 1, 1, 0], [1, 1, 0, 0, 1, 1, 0, 0, 0, 0], [0, 0, 0, 1, 1, 0, 1, 1, 1, 0], [1, 1, 0, 1, 0, 1, 0, 0, 1, 0]]));

// [[1, 1, 0, 1, 1, 1, 1, 1, 1, 1],
//  [0, 0, 1, 0, 0, 1, 0, 1, 1, 1],
//  [1, 0, 1, 0, 0, 0, 1, 0, 1, 0],
//  [1, 1, 1, 1, 1, 0, 0, 1, 0, 0],
//  [1, 0, 1, 0, 1, 1, 1, 1, 1, 0],
//  [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
//  [1, 0, 1, 0, 0, 0, 0, 1, 1, 0],
//  [1, 1, 0, 0, 1, 1, 0, 0, 0, 0],
//  [0, 0, 0, 1, 1, 0, 1, 1, 1, 0],
//  [1, 1, 0, 1, 0, 1, 0, 0, 1, 0]]
