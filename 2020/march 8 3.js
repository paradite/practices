/**
 * @param {number} n
 * @param {number} headID
 * @param {number[]} manager
 * @param {number[]} informTime
 * @return {number}
 */
var numOfMinutes = function(n, headID, manager, informTime) {
  const map = Array(n);
  for (let i = 0; i < map.length; i++) {
    map[i] = [];
  }
  for (let i = 0; i < manager.length; i++) {
    if (i == headID) continue;
    const m = manager[i];
    map[m].push(i);
  }
  let max = 0;
  const dfs = (cur, time) => {
    if (time > max) max = time;
    const children = map[cur];
    for (let i = 0; i < children.length; i++) {
      const c = children[i];
      dfs(c, time + informTime[cur]);
    }
  };
  dfs(headID, 0);
  return max;
};

console.log(numOfMinutes(1, 0, [-1], [0]));
console.log(numOfMinutes(6, 2, [2, 2, -1, 2, 2, 2], [0, 0, 1, 0, 0, 0]));
console.log(numOfMinutes(7, 6, [1, 2, 3, 4, 5, 6, -1], [0, 6, 5, 4, 3, 2, 1]));
console.log(
  numOfMinutes(15, 0, [-1, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6], [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0])
);
console.log(numOfMinutes(4, 2, [3, 3, -1, 2], [0, 0, 162, 914]));
