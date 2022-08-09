/**
 * @param {number[]} values
 * @param {number[][]} edges
 * @param {number} maxTime
 * @return {number}
 */
var maximalPathQuality = function (values, edges, maxTime) {
  let max = 0;
  const costMap = {};
  const neighbourMap = {};
  for (let i = 0; i < edges.length; i++) {
    const [start, end, cost] = edges[i];
    costMap[`${start}-${end}`] = cost;
    costMap[`${end}-${start}`] = cost;
    if (neighbourMap[start]) {
      neighbourMap[start].push(end);
    } else {
      neighbourMap[start] = [end];
    }
    if (neighbourMap[end]) {
      neighbourMap[end].push(start);
    } else {
      neighbourMap[end] = [start];
    }
  }
  const dfs = (currNode, currScore, cost, visited) => {
    if (currNode === 0) {
      max = Math.max(currScore, max);
    }
    const neighbours = neighbourMap[currNode] || [];
    for (let i = 0; i < neighbours.length; i++) {
      const neighbour = neighbours[i];
      const visitCost = cost + costMap[`${currNode}-${neighbour}`];
      if (visitCost <= maxTime) {
        if (visited[neighbour]) {
          dfs(neighbour, currScore, visitCost, visited);
        } else {
          visited[neighbour] = true;
          dfs(neighbour, currScore + values[neighbour], visitCost, visited);
          visited[neighbour] = false;
        }
      }
    }
  };
  dfs(0, values[0], 0, {
    0: true,
  });
  return max;
};

// prettier-ignore
console.log(maximalPathQuality([0,32,10,43], [[0,1,10],[1,2,15],[0,3,10]], 49));
