/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minReorder = function (n, connections) {
  // get neighbours, dfs expand, reverse if not correct
  const neighbourMap = {};
  const connectionMap = {};
  for (let i = 0; i < connections.length; i++) {
    const [c0, c1] = connections[i];
    connectionMap[`${c0}-${c1}`] = true;
    if (neighbourMap[c0]) {
      neighbourMap[c0].push(c1);
    } else {
      neighbourMap[c0] = [c1];
    }
    if (neighbourMap[c1]) {
      neighbourMap[c1].push(c0);
    } else {
      neighbourMap[c1] = [c0];
    }
  }
  let visited = {};
  let ans = 0;
  // console.log('TCL ~ neighbourMap:', neighbourMap);
  const dfs = (node, parent) => {
    // console.log('TCL ~ node:', node);
    if (visited[node]) {
      return;
    }
    // console.log('TCL ~ neighbourMap[node]:', node, neighbourMap[node]);
    visited[node] = true;
    if (parent !== undefined && !connectionMap[`${node}-${parent}`]) {
      ans++;
      // console.log('TCL ~ ans:', ans);
    }
    for (let i = 0; i < neighbourMap[node].length; i++) {
      dfs(neighbourMap[node][i], node);
    }
  };
  dfs(0, undefined);
  return ans;
};

// prettier-ignore
console.log(minReorder(6, [[0,1],[1,3],[2,3],[4,0],[4,5]]));
// prettier-ignore
console.log(minReorder(5, [[1,0],[1,2],[3,2],[3,4]]));
// prettier-ignore
console.log(minReorder(3, [[1,0],[2,0]]));
// prettier-ignore
console.log(minReorder(2, [[0,1]]));
