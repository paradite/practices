/**
 * @param {number[]} piles
 * @return {number}
 */
var maxCoins = function (piles) {
  piles.sort((a, b) => a - b).reverse();
  piles = piles.slice(0, (piles.length / 3) * 2);
  console.log('maxCoins -> piles', piles);
  let ans = 0;
  for (let i = 1; i < piles.length; i += 2) {
    const element = piles[i];
    ans += element;
  }
  return ans;
};

console.log(maxCoins([2, 4, 1, 2, 7, 8]));
