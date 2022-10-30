/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */
var shortestPath = function (grid, k) {
  let dp = [];
  for (let i = 0; i < grid.length; i++) {
    let row = [];
    for (let j = 0; j < grid[0].length; j++) {
      row.push({});
    }
    dp.push(row);
  }

  let ans = -1;
  let ways = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];
  let dfscount = 0;
  const dfs = (x, y, total, left) => {
    if (ans !== -1 && total >= ans) {
      return;
    }

    dfscount++;
    if (x === grid[0].length - 1 && y === grid.length - 1) {
      if (ans === -1) {
        ans = total;
        // console.log('TCL ~ f ans', ans);
      } else if (total < ans) {
        ans = total;
        // console.log('TCL ~ s ans', ans);
      }
    }
    const needed =
      Math.abs(grid[0].length - 1 - x) + Math.abs(grid.length - 1 - y);
    left = Math.min(left, needed);
    // console.log('TCL ~ needed', needed);
    if (dp[y][x]) {
      if (dp[y][x][needed] && total > dp[y][x][needed]) {
        return;
      }
      for (const prevLeft in dp[y][x]) {
        if (Object.hasOwnProperty.call(dp[y][x], prevLeft)) {
          if (left <= prevLeft && total > dp[y][x][prevLeft]) {
            return;
          }
          if (prevLeft >= needed && total > dp[y][x][prevLeft]) {
            return;
          }
        }
      }

      // console.log('TCL ~ dp[y][x]', y, x, dp[y][x]);
      if (dp[y][x][left] >= 0) {
        if (total < dp[y][x][left]) {
          dp[y][x][left] = total;
        } else {
          return;
        }
      } else {
        dp[y][x][left] = total;
      }
    } else {
      // console.log('TCL: dp', dp);
      // console.log('TCL: y', y);
      // console.log('TCL: x', x);
      // console.log('TCL: dp[y][x]', dp[y][x]);
      dp[y][x][left] = total;
    }
    // console.log('TCL: dp', dp);
    for (let i = 0; i < ways.length; i++) {
      const [dx, dy] = ways[i];
      let newx = x + dx;
      let newy = y + dy;
      if (newx >= 0 && newx < grid[0].length) {
        if (newy >= 0 && newy < grid.length) {
          if (grid[newy][newx] === 0) {
            dfs(newx, newy, total + 1, left);
          } else {
            if (left > 0) {
              dfs(newx, newy, total + 1, left - 1);
            }
          }
        }
      }
    }
  };

  dfs(0, 0, 0, k);
  // console.log('TCL ~ dfscount', dfscount);
  return ans;
};

