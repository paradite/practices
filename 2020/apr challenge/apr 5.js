/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  if (prices.length === 0) return 0;
  // holding max, not holding max
  const dp = [[-prices[0], 0]];
  for (let i = 1; i < prices.length; i++) {
    const holdingMax = Math.max(dp[i - 1][0], dp[i - 1][1] - prices[i]);
    const notHoldingMax = Math.max(dp[i - 1][1], dp[i - 1][0] + prices[i]);
    dp[i] = [holdingMax, notHoldingMax];
  }
  // console.log('maxProfit -> dp', dp);
  return dp[prices.length - 1][1];
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([1, 2, 3, 4, 5]));
console.log(maxProfit([7, 6, 4, 3, 1]));
console.log(maxProfit([]));
