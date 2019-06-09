// https://leetcode.com/contest/weekly-contest-138/problems/grumpy-bookstore-owner/

/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} X
 * @return {number}
 */
var maxSatisfied = function(customers, grumpy, X) {
  let maxStart = 0;
  let maxSaved = 0;
  let currentSaved = 0;
  for (var i = 0; i < X; i++) {
    if (grumpy[i]) {
      maxSaved += customers[i];
      currentSaved += customers[i];
    }
  }
  if (X > 0) {
    // iterate start pos
    for (var i = 1; i < customers.length - X + 1; i++) {
      if (grumpy[i - 1]) {
        currentSaved -= customers[i - 1];
      }
      if (grumpy[i + X - 1]) {
        currentSaved += customers[i + X - 1];
      }
      if (currentSaved > maxSaved) {
        maxSaved = currentSaved;
        maxStart = i;
      }
    }

    // alter grumpy
    let end = maxStart + X - 1;
    for (var i = maxStart; i <= end; i++) {
      grumpy[i] = 0;
    }
  }
  // calculate result
  let ans = 0;
  for (var i = 0; i < customers.length; i++) {
    if (grumpy[i]) {
      continue;
    }
    ans += customers[i];
  }
  return ans;
};

console.log(maxSatisfied([1, 0, 1, 2, 1, 1, 7, 5], [0, 1, 0, 1, 0, 1, 0, 1], 0));
console.log(maxSatisfied([1, 0, 1, 2, 1, 1, 7, 5], [0, 1, 0, 1, 0, 1, 0, 1], 1));
console.log(maxSatisfied([1, 0, 1, 2, 1, 1, 7, 5], [0, 1, 0, 1, 0, 1, 0, 1], 2));
console.log(maxSatisfied([1, 0, 1, 2, 1, 1, 7, 5], [0, 1, 0, 1, 0, 1, 0, 1], 3));
