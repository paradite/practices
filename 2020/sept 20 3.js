/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxProductPath = function (grid) {
  const rc = grid.length;
  const cc = grid[0].length;
  let dpMin = [];
  let dpMax = [];
  for (let i = 0; i < rc; i++) {
    let max = [];
    let min = [];
    dpMin.push(min);
    dpMax.push(max);
  }
  dpMax[0][0] = grid[0][0];
  dpMin[0][0] = grid[0][0];
  for (let i = 1; i < rc; i++) {
    dpMax[i][0] = grid[i][0] * dpMax[i - 1][0];
    dpMin[i][0] = grid[i][0] * dpMax[i - 1][0];
  }
  for (let i = 1; i < cc; i++) {
    dpMax[0][i] = grid[0][i] * dpMax[0][i - 1];
    dpMin[0][i] = grid[0][i] * dpMax[0][i - 1];
  }

  const calc = (r, c) => {
    if (r === 0 && c === 0) return;
    const n = grid[r][c];
    if (n === 0 && dpMax[r][c] == undefined) {
      dpMax[r][c] = 0;
    }
    if (n < 0) {
      dpMin[r][c] = Math.min(dpMax[r - 1][c] * n, dpMax[r][c - 1] * n);
      dpMax[r][c] = Math.max(dpMin[r - 1][c] * n, dpMin[r][c - 1] * n);
    } else {
      dpMin[r][c] = Math.min(dpMin[r - 1][c] * n, dpMin[r][c - 1] * n);
      dpMax[r][c] = Math.max(dpMax[r - 1][c] * n, dpMax[r][c - 1] * n);
    }
  };
  for (let i = 1; i < rc; i++) {
    for (let j = 1; j < cc; j++) {
      calc(i, j);
    }
  }

  if (dpMax[rc - 1][cc - 1] < 0) {
    return -1;
  }
  if (dpMax[rc - 1][cc - 1] === -0) {
    return 0;
  }
  const mod = Math.pow(10, 9) + 7;
  return dpMax[rc - 1][cc - 1] % mod;
};

console.log(
  maxProductPath([
    [1, 3],
    [0, -4],
  ])
);

console.log(
  maxProductPath([
    [-1, -2, -3],
    [-2, -3, -3],
    [-3, -3, -2],
  ])
);

console.log(maxProductPath([[3], [-1], [3]]));

console.log(
  maxProductPath([
    [-1, 1, -2, -1],
    [3, -3, -2, 0],
  ])
);
