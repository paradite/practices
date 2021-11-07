/**
 * @param {number[]} nums
 * @return {number}
 */
var countMaxOrSubsets = function (nums) {
  const map = {};
  const dfs = (index, curr, skippedPrev) => {
    if (index > nums.length) return;
    if (!skippedPrev) {
      map[curr] = map[curr] ? map[curr] + 1 : 1;
    }
    // console.log('TCL ~ index', index);
    // console.log('TCL ~ curr', curr);
    dfs(index + 1, curr | nums[index], false);
    dfs(index + 1, curr, true);
  };
  dfs(0, 0, false);
  let max = 0;
  let maxCount = 0;
  // console.log('TCL ~ map', map);
  for (const key in map) {
    if (Object.hasOwnProperty.call(map, key)) {
      const element = map[key];
      if (Number(key) > max) {
        max = Number(key);
        maxCount = element;
      }
    }
  }

  return maxCount;
};
