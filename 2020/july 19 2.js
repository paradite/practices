/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {string} labels
 * @return {number[]}
 */
var countSubTrees = function (n, edges, labels) {
  // build edge map
  let edgeMap = {};
  for (let i = 0; i < edges.length; i++) {
    const [a, b] = edges[i];
    if (edgeMap[a]) {
      edgeMap[a].push(b);
    } else {
      edgeMap[a] = [b];
    }
    if (edgeMap[b]) {
      edgeMap[b].push(a);
    } else {
      edgeMap[b] = [a];
    }
  }
  // build levels
  let level = 0;
  let levels = {};
  let nodes = {};
  let ans = [];
  levels[0] = [];
  let q = [0];
  let newq = [];
  while (q.length > 0) {
    const i = q.pop();
    const node = {
      number: i,
      children: [],
    };
    const nei = edgeMap[i];
    for (let i = 0; i < nei.length; i++) {
      const element = nei[i];
      if (nodes[element]) {
        nodes[element].children.push(node);
      } else {
        newq.push(element);
      }
    }
    nodes[i] = node;
    levels[level].push(node);
    if (q.length === 0) {
      level++;
      levels[level] = [];
      q = newq;
      newq = [];
    }
  }
  level--;
  // go from bottom level to top level, accumulating label count
  for (let i = level; i >= 0; i--) {
    const currLevel = levels[i];
    for (let j = 0; j < currLevel.length; j++) {
      const element = currLevel[j];
      if (element.children.length === 0) {
        ans[element.number] = 1;
        element.labelMap = {
          [labels[element.number]]: 1,
        };
      } else {
        element.labelMap = {
          [labels[element.number]]: 1,
        };
        for (let k = 0; k < element.children.length; k++) {
          const child = element.children[k];
          if (child.labelMap) {
            for (const key in child.labelMap) {
              if (child.labelMap.hasOwnProperty(key)) {
                if (element.labelMap[key]) {
                  element.labelMap[key] =
                    element.labelMap[key] + child.labelMap[key];
                } else {
                  element.labelMap[key] = child.labelMap[key];
                }
              }
            }
          }
        }
        ans[element.number] = element.labelMap[labels[element.number]];
      }
    }
  }
  return ans;
};
