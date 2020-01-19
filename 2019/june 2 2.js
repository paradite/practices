// https://leetcode.com/contest/weekly-contest-139/problems/flip-columns-for-maximum-number-of-equal-rows/

/**
 * @param {number[][]} matrix
 * @return {number}
 */
var maxEqualRowsAfterFlips = function(matrix) {
  let ans = 0;
  let flipResultMap = {};
  for (var i = 0; i < matrix.length; i++) {
    let flip0Action = '';
    let flip1Action = '';
    let row = matrix[i];
    for (var j = 0; j < row.length; j++) {
      flip0Action += row[j] === 1 ? '1' : '0';
      flip1Action += row[j] === 1 ? '0' : '1';
    }
    // console.log(flip0Action)
    // console.log(flip1Action)
    // console.log(flipResultMap)
    if (flipResultMap[flip0Action]) {
      flipResultMap[flip0Action] = flipResultMap[flip0Action] + 1;
      if (flipResultMap[flip0Action] > ans) {
        ans = flipResultMap[flip0Action];
      }
    } else {
      flipResultMap[flip0Action] = 1;
      if (ans === 0) {
        ans = 1;
      }
    }
    if (flipResultMap[flip1Action]) {
      flipResultMap[flip1Action] = flipResultMap[flip1Action] + 1;
      if (flipResultMap[flip1Action] > ans) {
        ans = flipResultMap[flip1Action];
      }
    } else {
      flipResultMap[flip1Action] = 1;
      if (ans === 0) {
        ans = 1;
      }
    }
  }
  // console.log(flipResultMap)
  return ans;
};

// console.log(maxEqualRowsAfterFlips([[0,1],[1,1]]));
// console.log(maxEqualRowsAfterFlips([[0,1],[1,0]]));
// console.log(maxEqualRowsAfterFlips([[0,0,0],[0,0,1],[1,1,0]]));
console.log(maxEqualRowsAfterFlips([[0,1],[0,1]]));