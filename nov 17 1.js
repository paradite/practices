/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function(grid, k) {
  const rows = grid.length;
  const cols = grid[0].length;
  const total = rows * cols;
  const arr = [];
  k = k % total;
  for (let i = 0; i < grid.length; i++) {
    const row = grid[i];
    for (let j = 0; j < row.length; j++) {
      const cell = row[j];
      arr.push(cell);
    }
  }
  for (let i = 0; i < k; i++) {
    const n = arr.pop();
    arr.unshift(n);
  }
  // console.log(arr);
  const newGrid = [];
  for (let i = 0; i < rows; i++) {
    const newRow = [];
    for (let j = 0; j < cols; j++) {
      newRow.push(arr[i * cols + j]);
    }
    newGrid.push(newRow);
  }
  return newGrid;
};

console.log(shiftGrid([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 1));
console.log(shiftGrid([[3, 8, 1, 9], [19, 7, 2, 5], [4, 6, 11, 10], [12, 0, 21, 13]], 4));
console.log(shiftGrid([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 4));
console.log(shiftGrid([[1], [2], [3], [4], [7], [6], [5]], 23));
