/**
 * @param {number[][]} grid
 * @return {number}
 */
var largest1BorderedSquare = function(grid) {
  const y = grid.length;
  const x = grid[0].length;
  const max = y > x ? x : y;

  for (var i = 0; i < max; i++) {
    const size = max - i;
    for (var j = 0; j < y - size + 1; j++) {
      const startY = j;
      for (var k = 0; k < x - size + 1; k++) {
        const startX = k;
        if (checkGrid(startX, startY, size)) {
          return size * size;
        }
      }
    }
  }
  return 0;

  function checkGrid(startX, startY, size) {
    for (var i = 0; i < size; i++) {
      // console.log(startX, startY, size, i);
      if(grid[startY][startX + i] === 0) {
        return false;
      }
      if(grid[startY + i][startX] === 0) {
        return false;
      }
      if(grid[startY + size - 1][startX + i] === 0) {
        return false;
      }
      if(grid[startY + i][startX + size - 1] === 0) {
        return false;
      }
    }
    return true;
  }
};

console.log(largest1BorderedSquare([[1,1,0,0]]));
console.log(largest1BorderedSquare([[1,1],[1,1]]));
console.log(largest1BorderedSquare([[1,1],[1,0]]));
console.log(largest1BorderedSquare([[1,1,1],[1,1,1],[1,1,1]]));
console.log(largest1BorderedSquare([[1,0,1],[1,1,1],[1,1,1]]));
console.log(largest1BorderedSquare([[1,0,1],[1,0,1],[1,0,1]]));
console.log(largest1BorderedSquare([[0]]));
console.log(largest1BorderedSquare([[0,0,0,1]]));
