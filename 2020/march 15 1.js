/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers = function(matrix) {
  const ans = [];
  let p = {};
  let cMax = {};
  for (let i = 0; i < matrix.length; i++) {
    const row = matrix[i];
    const smallest = Math.min(...row);
    for (let j = 0; j < row.length; j++) {
      const cell = row[j];
      if (cell === smallest) {
        p[j] = p[j] ? [...p[j], cell] : [cell];
      }
      if (cMax[j]) {
        if (cell > cMax[j]) {
          cMax[j] = cell;
        }
      } else {
        cMax[j] = cell;
      }
    }
  }
  for (let [key, value] of Object.entries(p)) {
    // console.log('TCL: value', value);
    if (value.length) {
      const max = Math.max(...value);
      if (max === cMax[key]) {
        ans.push(max);
      }
    }
  }
  return ans;
};

console.log(
  luckyNumbers([
    [3, 7, 8],
    [9, 11, 13],
    [15, 16, 17]
  ])
);

console.log(
  luckyNumbers([
    [1, 10, 4, 2],
    [9, 3, 8, 7],
    [15, 16, 17, 12]
  ])
);

console.log(
  luckyNumbers([
    [7, 8],
    [1, 2]
  ])
);

console.log(
  luckyNumbers([
    [36376, 85652, 21002, 4510],
    [68246, 64237, 42962, 9974],
    [32768, 97721, 47338, 5841],
    [55103, 18179, 79062, 46542]
  ])
);
