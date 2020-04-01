/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} t
 * @param {number} target
 * @return {number}
 */
var frogPosition = function(n, edges, t, target) {
  const map = Array(n + 1);
  for (let i = 0; i < map.length; i++) {
    map[i] = [];
  }
  // convert edges to node connection map
  for (let i = 0; i < edges.length; i++) {
    const [from, to] = edges[i];
    map[from].push(to);
    map[to].push(from);
  }
  const visited = {};
  let found = false;
  let ans = 0;
  const bfs = (curLs, prob, ct) => {
    if (ct < 0) return;
    if (found) return;
    const next = [];
    for (let i = 0; i < curLs.length; i++) {
      const node = curLs[i];
      if (visited[node]) continue;
      visited[node] = true;

      const children = map[node].filter(v => !visited[v]);
      if (node === target) {
        // if target has children return impossible, otherwise return ans;
        if (ct > 0 && children.length > 0) {
          found = true;
          return;
        } else {
          ans = prob;
          found = true;
          return;
        }
      }
      // collect all children from current level before going down the tree
      next.push([children, prob / children.length]);
    }
    for (let i = 0; i < next.length; i++) {
      const [chilren, newProb] = next[i];
      bfs(chilren, newProb, ct - 1);
    }
  };
  bfs([1], 1, t);
  return ans;
};

console.log(
  frogPosition(
    7,
    [
      [1, 2],
      [1, 3],
      [1, 7],
      [2, 4],
      [2, 6],
      [3, 5]
    ],
    2,
    4
  )
);

console.log(
  frogPosition(
    7,
    [
      [1, 2],
      [1, 3],
      [1, 7],
      [2, 4],
      [2, 6],
      [3, 5]
    ],
    1,
    7
  )
);

console.log(
  frogPosition(
    7,
    [
      [1, 2],
      [1, 3],
      [1, 7],
      [2, 4],
      [2, 6],
      [3, 5]
    ],
    20,
    6
  )
);

console.log(
  frogPosition(
    8,
    [
      [2, 1],
      [3, 2],
      [4, 1],
      [5, 1],
      [6, 4],
      [7, 1],
      [8, 7]
    ],
    7,
    7
  )
);
