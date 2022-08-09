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
  const randomWalk = () => {
    let currCost = 0;
    let currNode = 0;
    let currValue = values[0];
    const visited = {
      0: true,
    };
    while (currCost <= maxTime) {
      if (currNode === 0) max = Math.max(max, currValue);
      const neibours = neighbourMap[currNode] || [];
      const pick = neibours[Math.floor(Math.random() * neibours.length)];
      if (!visited[pick]) {
        visited[pick] = true;
        currValue += values[pick];
      }
      currCost += costMap[`${currNode}-${pick}`];
      currNode = pick;
    }
  };
  for (let i = 0; i < 100000; i++) {
    randomWalk();
  }
  return max;
};

// prettier-ignore
console.log(maximalPathQuality([0,32,10,43], [[0,1,10],[1,2,15],[0,3,10]], 49));
