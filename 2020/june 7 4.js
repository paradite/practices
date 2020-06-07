/**
 * @param {number[]} houses
 * @param {number[][]} cost
 * @param {number} m
 * @param {number} n
 * @param {number} target
 * @return {number}
 */
var minCost = function(houses, cost, m, n, target) {
  const visited = new Array(houses.length);
  for (let i = 0; i < houses.length; i++) {
    const element = houses[i];
    if (element > 0) {
      visited[i] = true;
    }
  }
  const calN = arr => {
    let n = 1;
    for (let i = 1; i < arr.length; i++) {
      const element = arr[i];
      if (element != arr[i - 1]) {
        n++;
      }
    }
    return n;
  };
  const getRemoveTarget = arr => {
    let n1 = -1;
    let c1 = Infinity;
    let color1;
    let n2 = -1;
    let c2 = Infinity;
    let color2;
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      if (i === 0 && element != arr[i + 1]) {
        c1 = cost[i][arr[i + 1] - 1];
        n1 = 0;
        color1 = arr[i + 1];
      } else if (i === arr.length - 1 && element != arr[i - 1]) {
        if (cost[i][arr[i - 1] - 1] < c1) {
          c1 = cost[i][arr[i - 1] - 1];
          n1 = arr.length - 1;
          color1 = arr[i - 1];
        }
      } else {
        const prev = arr[i - 1];
        const next = arr[i + 1];
        if (element !== prev && element !== next) {
          if (prev === next) {
            if (cost[i][arr[i - 1] - 1] < c2) {
              c2 = cost[i][arr[i - 1] - 1];
              n2 = i;
              color2 = arr[i - 1];
            }
          } else {
            const min = Math.min(
              cost[i][arr[i - 1] - 1],
              cost[i][arr[i + 1] - 1]
            );
            // two color choices...
            if (min < c1) {
              c1 = min;
              n1 = i;
              color1 = arr[i - 1];
            }
          }
        }
      }
    }
  };
  const getAddTarget = arr => {
    // 222
    // 122
    // 123
    // 223
    // 323
    let n1 = -1;
    let c1 = Infinity;
    let n2 = -1;
    let c2 = Infinity;
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      if (i === 0 && element === arr[1]) {
        c1 = cost[i][arr[i + 1] - 1];
        n1 = 0;
      } else if (i === arr.length - 1 && element === arr[i - 1]) {
        if (cost[i][arr[i - 1] - 1] < c1) {
          c1 = cost[i][arr[i - 1] - 1];
          n1 = arr.length - 1;
        }
      } else {
        const prev = arr[i - 1];
        const next = arr[i + 1];
        if (element === prev || element === next) {
          let min = Infinity;
          for (let j = 0; j < cost[i].length; j++) {
            const c = cost[i][j];
            if (c < min && j + 1 !== arr[i + 1] && j + 1 !== arr[i - 1]) {
              min = c;
            }
          }
          if (min != Infinity) {
            if (next === prev) {
              c2 = min;
              n2 = i;
            } else {
              c1 = min;
              n1 = i;
            }
          }
        }
      }
    }
  };
};
