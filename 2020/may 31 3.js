/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minReorder = function(n, connections) {
  let ans = 0;
  const visited = {};
  const mapForward = {};
  const mapBackward = {};
  for (let i = 0; i < connections.length; i++) {
    const [a, b] = connections[i];
    if (mapForward[a]) {
      mapForward[a].push(b);
    } else {
      mapForward[a] = [b];
    }
    if (mapBackward[b]) {
      mapBackward[b].push(a);
    } else {
      mapBackward[b] = [a];
    }
  }
  const dfs = (key, forward) => {
    if (visited[key]) {
      return;
    }
    visited[key] = true;
    if (forward) {
      ans++;
    }
    const f = mapForward[key];
    const b = mapBackward[key];
    if (f) {
      for (let i = 0; i < f.length; i++) {
        const element = f[i];
        dfs(element, true);
      }
    }
    if (b) {
      for (let i = 0; i < b.length; i++) {
        const element = b[i];
        dfs(element, false);
      }
    }
  };
  dfs(0, false);
  return ans;
};

// prettier-ignore
console.log(minReorder(6, [[0,1],[1,3],[2,3],[4,0],[4,5]]));
