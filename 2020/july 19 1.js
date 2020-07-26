/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function (numBottles, numExchange) {
  let ans = 0;
  ans += numBottles;
  while (numBottles >= numExchange) {
    const left = numBottles % numExchange;
    numBottles = Math.floor(numBottles / numExchange);
    ans += numBottles;
    numBottles += left;
  }
  return ans;
};
