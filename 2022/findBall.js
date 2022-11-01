/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findBall = function (grid) {
  const max = grid[0].length;
  const ans = new Array(max).fill(-1);

  for (let i = 0; i < ans.length; i++) {
    // console.log('TCL ~ i', i);
    let pos = i;
    for (let j = 0; j < grid.length; j++) {
      // console.log('TCL ~ j pos', j, pos);
      // console.log('TCL ~ grid[j][pos]', grid[j][pos]);
      // if (j === grid.length - 1) {
      // }
      if (grid[j][pos] === 1 && grid[j][pos + 1] === -1) {
        pos = -1;
        break;
      }
      if (grid[j][pos] === -1 && grid[j][pos - 1] === 1) {
        pos = -1;
        break;
      }
      pos += grid[j][pos];
      if (pos < 0 || pos >= max) {
        pos = -1;
        break;
      }
    }
    ans[i] = pos;
  }
  return ans;
};

// prettier-ignore
console.log(findBall([[1,1,1,-1,-1],[1,1,1,-1,-1],[-1,-1,-1,1,1],[1,1,1,1,-1],[-1,-1,-1,-1,-1]]));
console.log(findBall([[-1]]));
console.log(
  findBall([
    [1, 1],
    [-1, -1],
  ])
);
// prettier-ignore
console.log(findBall([[1,1,1,1,1,1],[-1,-1,-1,-1,-1,-1],[1,1,1,1,1,1],[-1,-1,-1,-1,-1,-1]]));
