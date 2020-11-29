const _ = require('lodash');

/**
 * @param {number[]} scores
 * @param {number[]} ages
 * @return {number}
 */
var bestTeamScore = function (scores, ages) {
  let max = 0;
  let ppl = [];
  for (let i = 0; i < scores.length; i++) {
    ppl.push([ages[i], scores[i]]);
  }
  // console.log('bestTeamScore -> ppl', ppl);
  ppl = _.sortBy(ppl, [(o) => o[0]]);
  // console.log('bestTeamScore -> ppl', ppl);
  const map = {};
  const dfs = (j, curSum, curMin, curAge, nextMin) => {
    if (map[`${j}-${curSum}-${curMin}-${curAge}-${nextMin}`]) return;
    map[`${j}-${curSum}-${curMin}-${curAge}-${nextMin}`] = true;
    if (j >= scores.length) return;
    const other = ppl[j];
    // console.log(
    //   'dfs -> curSum, curMin, curAge, nextMin',
    //   curSum,
    //   curMin,
    //   curAge,
    //   nextMin
    // );
    // console.log('dfs -> other', other);
    if (other[1] < curMin) {
      // don't take
      dfs(j + 1, curSum, curMin, curAge, nextMin);
      return;
    }
    if (other[0] === curAge) {
      // same age
      if (other[1] < curMin) {
        // take
        if (other[1] > nextMin) nextMin = other[1];
        curSum += other[1];
        if (curSum > max) max = curSum;
        dfs(j + 1, curSum, curMin, curAge, nextMin);
      } else {
        // don't take
        dfs(j + 1, curSum, curMin, curAge);
        // take
        if (other[1] > nextMin) nextMin = other[1];
        curSum += other[1];
        if (curSum > max) max = curSum;
        dfs(j + 1, curSum, curMin, curAge, nextMin);
      }
    } else {
      // older
      // console.log('dfs -> older');
      curMin = nextMin;
      if (other[1] < curMin) {
        // console.log('dfs -> other[1] < curMin', other[1] < curMin);
        // don't take
        dfs(j + 1, curSum, curMin, curAge, nextMin);
      } else {
        // don't take
        dfs(j + 1, curSum, curMin, curAge, nextMin);
        // take
        curSum += other[1];
        if (curSum > max) max = curSum;
        nextMin = other[1];
        curAge = other[0];
        dfs(j + 1, curSum, curMin, curAge, nextMin);
      }
    }
  };
  // console.log('bestTeamScore -> ppl', ppl);
  for (let i = 0; i < ppl.length; i++) {
    let curSum = ppl[i][1];
    if (curSum > max) max = curSum;
    let curAge = ppl[i][0];
    let curMin = 0;
    let nextMin = ppl[i][1];
    dfs(i + 1, curSum, curMin, curAge, nextMin);
  }
  // console.log('bestTeamScore -> max', max);
  return max;
};

console.log(bestTeamScore([1], [4]));
console.log(bestTeamScore([1, 3, 5, 10, 15], [1, 2, 3, 4, 5]));
console.log(bestTeamScore([4, 5, 6, 5], [2, 1, 2, 1]));
console.log(bestTeamScore([1, 2, 3, 5], [8, 9, 10, 1]));
console.log(
  bestTeamScore(
    [
      319776,
      611683,
      835240,
      602298,
      430007,
      574,
      142444,
      858606,
      734364,
      896074,
    ],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  )
);
