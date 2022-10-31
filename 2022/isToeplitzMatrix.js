/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function (matrix) {
  for (let i = 0; i < matrix.length; i++) {
    const row = matrix[i];
    for (let j = 0; j < row.length; j++) {
      const cell = row[j];
      if (matrix[i + 1] && matrix[i + 1][j + 1] >= 0) {
        if (cell !== matrix[i + 1][j + 1]) {
          return false;
        }
      }
    }
  }
  return true;
};

console.log(
  isToeplitzMatrix([
    [36, 86, 7, 94, 71, 59, 10],
    [19, 0, 86, 7, 94, 71, 59],
  ])
);
