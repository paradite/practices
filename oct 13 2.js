/**
 * @param {number[][]} queens
 * @param {number[]} king
 * @return {number[][]}
 */
var queensAttacktheKing = function(queens, king) {
  const iterate = (x, y, dx, dy) => {
    x = x + dx;
    y = y + dy;
    if (x < 0 || x > 7 || y < 0 || y > 7) {
      return false;
    } else {
      if (map[x + '-' + y]) {
        return [x, y];
      } else {
        return iterate(x, y, dx, dy);
      }
    }
  };
  let map = {};
  let ans = [];
  for (let i = 0; i < queens.length; i++) {
    const [x, y] = queens[i];
    map[x + '-' + y] = true;
  }
  const directions = [[-1, -1], [-1, 0], [0, -1], [-1, 1], [1, -1], [0, 1], [1, 0], [1, 1]];
  for (let i = 0; i < directions.length; i++) {
    const d = directions[i];
    const result = iterate(king[0], king[1], d[0], d[1]);
    if (result) {
      ans.push(result);
    }
  }
  // console.log(map);
  return ans;
};

console.log(queensAttacktheKing([[0, 1], [1, 0], [4, 0], [0, 4], [3, 3], [2, 4]], [0, 0]));
console.log(queensAttacktheKing([[0, 0], [1, 1], [2, 2], [3, 4], [3, 5], [4, 4], [4, 5]], [3, 3]));
console.log(queensAttacktheKing([[5, 6], [7, 7], [2, 1], [0, 7], [1, 6], [5, 1], [3, 7], [0, 3], [4, 0], [1, 2], [6, 3], [5, 0], [0, 4], [2, 2], [1, 1], [6, 4], [5, 4], [0, 0], [2, 6], [4, 5], [5, 2], [1, 4], [7, 5], [2, 3], [0, 5], [4, 2], [1, 0], [2, 7], [0, 1], [4, 6], [6, 1], [0, 6], [4, 3], [1, 7]], [3, 4]));
