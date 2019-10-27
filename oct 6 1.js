/**
 * @param {number[]} chips
 * @return {number}
 */
var minCostToMoveChips = function(chips) {
  let costOdd = 0;
  let costEven = 0;
  for (let i = 0; i < chips.length; i++) {
    const element = chips[i];
    if (element % 2 === 0) {
      costOdd++;
    } else {
      costEven++;
    }
  }
  return Math.min(costEven, costOdd);
};

console.log(minCostToMoveChips([1, 2, 3]));
console.log(minCostToMoveChips([2, 2, 2, 3, 3, 4, 5]));
