/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var maximalNetworkRank = function (n, roads) {
  let biMap = {};
  let map = {};
  let max = 0;
  for (let i = 0; i < roads.length; i++) {
    const [start, end] = roads[i];
    biMap[`${start}-${end}`] = true;
    biMap[`${end}-${start}`] = true;
    if (map[start]) {
      map[start] = map[start] + 1;
    } else {
      map[start] = 1;
    }
    if (map[end]) {
      map[end] = map[end] + 1;
    } else {
      map[end] = 1;
    }
  }
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      let cur = map[i] + map[j];
      if (biMap[`${i}-${j}`]) {
        cur--;
      }
      if (cur > max) max = cur;
    }
  }
  return max;
};
