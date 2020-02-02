// Given an array of integers arr and an integer d. In one step you can jump from index i to index:
//  i + x where: i + x < arr.length and 0 < x <= d.
//  i - x where: i - x >= 0 and 0 < x <= d.
// In addition, you can only jump from index i to index j if arr[i] > arr[j] and arr[i] > arr[k] for all indices k between i and j (More formally min(i, j) < k < max(i, j)).
// You can choose any index of the array and start jumping. Return the maximum number of indices you can visit.
// Notice that you can not jump outside of the array at any time.

/**
 * @param {number[]} arr
 * @param {number} d
 * @return {number}
 */
var maxJumps = function(arr, d) {
  const map = {};
  for (let i = 0; i < arr.length; i++) {
    for (let j = i - 1; j >= i - d; j--) {
      if (j < 0) continue;
      if (arr[j] >= arr[i]) break;
      map[i] ? map[i].push(j) : (map[i] = [j]);
    }
    for (let j = i + 1; j <= i + d; j++) {
      if (j >= arr.length) continue;
      if (arr[j] >= arr[i]) break;
      map[i] ? map[i].push(j) : (map[i] = [j]);
    }
  }
  let max = 0;
  const memo = {};
  const dfs = arr => {
    let localMax = 0;
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      if (memo[element]) {
        if (memo[element] > localMax) {
          localMax = memo[element];
        }
      } else if (map[element]) {
        const result = dfs(map[element]);
        memo[element] = result;
        if (memo[element] > localMax) {
          localMax = memo[element];
        }
      }
    }
    return localMax + 1;
  };
  for (const key in map) {
    if (map.hasOwnProperty(key)) {
      if (!memo[key]) {
        memo[key] = dfs(map[key]);
      }
      max = Math.max(max, memo[key]);
    }
  }
  return max + 1;
};

console.log(maxJumps([6, 4, 14, 6, 8, 13, 9, 7, 10, 6, 12], 2));
// 4
console.log(maxJumps([3, 3, 3, 3, 3], 1));
console.log(maxJumps([7, 6, 5, 4, 3, 2, 1], 1));
console.log(maxJumps([7, 1, 7, 1, 7, 1], 2));
console.log(maxJumps([66], 1));
