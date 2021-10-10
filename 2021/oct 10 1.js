/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function (nums1, nums2, nums3) {
  let visited = {};
  const map = {};
  for (let i = 0; i < nums1.length; i++) {
    const n = nums1[i];
    if (visited[n]) continue;
    visited[n] = true;
    map[n] = map[n] ? map[n] + 1 : 1;
  }
  visited = {};
  for (let i = 0; i < nums2.length; i++) {
    const n = nums2[i];
    if (visited[n]) continue;
    visited[n] = true;
    map[n] = map[n] ? map[n] + 1 : 1;
  }
  visited = {};
  for (let i = 0; i < nums3.length; i++) {
    const n = nums3[i];
    if (visited[n]) continue;
    visited[n] = true;
    map[n] = map[n] ? map[n] + 1 : 1;
  }
  const ans = [];
  for (const key in map) {
    if (Object.hasOwnProperty.call(map, key)) {
      const element = map[key];
      if (element >= 2) {
        ans.push(key);
      }
    }
  }
  return ans;
};
