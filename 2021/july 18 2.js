/**
 * @param {number[]} rungs
 * @param {number} dist
 * @return {number}
 */
var addRungs = function (rungs, dist) {
  let curr = 0;
  let nextIndex = 0;
  let ans = 0;
  while (nextIndex < rungs.length) {
    if (dist + curr < rungs[nextIndex]) {
      ans++;
      curr += dist;
      continue;
    }
    curr = rungs[nextIndex];
    nextIndex++;
  }
  return ans;
};

console.log(addRungs([1, 3, 5, 10], 2));
console.log(addRungs([1, 3, 5, 10], 1));
console.log(addRungs([1, 10], 5));
