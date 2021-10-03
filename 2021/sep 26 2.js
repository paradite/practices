/**
 * @param {number[][]} grid
 * @return {number}
 */
var gridGame = function (grid) {
  const cum1 = [grid[0][0]];
  const cum2 = [grid[1][0]];
  for (let i = 1; i < grid[0].length; i++) {
    const element1 = grid[0][i];
    const element2 = grid[1][i];
    cum1.push(cum1[i - 1] + element1);
    cum2.push(cum2[i - 1] + element2);
  }
  let min = Infinity;
  const l = grid[0].length;
  for (let i = 0; i < grid[0].length; i++) {
    const first = cum1[l - 1] - cum1[i];
    const second = i === 0 ? 0 : cum2[i - 1];
    const max = Math.max(first, second);
    min = Math.min(min, max);
  }
  return min;
};

// prettier-ignore
console.log(gridGame([[2,5,4],[1,5,1]]));
// prettier-ignore
console.log(gridGame([[3,3,1],[8,5,2]]));
// prettier-ignore
console.log(gridGame([[1,3,1,15],[1,3,3,1]]));
console.log(
  gridGame([
    [20, 3, 20, 17, 2, 12, 15, 17, 4, 15],
    [20, 10, 13, 14, 15, 5, 2, 3, 14, 3],
  ])
); //63
