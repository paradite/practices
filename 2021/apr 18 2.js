/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function (costs, coins) {
  let ans = 0;
  costs.sort((a, b) => a - b);
  for (let i = 0; i < costs.length; i++) {
    const cost = costs[i];
    if (coins >= cost) {
      ans++;
      coins -= cost;
    }
  }
  return ans;
};
