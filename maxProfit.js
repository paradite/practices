/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let max = 0;
  if (prices.length === 0) {
    return 0;
  }
  let buy = prices[0];
  for (let i = 1; i < prices.length; i++) {
    const price = prices[i];
    const profit = price - buy;
    if (profit > max) {
      max = profit;
    }
    if (price < buy) {
      buy = price;
    }
  }
  return max;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));
