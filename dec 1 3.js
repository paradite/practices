/**
 * @param {number[][]} matrix
 * @return {number}
 */
var countSquares = function(matrix) {
  let ans = 0;
  let maxlength = Math.min(matrix.length, matrix[0].length);
  let dp = [];
  let dpSides = [];
  for (let i = 0; i < matrix.length; i++) {
    dp.push([]);
    dpSides.push([]);
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      const cell = matrix[i][j];
      dp[i][j] = cell;
      dpSides[i][j] = 0;
      if (cell === 1) {
        ans++;
      }
    }
  }
  for (let k = 2; k <= maxlength; k++) {
    // console.log('TCL: k', k);
    let requiredSum = k * k;
    let newdp = [];
    let newdpSides = [];
    for (let i = 0; i < matrix.length; i++) {
      newdp.push([]);
      newdpSides.push([]);
    }
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[0].length; j++) {
        let hasBottom = i + k - 1 < matrix.length;
        let hasRight = j + k - 1 < matrix[0].length;
        let sides = 0;
        if (i + 1 < matrix.length && j + 1 < matrix[0].length) {
          sides = dpSides[i + 1][j + 1];
        }
        if (hasBottom) {
          sides = sides + matrix[i + k - 1][j];
        }
        if (hasRight) {
          sides = sides + matrix[i][j + k - 1];
        }
        newdpSides[i][j] = sides;
        let rightDown = hasBottom && hasRight ? matrix[i + k - 1][j + k - 1] : 0;
        let newSquareSum = dp[i][j] + sides + rightDown;
        newdp[i][j] = newSquareSum;
        if (newSquareSum === requiredSum) {
          // console.log(k, i, j, dp[i][j], dpSides[i][j], sides, rightDown);
          ans++;
        }
      }
    }
    dp = newdp;
    dpSides = newdpSides;
    // console.log('TCL: dp', dp);
  }
  return ans;
};

console.log(countSquares([[0, 1, 1, 1], [1, 1, 1, 1], [0, 1, 1, 1]]));
console.log(countSquares([[1, 0, 1], [1, 1, 0], [1, 1, 0]]));
console.log(countSquares([[1, 1, 0, 0, 1], [1, 0, 1, 1, 1], [1, 1, 1, 1, 1], [1, 0, 1, 0, 1], [0, 0, 1, 0, 1]]));
console.log(countSquares([[0, 1, 1, 1], [1, 1, 1, 1], [0, 1, 1, 1]]));
// [1,1,0,0,1],
// [1,0,1,1,1]
// [1,1,1,1,1]
// [1,0,1,0,1]
// [0,0,1,0,1]
// 19

// [0,1,1,1]
// [1,1,1,1]
// [0,1,1,1]]
// 15
