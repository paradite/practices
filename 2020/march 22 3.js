/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var hasValidPath = function(grid) {
  const visited = {};
  const getNext = (row, col, preRow, preCol) => {
    let next = [];
    // hack for last one validation
    if ((row < grid.length && col < grid[0].length) || (row === grid.length - 1 && col === grid[0].length - 1)) {
      const num = grid[row][col];
      if (num === 1) {
        if (preRow === undefined && preCol === undefined) {
          next = [row, col + 1];
        } else {
          if (preRow === row && preCol === col - 1) {
            next = [row, col + 1];
          } else if (preRow === row && preCol === col + 1) {
            next = [row, col - 1];
          } else {
            next = [-1, -1];
          }
        }
      } else if (num === 2) {
        if (preRow === undefined && preCol === undefined) {
          next = [row + 1, col];
        } else {
          if (preRow === row - 1 && preCol === col) {
            next = [row + 1, col];
          } else if (preRow === row + 1 && preCol === col) {
            next = [row - 1, col];
          } else {
            next = [-1, -1];
          }
        }
      } else if (num === 3) {
        if (preRow === undefined && preCol === undefined) {
          next = [row + 1, col];
        } else {
          if (preCol === col - 1 && preRow === row) {
            next = [row + 1, col];
          } else if (preCol === col && preRow === row + 1) {
            next = [row, col - 1];
          } else {
            next = [-1, -1];
          }
        }
      } else if (num === 4) {
        if (preRow === -2 && preCol === -2) {
          // right
          next = [row, col + 1];
        } else if (preRow === undefined && preCol === undefined) {
          // down
          next = [row + 1, col];
        } else {
          if (preCol === col + 1 && row === preRow) {
            next = [row + 1, col];
          } else if (preRow === row + 1 && preCol === col) {
            next = [row, col + 1];
          } else {
            next = [-1, -1];
          }
        }
      } else if (num === 5) {
        if (preRow === undefined && preCol === undefined) {
          next = [-1, -1];
        } else {
          if (preCol === col - 1 && preRow === row) {
            next = [row - 1, col];
          } else if (preRow === row - 1 && preCol === col) {
            next = [row, col - 1];
          } else {
            next = [-1, -1];
          }
        }
      } else if (num === 6) {
        if (preRow === undefined && preCol === undefined) {
          next = [row, col + 1];
        } else {
          if (preCol === col + 1 && row === preRow) {
            next = [row - 1, col];
          } else if (preRow === row - 1 && preCol === col) {
            next = [row, col + 1];
          } else {
            next = [-1, -1];
          }
        }
      }
      return next;
    }
    return [-1, -1];
  };
  let cur = [0, 0];
  let pre = [undefined, undefined];
  while (cur[0] !== -1) {
    let preRow = pre[0];
    let preCol = pre[1];
    pre = cur;
    if (cur[0] === grid.length - 1 && cur[1] === grid[0].length - 1) {
      if (getNext(cur[0], cur[1], preRow, preCol)[0] !== -1 || getNext(cur[0], cur[1], preRow, preCol)[1] !== -1) {
        return true;
      }
      return false;
    }
    cur = getNext(cur[0], cur[1], preRow, preCol);
    if (visited[cur[0] + '-' + cur[1]]) {
      break;
    }
    visited[cur[0] + '-' + cur[1]] = true;
  }
  cur = [0, 0];
  pre = [-2, -2];
  while (cur[0] !== -1) {
    let preRow = pre[0];
    let preCol = pre[1];
    pre = cur;
    if (cur[0] === grid.length - 1 && cur[1] === grid[0].length - 1) {
      if (getNext(cur[0], cur[1], preRow, preCol)[0] !== -1 || getNext(cur[0], cur[1], preRow, preCol)[1] !== -1) {
        return true;
      }
      return false;
    }
    cur = getNext(cur[0], cur[1], preRow, preCol);
    if (visited[cur[0] + '-' + cur[1]]) {
      break;
    }
    visited[cur[0] + '-' + cur[1]] = true;
  }
  return false;
};

console.log(
  hasValidPath([
    [2, 4, 3],
    [6, 5, 2]
  ])
);

console.log(
  hasValidPath([
    [1, 2, 1],
    [1, 2, 1]
  ])
);
console.log(hasValidPath([[1, 1, 2]]));
console.log(hasValidPath([[1, 1, 1, 1, 1, 1, 3]]));
console.log(hasValidPath([[2], [2], [2], [2], [2], [2], [6]]));
console.log(
  hasValidPath([
    [6, 1, 3],
    [4, 1, 5]
  ])
);
