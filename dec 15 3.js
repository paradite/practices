/**
 * @param {number[][]} mat
 * @param {number} threshold
 * @return {number}
 */
var maxSideLength = function(mat, threshold) {
  let ans = 0;
  let maxlength = Math.min(mat.length, mat[0].length);
  let dp = [];
  let dpSides = [];
  for (let i = 0; i < mat.length; i++) {
    dp.push([]);
    dpSides.push([]);
  }
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[0].length; j++) {
      const cell = mat[i][j];
      dp[i][j] = cell;
      dpSides[i][j] = 0;
      if (cell <= threshold) {
        ans = 1;
      }
    }
  }
  for (let k = 2; k <= maxlength; k++) {
    // console.log('TCL: k', k);
    let requiredSum = k * k;
    let newdp = [];
    let newdpSides = [];
    for (let i = 0; i < mat.length; i++) {
      newdp.push([]);
      newdpSides.push([]);
    }
    for (let i = 0; i < mat.length; i++) {
      for (let j = 0; j < mat[0].length; j++) {
        let hasBottom = i + k - 1 < mat.length;
        let hasRight = j + k - 1 < mat[0].length;
        let sides = 0;
        if (i + 1 < mat.length && j + 1 < mat[0].length) {
          sides = dpSides[i + 1][j + 1];
          // console.log('TCL: dpSides', dpSides);
        }
        if (hasBottom) {
          sides = sides + mat[i + k - 1][j];
        }
        if (hasRight) {
          sides = sides + mat[i][j + k - 1];
        }
        newdpSides[i][j] = sides;
        let rightDown = hasBottom && hasRight ? mat[i + k - 1][j + k - 1] : 0;
        let newSquareSum = dp[i][j] + sides + rightDown;
        newdp[i][j] = newSquareSum;
        if (newSquareSum <= threshold && hasRight && hasBottom) {
          ans = k;
          // if (k === 3) {
          //   console.log('newdp');
          //   console.log(newdp);
          //   console.log(i, j);
          // }
          // console.log(k, i, j, dp[i][j], dpSides[i][j], sides, rightDown);
          // ans++;
        }
      }
    }
    dp = newdp;
    dpSides = newdpSides;
    // console.log('TCL: newdpSides', newdpSides);
    // console.log('TCL: dp', dp);
  }
  return ans;
};

console.log(maxSideLength([[1, 1, 3, 2, 4, 3, 2], [1, 1, 3, 2, 4, 3, 2], [1, 1, 3, 2, 4, 3, 2]], 4));
console.log(maxSideLength([[2, 2, 2, 2, 2], [2, 2, 2, 2, 2], [2, 2, 2, 2, 2], [2, 2, 2, 2, 2], [2, 2, 2, 2, 2]], 1));
console.log(maxSideLength([[1, 1, 1, 1], [1, 0, 0, 0], [1, 0, 0, 0], [1, 0, 0, 0]], 6));
console.log(maxSideLength([[18, 70], [61, 1], [25, 85], [14, 40], [11, 96], [97, 96], [63, 45]], 40184));
