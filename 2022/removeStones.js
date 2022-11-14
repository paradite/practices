const makeSet = (x, y) => {
  const singleton = {
    rank: 0,
    x,
    y,
  };
  singleton.parent = singleton;

  return singleton;
};

const find = (node) => {
  if (node.parent !== node) {
    node.parent = find(node.parent);
  }

  return node.parent;
};

const union = (node1, node2) => {
  const root1 = find(node1);
  const root2 = find(node2);
  if (root1 !== root2) {
    if (root1.rank < root2.rank) {
      root1.parent = root2;
    } else {
      root2.parent = root1;
      if (root1.rank === root2.rank) root1.rank += 1;
    }
  }
};

/**
 * @param {number[][]} stones
 * @return {number}
 */
var removeStones = function (stones) {
  stones = stones.map((s) => {
    return {
      x: s[0],
      y: s[1],
      node: makeSet(s[0], s[1]),
    };
  });

  for (let i = 0; i < stones.length; i++) {
    const stone = stones[i];
    for (let j = 0; j < stones.length; j++) {
      if (i === j) continue;
      const other = stones[j];
      if (stone.x === other.x || stone.y === other.y) {
        union(stone.node, other.node);
      }
    }
  }
  let total = 0;
  const map = {};
  for (let i = 0; i < stones.length; i++) {
    const stone = stones[i];
    const root = find(stone.node);
    const { x, y } = root;
    map[`${x}-${y}`] = map[`${x}-${y}`] ? map[`${x}-${y}`] + 1 : 1;
  }
  Object.values(map).forEach((v) => (total += v - 1));
  return total;
};

// prettier-ignore
console.log(removeStones([[0,0],[0,1],[1,0],[1,2],[2,1],[2,2]])); // 5
// prettier-ignore
console.log(removeStones([[0,0],[0,2],[1,1],[2,0],[2,2]])); // 3
// prettier-ignore
console.log(removeStones([[3,2],[3,1],[4,4],[1,1],[0,2],[4,0]])); // 4
// prettier-ignore
console.log(removeStones([[0,0],[2,2],[1,1]])); // 0
// prettier-ignore
console.log(removeStones([[0,0],[2,2],[1,1],[2,1],[1,2]]));
// prettier-ignore
console.log(removeStones([[0,0],[2,2],[1,1],[2,1],[1,2],[2,3]]));
