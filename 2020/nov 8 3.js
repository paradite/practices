/**
 * @param {number[]} inventory
 * @param {number} orders
 * @return {number}
 */

var maxProfit = function (inventory, orders) {
  const mod = Math.pow(10, 9) + 7;
  let count = [];
  let countArr = [];
  for (let i = 0; i < inventory.length; i++) {
    const element = inventory[i];
    if (count[element]) {
      count[element]++;
    } else {
      count[element] = 1;
      countArr.push(element);
    }
  }
  countArr.sort((a, b) => a - b);
  let nextMap = {};
  for (let i = countArr.length - 1; i > 0; i--) {
    const element = countArr[i];
    nextMap[element] = countArr[i - 1];
  }
  let profit = 0;
  for (let i = count.length - 1; i >= 1; i = nextMap[i]) {
    console.log('maxProfit -> i', i);
    const element = count[i];
    if (!orders) break;
    if (!element) {
      if (isNaN(i)) i = 0;
    }
    let next = nextMap[i];
    if (isNaN(next)) next = 0;
    let diff = (i - next) * element;
    console.log('maxProfit -> diff', diff);
    if (diff <= orders) {
      orders = orders - diff;
      if (!count[next]) count[next] = 0;
      count[next] = count[next] + element;
      profit = profit + (((i + next + 1) * (i - next)) / 2) * element;
      profit = profit % mod;
      if (orders === 0) return profit % mod;
    } else {
      let singleDiff = element;
      console.log('maxProfit -> singleDiff', singleDiff);
      let curPrice = i;
      while (singleDiff <= orders) {
        console.log('maxProfit -> orders', orders);
        console.log('maxProfit -> singleDiff', singleDiff);
        orders = orders - singleDiff;
        profit = profit + element * curPrice;
        profit = profit % mod;
        curPrice--;
      }
      profit = profit + orders * curPrice;
      profit = profit % mod;
      return profit % mod;
    }
  }
  return profit % mod;
};

console.log(maxProfit([2, 5], 4));
console.log(maxProfit([3, 5], 6));
console.log(maxProfit([2, 8, 4, 10, 6], 20));
console.log(maxProfit([1000000000], 1000000000));
console.log(maxProfit([497978859, 167261111, 483575207, 591815159], 836556809));
