const _ = require('lodash');

/**
 * @param {number[]} stones
 * @return {number}
 */
var stoneGameVII = function (stones) {
  let dpA = {};
  let dpB = {};
  for (let i = 0; i < stones.length; i++) {
    dpA[i] = {};
    dpB[i] = {};
  }
  let sum = _.sum(stones);
  const dfs = (round, left, right, alice, bob, sum) => {
    if (left === right - 1) {
      let bigger = _.max([stones[left], stones[right]]);
      if (round % 2 === 0) {
        return [bigger, 0];
      } else {
        return [0, bigger];
      }
    }
    if (left === right) {
      return [0, 0];
    }
    if (round % 2 === 0) {
      if (dpA[left][right]) return dpA[left][right];
      const resultL = dfs(
        round + 1,
        left + 1,
        right,
        alice,
        bob,
        sum - stones[left]
      );
      const resultR = dfs(
        round + 1,
        left,
        right - 1,
        alice,
        bob,
        sum - stones[right]
      );
      if (resultL[0] - resultL[1] > 0 && resultR[0] - resultR[1] < 0) {
        return [resultL[0] + sum - stones[left], resultL[1]];
      }
      if (resultL[0] - resultL[1] < 0 && resultR[0] - resultR[1] > 0) {
        return [resultR[0] + sum - stones[right], resultR[1]];
      }
      if (
        Math.abs(resultL[0] + sum - stones[left] - resultL[1]) >
        Math.abs(resultR[0] + sum - stones[right] - resultR[1])
      ) {
        // console.log('dfs -> round', round);
        // console.log('dfs -> resultL', resultL);
        dpA[left][right] = [resultL[0] + sum - stones[left], resultL[1]];
        return [resultL[0] + sum - stones[left], resultL[1]];
      } else {
        // console.log('dfs -> round', round);
        // console.log('dfs -> resultR', resultR);
        dpA[left][right] = [resultR[0] + sum - stones[right], resultR[1]];
        return [resultR[0] + sum - stones[right], resultR[1]];
      }
    } else {
      if (dpB[left][right]) return dpB[left][right];
      const resultL = dfs(
        round + 1,
        left + 1,
        right,
        alice,
        bob,
        sum - stones[left]
      );
      const resultR = dfs(
        round + 1,
        left,
        right - 1,
        alice,
        bob,
        sum - stones[right]
      );
      if (resultL[0] - resultL[1] > 0 && resultR[0] - resultR[1] < 0) {
        return [resultR[0] + sum - stones[right], resultR[1]];
      }
      if (resultL[0] - resultL[1] < 0 && resultR[0] - resultR[1] > 0) {
        return [resultL[0] + sum - stones[left], resultL[1]];
      }
      if (
        Math.abs(resultL[0] - (resultL[1] + sum - stones[left])) >
        Math.abs(resultR[0] - (resultR[1] + sum - stones[right]))
      ) {
        // console.log('dfs -> round', round);
        // console.log('dfs -> resultR', resultR);
        dpB[left][right] = [resultR[0], resultR[1] + sum - stones[right]];
        return [resultR[0], resultR[1] + sum - stones[right]];
      } else {
        // console.log('dfs -> round', round);
        // console.log('dfs -> resultL', resultL);
        dpB[left][right] = [resultL[0], resultL[1] + sum - stones[left]];
        return [resultL[0], resultL[1] + sum - stones[left]];
      }
    }
  };
  const result = dfs(0, 0, stones.length - 1, 0, 0, sum);
  // console.log('dfs -> dpA', dpA);
  // console.log('dfs -> dpB', dpB);
  return Math.abs(result[0] - result[1]);
};

console.log(stoneGameVII([5, 3, 1, 4, 2]));
console.log(stoneGameVII([7, 90, 5, 1, 100, 10, 10, 2]));
// console.log(
//   stoneGameVII([
//     7,
//     90,
//     5,
//     1,
//     100,
//     10,
//     10,
//     2,
//     7,
//     90,
//     5,
//     1,
//     100,
//     10,
//     10,
//     2,
//     7,
//     90,
//     5,
//     1,
//     100,
//     10,
//     10,
//     2,
//     7,
//     90,
//     5,
//     1,
//     100,
//     10,
//     10,
//     2,
//   ])
// );
