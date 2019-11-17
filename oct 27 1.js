/**
 * // This is the CustomFunction's API interface.
 * // You should not implement it, or speculate about its implementation
 * function CustomFunction() {
 *
 *     @param {integer, integer} x, y
 *     @return {integer}
 *     this.f = function(x, y) {
 *         ...
 *     };
 *
 * };
 */
/**
 * @param {CustomFunction} customfunction
 * @param {integer} z
 * @return {integer[][]}
 */
var findSolution = function(customfunction, z) {
  let ans = [];
  for (let i = 1; i < 1001; i++) {
    const x = i;
    y = search(customfunction, x, z);
    // console.log('TCL: y', y);
    if (y !== -1) {
      ans.push([x, y]);
    }
  }
  return ans;
};

var search = function(customfunction, x, target) {
  return recurse(customfunction, x, target, 1, 1000);
};

const recurse = (customfunction, x, target, start, end) => {
  if (start > end) {
    return -1;
  }
  const mid = Math.ceil((start + end) / 2);
  const value = customfunction.f(x, mid);
  // console.log('TCL: value', value);
  if (value > target) {
    return recurse(customfunction, x, target, start, mid - 1);
  } else if (value < target) {
    return recurse(customfunction, x, target, mid + 1, end);
  } else {
    return mid;
  }
};

console.log(findSolution((x, y) => x + y, 5));
console.log(findSolution((x, y) => x * y, 5));
console.log(findSolution((x, y) => (x + 1) * (y - 1), 5));
