/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
var canReach = function(arr, start) {
  const memo = {};
  let queue = [start];
  while (queue.length > 0) {
    const cur = queue.pop();
    if (memo[cur]) {
      continue;
    }
    memo[cur] = true;
    if (arr[cur] >= 0) {
      if (arr[cur] === 0) {
        return true;
      }
      const left = cur - arr[cur];
      const right = cur + arr[cur];
      queue.push(left);
      queue.push(right);
    }
  }
  return false;
};

console.log(canReach([4, 2, 3, 0, 3, 1, 2], 5));
console.log(canReach([4, 2, 3, 0, 3, 1, 2], 0));
console.log(canReach([3, 0, 2, 1, 2], 2));
console.log(canReach([99, 0, 99, 99, 99], 1));
console.log(canReach([99, 0, 99, 99, 99], 0));
