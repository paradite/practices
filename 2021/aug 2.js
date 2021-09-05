// prettier-ignore
if (typeof _ === 'undefined') {
  _ = require('lodash');
}

/**
 * @param {number[]} milestones
 * @return {number}
 */
var numberOfWeeks = function (milestones) {
  const max = Math.max(...milestones);
  const sum = _.sum(milestones) - max;

  if (max <= sum + 1) {
    return max + sum;
  } else {
    return sum + (sum + 1);
  }
};

console.log(numberOfWeeks([1, 2, 3]));
console.log(numberOfWeeks([5, 2, 1]));
console.log(numberOfWeeks([4, 2, 1]));
console.log(numberOfWeeks([6, 2, 2]));

// 4 2 1
// 3 2 1
// 3 1 1
// 2 1 1
// 2 1 0
// 1 1 0
