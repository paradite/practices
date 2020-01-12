/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var makeConnected = function(n, connections) {
  if (connections.length < n - 1) {
    return -1;
  }
  const map = {};
  const comMap = {};
  let extra = 0;
  let moves = 0;
  let setDup = 0;
  let set0 = new Set();
  const [x0, y0] = connections[0];
  set0.add(x0);
  set0.add(y0);
  const sets = [set0];
  for (let i = 0; i < connections.length; i++) {
    const [x, y] = connections[i];
    let contain = [];
    for (let i = 0; i < sets.length; i++) {
      const set = sets[i];
      if (set.has(x)) {
        set.add(y);
        contain.push(set);
      } else if (set.has(y)) {
        contain.push(set);
        set.add(x);
      }
    }
    // console.log('TCL: contain', contain);

    if (contain.length === 0) {
      const set = new Set();
      set.add(x);
      set.add(y);
      sets.push(set);
    }
    if (contain.length === 2) {
      for (let i = 0; i < sets.length; i++) {
        const element = sets[i];
        if (element === contain[0]) {
          sets.splice(i, 1);
        }
      }
      for (let i = 0; i < sets.length; i++) {
        const element = sets[i];
        if (element === contain[1]) {
          sets.splice(i, 1);
        }
      }
      // console.log('TCL: sets', sets);
      sets.push(new Set([...contain[0], ...contain[1]]));
      // console.log('TCL: sets', sets);
    }
    if (map[x]) {
      extra++;
      map[x] = map[x] + 1;
    } else {
      map[x] = 1;
    }
    if (map[y]) {
      extra++;
      map[y] = map[y] + 1;
    } else {
      map[y] = 1;
    }
  }
  for (let i = 0; i < n; i++) {
    const key = i;
    const element = map[key];
    if (!element) {
      extra--;
      moves++;
    }
    if (extra < 0) {
      return -1;
    }
  }
  console.log('TCL: sets.length', sets.length);
  return moves + sets.length - 1;
};

console.log(
  makeConnected(4, [
    [0, 1],
    [0, 2],
    [1, 2]
  ])
);

console.log(
  makeConnected(6, [
    [0, 1],
    [0, 2],
    [0, 3],
    [1, 2],
    [1, 3]
  ])
);
console.log(
  makeConnected(6, [
    [0, 1],
    [0, 2],
    [0, 3],
    [1, 2]
  ])
);
console.log(
  makeConnected(5, [
    [0, 1],
    [0, 2],
    [3, 4],
    [2, 3]
  ])
);

console.log(
  makeConnected(100, [
    [17, 51],
    [33, 83],
    [53, 62],
    [25, 34],
    [35, 90],
    [29, 41],
    [14, 53],
    [40, 84],
    [41, 64],
    [13, 68],
    [44, 85],
    [57, 58],
    [50, 74],
    [20, 69],
    [15, 62],
    [25, 88],
    [4, 56],
    [37, 39],
    [30, 62],
    [69, 79],
    [33, 85],
    [24, 83],
    [35, 77],
    [2, 73],
    [6, 28],
    [46, 98],
    [11, 82],
    [29, 72],
    [67, 71],
    [12, 49],
    [42, 56],
    [56, 65],
    [40, 70],
    [24, 64],
    [29, 51],
    [20, 27],
    [45, 88],
    [58, 92],
    [60, 99],
    [33, 46],
    [19, 69],
    [33, 89],
    [54, 82],
    [16, 50],
    [35, 73],
    [19, 45],
    [19, 72],
    [1, 79],
    [27, 80],
    [22, 41],
    [52, 61],
    [50, 85],
    [27, 45],
    [4, 84],
    [11, 96],
    [0, 99],
    [29, 94],
    [9, 19],
    [66, 99],
    [20, 39],
    [16, 85],
    [12, 27],
    [16, 67],
    [61, 80],
    [67, 83],
    [16, 17],
    [24, 27],
    [16, 25],
    [41, 79],
    [51, 95],
    [46, 47],
    [27, 51],
    [31, 44],
    [0, 69],
    [61, 63],
    [33, 95],
    [17, 88],
    [70, 87],
    [40, 42],
    [21, 42],
    [67, 77],
    [33, 65],
    [3, 25],
    [39, 83],
    [34, 40],
    [15, 79],
    [30, 90],
    [58, 95],
    [45, 56],
    [37, 48],
    [24, 91],
    [31, 93],
    [83, 90],
    [17, 86],
    [61, 65],
    [15, 48],
    [34, 56],
    [12, 26],
    [39, 98],
    [1, 48],
    [21, 76],
    [72, 96],
    [30, 69],
    [46, 80],
    [6, 29],
    [29, 81],
    [22, 77],
    [85, 90],
    [79, 83],
    [6, 26],
    [33, 57],
    [3, 65],
    [63, 84],
    [77, 94],
    [26, 90],
    [64, 77],
    [0, 3],
    [27, 97],
    [66, 89],
    [18, 77],
    [27, 43]
  ])
);
