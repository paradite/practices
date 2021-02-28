/**
 * @param {number[]} baseCosts
 * @param {number[]} toppingCosts
 * @param {number} target
 * @return {number}
 */
var closestCost = function (baseCosts, toppingCosts, target) {
  let ans = Infinity;
  let toppingPerm = [0];
  for (let i = 0; i < toppingCosts.length; i++) {
    const cost1 = toppingCosts[i];
    let addOne = toppingPerm.map((v) => v + cost1);
    let addTwo = toppingPerm.map((v) => v + cost1 * 2);
    toppingPerm = [...toppingPerm, ...addOne, ...addTwo];
  }
  for (let i = 0; i < baseCosts.length; i++) {
    const base = baseCosts[i];
    for (let j = 0; j < toppingPerm.length; j++) {
      const topping = toppingPerm[j];
      const total = base + topping;
      if (Math.abs(target - total) < Math.abs(target - ans)) {
        ans = total;
      } else if (
        Math.abs(target - total) === Math.abs(target - ans) &&
        total < ans
      ) {
        ans = total;
      }
    }
  }
  return ans;
};
