const makeSet = (value, i, j) => {
  const singleton = {
    rank: 0,
    value,
    i,
    j,
    id: `${i}-${j}`,
    valid: true,
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
 * @param {number[][]} grid1
 * @param {number[][]} grid2
 * @return {number}
 */
var countSubIslands = function (grid1, grid2) {
  const dirs = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  const grid1Map = {};
  const grid2Map = {};
  for (let i = 0; i < grid1.length; i++) {
    const row = grid1[i];
    const row2 = grid2[i];
    for (let j = 0; j < row.length; j++) {
      const value = row[j];
      const value2 = row2[j];
      const cell = makeSet(value, i, j);
      const cell2 = makeSet(value2, i, j);
      grid1Map[`${i}-${j}`] = cell;
      grid2Map[`${i}-${j}`] = cell2;
    }
  }
  for (let i = 0; i < grid1.length; i++) {
    const row = grid1[i];
    const row2 = grid2[i];
    for (let j = 0; j < row.length; j++) {
      const value = row[j];
      const value2 = row2[j];
      for (let k = 0; k < dirs.length; k++) {
        const [rd, cd] = dirs[k];
        if (
          grid1Map[`${i + rd}-${j + cd}`] &&
          grid1Map[`${i + rd}-${j + cd}`].value === value
        ) {
          union(grid1Map[`${i}-${j}`], grid1Map[`${i + rd}-${j + cd}`]);
        }
        if (
          grid2Map[`${i + rd}-${j + cd}`] &&
          grid2Map[`${i + rd}-${j + cd}`].value === value2
        ) {
          union(grid2Map[`${i}-${j}`], grid2Map[`${i + rd}-${j + cd}`]);
        }
      }
    }
  }
  // for (let i = 0; i < grid1.length; i++) {
  //   const row = grid1[i];
  //   for (let j = 0; j < row.length; j++) {
  //     if (find(grid1Map[`${i}-${j}`]).value === 1) {
  //       console.log(find(grid1Map[`${i}-${j}`]).id);
  //     }
  //   }
  // }
  // console.log(1111);
  let ans = 0;
  for (let i = 0; i < grid1.length; i++) {
    const row = grid1[i];
    for (let j = 0; j < row.length; j++) {
      if (find(grid2Map[`${i}-${j}`]).value === 1) {
        if (find(grid1Map[`${i}-${j}`]).value === 0) {
          find(grid2Map[`${i}-${j}`]).valid = false;
        }
      }
    }
  }
  const visited = {};
  for (let i = 0; i < grid1.length; i++) {
    const row = grid1[i];
    for (let j = 0; j < row.length; j++) {
      const node = find(grid2Map[`${i}-${j}`]);
      if (node.value === 1 && node.valid) {
        if (!visited[find(grid2Map[`${i}-${j}`]).id]) {
          visited[find(grid2Map[`${i}-${j}`]).id] = true;
          ans++;
        }
      }
    }
  }
  return ans;
};

console.log(
  countSubIslands(
    [
      [1, 1, 1, 0, 0],
      [0, 1, 1, 1, 1],
      [0, 0, 0, 0, 0],
      [1, 0, 0, 0, 0],
      [1, 1, 0, 1, 1],
    ],
    [
      [1, 1, 1, 0, 0],
      [0, 0, 1, 1, 1],
      [0, 1, 0, 0, 0],
      [1, 0, 1, 1, 0],
      [0, 1, 0, 1, 0],
    ]
  )
);

console.log(
  countSubIslands(
    [
      [1, 1, 1, 1, 0, 0],
      [1, 1, 0, 1, 0, 0],
      [1, 0, 0, 1, 1, 1],
      [1, 1, 1, 0, 0, 1],
      [1, 1, 1, 1, 1, 0],
      [1, 0, 1, 0, 1, 0],
      [0, 1, 1, 1, 0, 1],
      [1, 0, 0, 0, 1, 1],
      [1, 0, 0, 0, 1, 0],
      [1, 1, 1, 1, 1, 0],
    ],
    [
      [1, 1, 1, 1, 0, 1],
      [0, 0, 1, 0, 1, 0],
      [1, 1, 1, 1, 1, 1],
      [0, 1, 1, 1, 1, 1],
      [1, 1, 1, 0, 1, 0],
      [0, 1, 1, 1, 1, 1],
      [1, 1, 0, 1, 1, 1],
      [1, 0, 0, 1, 0, 1],
      [1, 1, 1, 1, 1, 1],
      [1, 0, 0, 1, 0, 0],
    ]
  )
);
