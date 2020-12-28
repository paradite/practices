/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumIncompatibility = function (nums, k) {
  nums.sort((a, b) => a - b);
  let visited = {};
  let min = Infinity;
  const dfs = (i, curr, set, min, max) => {
    if (i === nums.length) {
      return;
    }
    if (visited[i]) {
      dfs(i + 1, curr, set, min, max);
    } else {
      // if(set.contains)
    }
  };
  // dfs(0,0, new Set(), )
  if (min === Infinity) {
    return -1;
  }
  return min;
};
