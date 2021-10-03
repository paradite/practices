// prettier-ignore
if (typeof _ === 'undefined') {
  _ = require('lodash');
}
/**
 * @param {number[]} stones
 * @return {boolean}
 */
var stoneGameIX = function (stones) {
  stones = stones.map((s) => s % 3);
  const map = _.countBy(stones);
  map[0] = map[0] ? map[0] : 0;
  map[1] = map[1] ? map[1] : 0;
  map[2] = map[2] ? map[2] : 0;
  let min12 = Math.min(map[1], map[2]);
  if (min12 % 2 !== 0) {
    min12 = Math.max(0, min12 - 1);
  }
  if (min12 <= 3) {
  } else {
    min12 = min12 - 2;
    map[1] = map[1] - min12;
    map[2] = map[2] - min12;
  }
  map[0] = map[0] % 2;

  const dfs = (turn, remain, map) => {
    if (remain % 3 === 0 && turn !== 0) {
      if (turn % 2 === 0) {
        return true;
      } else {
        return false;
      }
    } else {
      remain = remain % 3;
      let results = [];
      if (map[1] > 0) {
        map[1] = map[1] - 1;
        results.push(dfs(turn + 1, remain + 1, map));
        map[1] = map[1] + 1;
      }
      if (map[2] > 0) {
        map[2] = map[2] - 1;
        results.push(dfs(turn + 1, remain + 2, map));
        map[2] = map[2] + 1;
      }
      if (map[0] > 0) {
        map[0] = map[0] - 1;
        results.push(dfs(turn + 1, remain, map));
        map[0] = map[0] + 1;
      }
      if (results.length === 0) {
        // no more moves, bob win
        return false;
      }
      if (turn % 2 === 0) {
        // alice wants to win => true;
        for (let i = 0; i < results.length; i++) {
          const element = results[i];
          if (element === true) return true;
        }
        return false;
      } else {
        // bos wants to alice to lose => false;
        for (let i = 0; i < results.length; i++) {
          const element = results[i];
          if (element === false) return false;
        }
        return true;
      }
    }
  };
  return dfs(0, 0, map);
};

console.log(stoneGameIX([2, 1])); // true
console.log(stoneGameIX([2])); // false
console.log(stoneGameIX([5, 1, 2, 4, 3])); // false
console.log(stoneGameIX([19, 2, 17, 20, 7, 17])); // true
console.log(
  stoneGameIX([
    41, 59, 38, 24, 61, 16, 2, 76, 66, 40, 87, 4, 41, 42, 100, 50, 93, 48, 56,
    80, 2, 22, 77, 49, 37, 8, 58, 82, 79, 54, 29, 87, 67, 71, 65, 50, 46, 11,
    52, 7, 9, 19, 54, 38, 98, 25, 37, 38, 44, 73, 98, 42, 54, 96, 73, 59, 6, 17,
    15, 60, 31, 66, 59, 74, 28, 22, 81, 97,
  ])
);
