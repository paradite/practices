/**
 * @param {number[]} satisfaction
 * @return {number}
 */
var maxSatisfaction = function(satisfaction) {
  satisfaction.sort((a, b) => a - b);
  let max = 0;
  for (let i = 0; i < satisfaction.length; i++) {
    let sum = 0;
    for (let j = i, k = 1; j < satisfaction.length; j++, k++) {
      const s = satisfaction[j];
      sum += s * k;
    }
    if (sum > max) {
      max = sum;
    } else if (max !== 0) {
      break;
    }
  }
  return max;
};

console.log(maxSatisfaction([-1, -8, 0, 5, -9]));
console.log(maxSatisfaction([4, 3, 2]));
console.log(maxSatisfaction([-1, -4, -5]));
console.log(maxSatisfaction([-2, 5, -1, 0, 3, -3]));
