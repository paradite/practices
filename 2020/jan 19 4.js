/**
 * @param {number} n
 * @param {number[]} ranges
 * @return {number}
 */
var minTaps = function(n, ranges) {
  const dfs = (covered, required, used, nodes) => {
    if (required < 0) {
      return;
    }
    if (used >= ans) {
      return;
    }
    const node = nodes.pop();
    if (node) {
      const covered_ = Object.assign({}, covered);
      const nodes_ = [...nodes];
      // do not use node
      dfs(covered, required, used, nodes);
      const [range, s, e] = node;
      let usedOnce = false;
      for (let i = s; i < e; i++) {
        if (!covered_[i]) {
          covered_[i] = true;
          required--;
          usedOnce = true;
        }
      }
      if (usedOnce) {
        used++;
        if (required === 0) {
          if (used < ans) {
            ans = used;
          }
        }
        // use node
        dfs(covered_, required, used, nodes_);
      }
    }
  };

  const nodes = [];
  for (let i = 0; i < ranges.length; i++) {
    const total = ranges[i] * 2;
    const wasted = ranges[i] - i > 0 ? ranges[i] - i : 0;
    const wastedr = ranges[i] + i > n ? i + ranges[i] - n : 0;
    if (total - wasted - wastedr > 0) {
      nodes.push([total - wasted - wastedr, wasted ? 0 : i - ranges[i], i + ranges[i] > n ? n : i + ranges[i]]);
    }
  }
  nodes.sort((a, b) => {
    return a[0] - b[0];
  });
  let ans = n + 2;
  dfs({}, n, 0, nodes);
  if (ans === n + 2) {
    ans = -1;
  }
  return ans;
};

console.log(minTaps(5, [3, 4, 1, 1, 0, 0]));
console.log(minTaps(3, [0, 0, 0, 0]));
console.log(minTaps(7, [1, 2, 1, 0, 2, 1, 0, 1]));
console.log(minTaps(8, [4, 0, 0, 0, 0, 0, 0, 0, 4]));
console.log(minTaps(8, [4, 0, 0, 0, 4, 0, 0, 0, 4]));
console.log(
  minTaps(35, [
    1,
    0,
    4,
    0,
    4,
    1,
    4,
    3,
    1,
    1,
    1,
    2,
    1,
    4,
    0,
    3,
    0,
    3,
    0,
    3,
    0,
    5,
    3,
    0,
    0,
    1,
    2,
    1,
    2,
    4,
    3,
    0,
    1,
    0,
    5,
    2
  ])
);
