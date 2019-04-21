// https://leetcode.com/contest/weekly-contest-133/problems/two-city-scheduling/

/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function(costs) {
  let costDiff = [];
  for (var i = 0; i < costs.length; i++) {
    if (costs[i][0] > costs[i][1]) {
      costDiff.push([costs[i][0] - costs[i][1], 1, costs[i]]);
    } else {
      costDiff.push([costs[i][1] - costs[i][0], 0, costs[i]]);
    }
  }
  const compare = (a, b) => {
    return b[0] - a[0];
  };
  costDiff.sort(compare);
  // console.log(costDiff);
  let total = 0;
  let count = [0, 0];
  for (var i = 0; i < costDiff.length; i++) {
    // console.log(costDiff[i]);
    // console.log(count);
    if (count[costDiff[i][1]] < costs.length / 2) {
      total += costDiff[i][2][costDiff[i][1]];
      count[costDiff[i][1]]++;
    } else {
      // console.log("full");
      total += costDiff[i][2][1 - costDiff[i][1]];
    }
  }
  return total;
};

// console.log(twoCitySchedCost([[10, 20], [30, 200], [400, 50], [30, 20]]));
console.log(twoCitySchedCost([[0, 500], [0, 200], [0, 50], [0, 500]]));