// prettier-ignore
console.log(shortestPath([[0,0,0],[1,1,0],[0,0,0],[0,1,1],[0,0,0]], 1));
// prettier-ignore
console.log(shortestPath([[0,1,1],[1,1,1],[1,0,0]], -1));
// prettier-ignore
console.log(shortestPath([[0,1,1,1,0,0,0,1,1,0,1,1,1,0,0,1,0,0,1,0,1,0,1,1,0,1,1,0,1,1,1,1,0,0,0,1,1,0,0,1],[0,0,0,0,0,1,1,0,0,1,1,0,1,0,1,1,1,0,0,0,0,1,1,1,1,1,0,0,0,1,0,0,1,1,1,0,1,1,1,1],[0,1,1,1,1,1,0,1,0,1,0,1,0,1,0,0,1,0,1,1,0,0,1,1,0,0,1,0,1,0,0,1,0,1,1,0,0,0,1,1],[0,1,0,1,1,1,1,1,1,0,1,1,0,0,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,0,0,1,0,1,1,0,1,1,1],[1,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1,1,1,0,0,0,0,1,0,0,1,0,0,1,1,1,0,1,0,1,1,1,0,0,1],[1,1,1,1,1,1,1,0,0,0,0,0,1,0,1,1,0,0,1,0,1,1,1,1,0,0,1,1,1,0,1,0,1,0,1,1,1,0,1,1],[0,0,0,1,1,1,0,1,1,1,1,1,0,1,0,0,1,0,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,0,0,1,1,0,1],[0,1,1,0,1,0,0,1,1,1,0,0,1,0,0,1,0,1,1,1,1,1,1,1,0,1,1,0,1,1,1,0,1,0,0,1,0,0,1,0],[0,1,0,1,1,0,1,0,0,0,0,1,1,0,0,0,0,1,1,1,1,0,1,0,0,0,0,0,1,1,0,1,1,0,1,1,1,1,1,0],[0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,0,0],[1,0,1,0,0,0,0,0,1,0,0,0,1,1,1,0,1,0,0,0,1,1,0,1,1,1,0,0,1,0,1,1,1,0,0,1,0,0,1,1],[0,0,1,1,0,0,1,1,1,0,1,1,0,1,0,0,0,1,1,0,0,0,0,1,1,0,1,1,0,0,1,0,0,1,1,0,0,0,1,0],[0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,1,1,0,1,1,0,1,0,0,0,1,0,0,0,1,0,1,1,1,1,1,0,1,1],[0,1,1,1,1,0,0,0,0,0,1,1,1,1,0,1,1,1,0,0,0,0,1,1,1,0,0,0,1,1,0,1,1,0,1,0,1,0,1,1],[1,0,0,0,1,1,1,0,0,0,0,1,1,0,1,1,1,1,1,1,0,0,1,1,1,1,0,0,0,0,1,0,0,0,0,0,1,1,0,1],[1,1,1,0,0,0,1,1,1,0,1,1,1,1,1,1,0,0,1,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1,1,1,0,1,0,1],[1,0,1,0,1,0,1,1,1,0,1,0,0,0,1,0,0,0,0,1,1,1,0,0,1,1,0,1,1,1,0,1,0,1,0,1,0,1,0,1],[0,1,1,0,0,0,1,1,0,0,1,0,1,1,1,0,0,1,0,0,1,1,0,1,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,1],[1,0,1,0,0,1,0,1,0,1,1,1,1,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,1,1,1,1,0,0,1,0,0,0,1,1],[0,1,0,1,0,0,0,1,0,0,1,1,0,0,1,1,0,0,0,1,0,1,1,1,0,1,1,1,0,0,1,1,1,0,0,0,1,0,0,0],[0,0,1,0,1,1,1,1,0,0,0,0,0,1,0,1,1,0,1,1,1,1,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,1,0,1],[0,0,1,1,0,1,1,0,1,0,0,0,1,1,0,0,1,1,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,1,0,1,1,0,0,0],[1,1,1,1,0,0,1,0,1,0,1,1,0,1,1,0,0,0,0,1,1,1,1,1,0,1,0,1,0,0,0,0,0,1,0,1,1,1,1,1],[0,0,0,0,1,1,0,0,0,1,0,1,1,1,1,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,0,1,1,1,0,1,0,0,1,0]], 617));
// prettier-ignore
console.log(shortestPath([[0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,1,0,1,1,1,1,0,1,0,1,1,1,1,1,0,1,1,0,0,1,1],[1,0,0,1,0,1,0,0,0,0,0,1,0,1,1,1,1,0,1,0,0,0,1,0,0,1,1,0,0,1,0,1,0,1,1,0,1],[0,0,0,0,1,0,1,1,1,0,0,1,0,0,1,1,0,0,0,0,1,1,1,1,0,1,0,0,0,1,1,1,0,1,0,0,1],[1,1,0,1,1,0,1,0,0,1,1,0,1,0,0,0,0,1,1,0,0,1,1,1,0,0,0,1,1,0,0,0,1,1,0,0,1],[1,1,1,0,0,0,1,1,1,1,0,1,0,1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1,0,0,0,1,0,1,0],[0,0,0,0,1,0,1,1,1,0,1,1,0,1,1,0,1,0,1,0,0,1,1,0,1,1,1,1,0,0,1,1,1,0,1,0,1],[1,0,0,0,1,0,0,1,0,1,0,1,1,1,0,1,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,1,1,1,1],[1,1,1,1,1,1,1,1,0,0,0,0,1,1,0,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,0,1,1,0,0,0],[0,1,1,1,1,0,0,0,1,1,1,1,0,1,1,1,1,1,0,1,0,1,0,0,0,0,0,1,1,0,1,0,0,1,1,1,1],[0,1,1,1,0,1,0,0,0,0,1,0,1,1,0,1,0,1,1,0,1,0,1,0,1,0,0,0,1,1,1,0,0,1,1,1,1],[0,1,0,0,1,0,0,0,1,0,0,1,1,1,0,0,0,1,1,1,0,1,0,1,1,0,1,0,1,1,1,0,1,1,1,0,0],[1,1,0,0,0,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,1,0,0,0,0,0,1,0,1,1,1,1,0,0,0,1,0],[1,0,0,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,0,1,1,0,0,0,0,0,0,1,1,0,1],[0,0,1,1,1,0,0,1,1,0,1,1,0,1,0,1,1,0,1,1,1,1,1,1,0,1,1,0,1,0,1,1,1,0,0,0,0],[1,1,1,0,0,0,0,1,1,0,0,1,0,1,0,0,0,1,1,1,0,0,1,0,1,1,1,1,1,1,1,0,0,1,1,0,1],[0,1,0,0,1,0,0,0,1,0,0,1,0,1,0,0,1,1,1,1,1,0,1,0,0,0,1,1,0,0,1,0,1,1,1,1,0],[0,1,1,1,1,1,0,0,0,1,0,1,1,0,1,0,0,1,0,0,1,1,1,1,1,1,1,1,1,0,0,1,1,0,0,0,0],[0,0,1,0,0,1,0,0,1,1,1,0,0,0,0,0,1,1,0,1,0,1,1,1,0,1,0,0,1,0,1,0,0,0,1,1,1],[1,0,1,0,1,0,1,1,0,0,0,1,0,0,0,1,1,1,0,1,1,0,1,1,1,0,0,1,1,1,0,0,0,0,0,1,1],[0,0,0,1,0,0,1,0,1,0,1,0,1,1,1,0,1,0,1,0,1,0,0,0,0,1,1,0,0,0,0,0,1,1,1,0,1],[1,0,0,0,0,0,0,1,1,1,1,0,0,0,1,1,1,0,0,0,0,0,1,1,1,1,0,1,0,0,1,1,1,1,0,1,1],[0,1,0,0,0,1,1,1,0,0,1,0,1,0,0,0,1,0,1,1,0,0,1,1,0,0,1,0,0,0,1,1,1,1,1,0,0],[0,1,1,1,0,1,0,0,0,0,1,1,1,0,0,1,1,0,0,1,1,1,1,1,0,1,1,0,1,1,0,1,0,1,0,1,0],[0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,1,1,0,0,0,1,1,0,0,1,1,1,1,0,1,1,1,0,0,1,0,0],[1,1,0,1,0,0,0,0,0,1,0,1,1,1,1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0,0,0,0,1,1,1,0],[1,0,0,1,1,1,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,0,1,0,1,1,1,1,1,0,0,0,0,1,0,0],[1,1,0,0,0,0,1,0,0,1,0,0,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,0,1,1,1,1,0,0],[1,0,1,0,1,0,1,1,0,1,0,0,1,0,0,0,1,1,1,1,0,1,0,0,0,1,0,0,1,1,1,0,1,1,1,1,1],[0,0,0,0,0,1,1,1,0,1,0,1,0,0,1,0,1,0,0,0,1,1,0,0,0,1,0,1,0,0,1,0,0,0,1,1,1],[0,1,0,1,0,0,0,0,0,0,1,0,1,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,1,0,1,0],[0,0,1,0,0,1,1,0,0,1,0,1,0,0,1,1,1,1,0,1,0,0,1,1,1,0,1,1,1,1,0,1,0,1,1,0,1],[1,0,0,0,0,0,0,1,0,1,0,1,1,1,0,1,1,0,0,1,0,1,1,0,0,0,0,0,1,1,0,1,1,1,1,0,1],[0,1,1,1,0,1,0,1,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,0,1,0,1,1,0,1,1,0,0,1,1,1,0]],183));