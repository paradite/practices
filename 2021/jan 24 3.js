/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthLargestValue = function (matrix, k) {
  let xor = [];
  let arr = [];
  for (let i = 0; i < matrix.length; i++) {
    const row = matrix[i];
    xor[i] = [];
    for (let j = 0; j < row.length; j++) {
      if (i === 0 && j === 0) {
        xor[i][j] = matrix[i][j];
      } else if (i === 0 && j !== 0) {
        xor[i][j] = xor[i][j - 1] ^ matrix[i][j];
      } else if (j === 0 && i !== 0) {
        xor[i][j] = matrix[i][j];
      } else {
        xor[i][j] = xor[i][j - 1] ^ matrix[i][j];
      }
      let final = xor[i][j];
      for (let k = 0; k < i; k++) {
        final = final ^ xor[k][j];
      }
      arr.push(final);
    }
    // console.log('TCL ~ xor', xor);
  }
  arr.sort((a, b) => a - b).reverse();
  // console.log('TCL ~ arr', arr);
  return arr[k - 1];
};
// 7540 1 14
// prettier-ignore
console.log(kthLargestValue([[5,2],[1,6]],1));
// prettier-ignore
console.log(kthLargestValue([[5,2],[1,6]],2));
// prettier-ignore
console.log(kthLargestValue([[5,2],[1,6]],3));
// prettier-ignore
console.log(kthLargestValue([[5,2],[1,6]],4));
// prettier-ignore
console.log(kthLargestValue([[10,9,5],[2,0,4],[1,0,9],[3,4,8]], 10));
// prettier-ignore
console.log(kthLargestValue([[8,10,5,8,5,7,6,0,1,4,10,6,4,3,6,8,7,9,4,2]],2));
