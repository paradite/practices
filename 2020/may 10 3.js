/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {boolean[]} hasApple
 * @return {number}
 */
var minTime = function(n, edges, hasApple) {
  const vertices = [];
  for (let i = 0; i < n; i++) {
    vertices.push(new TreeNode(i, hasApple[i]));
  }
  const root = vertices[0];
  for (let i = 0; i < edges.length; i++) {
    const [from, to] = edges[i];
    vertices[from].children.push(vertices[to]);
  }
  const dfsMarkHasApple = vertex => {
    // console.log('minTime -> vertex', vertex);
    let hasApple = false;
    if (vertex.hasApple) {
      hasApple = true;
    }
    for (let i = 0; i < vertex.children.length; i++) {
      if (dfsMarkHasApple(vertex.children[i]) === true) {
        hasApple = true;
      }
    }
    if (hasApple) {
      vertex.hasApple = true;
    }
    // console.log('minTime -> vertex', vertex);
    return hasApple;
  };
  dfsMarkHasApple(root);

  const dfs = vertex => {
    if (!vertex.hasApple) {
      return 0;
    }
    if (vertex.children.length === 0) {
      return 2;
    }
    let count = 0;
    for (let i = 0; i < vertex.children.length; i++) {
      count += dfs(vertex.children[i]);
    }
    return count + 2;
  };
  // for (let i = 0; i < vertices.length; i++) {
  //   vertices[i];
  //   console.log('vertices[i]', vertices[i]);
  // }
  const ans = dfs(root) - 2;
  if (ans < 0) return 0;
  return ans;
};

function TreeNode(val, hasApple) {
  this.val = val;
  this.hasApple = hasApple;
  this.children = [];
}

// prettier-ignore
console.log(minTime(7,[[0,1],[0,2],[1,4],[1,5],[2,3],[2,6]],[false,false,true,false,true,true,false]));
// prettier-ignore
console.log(minTime(7,[[0,1],[0,2],[1,4],[1,5],[2,3],[2,6]],[false,false,true,false,false,true,false]));
// prettier-ignore
console.log(minTime(7,[[0,1],[0,2],[1,4],[1,5],[2,3],[2,6]],[false,false,false,false,false,false,false]));
// prettier-ignore
console.log(minTime(6,[[0,1],[0,2],[1,3],[3,4],[4,5]],[false,true,false,false,true,true]));
