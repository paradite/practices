/**
 * @param {number[][]} hats
 * @return {number}
 */
var numberWays = function(hats) {
  const mod = Math.pow(10, 9) + 7;
  const reverse = new Array(40);
  for (let i = 0; i < hats.length; i++) {
    const element = hats[i];
    for (let j = 0; j < element.length; j++) {
      const p = element[j];
      if (reverse[p]) {
        reverse[p].push(i);
      } else {
        reverse[p] = [i];
      }
    }
  }
  console.log('numberWays -> reverse', reverse);
  let cmap = {};
  const dfs = (n, map, m) => {
    // console.log('dfs -> n', n);
    // console.log('dfs -> map', map);
    if (m === hats.length) {
      return 1;
    } else if (n === 40) {
      return 0;
    } else if (!reverse[n]) {
      // console.log('dfs -> n', n);
      // console.log('dfs -> reverse[n]', reverse[n]);
      return dfs(n + 1, map, m);
    } else {
      let cmapkey = '';
      let cmaplength = reverse.length - n;
      // console.log('dfs -> cmaplength', cmaplength);
      for (const key in map) {
        if (map.hasOwnProperty(key)) {
          let kt = '';
          for (let i = n; i < reverse.length; i++) {
            const element = reverse[i];
            if (element) {
              if (element.includes(Number(key))) {
                kt += '1';
              } else {
                kt += '0';
              }
            }
          }
          cmapkey += kt + ',';
        }
      }
      if (cmap[cmaplength]) {
        if (cmap[cmaplength][cmapkey]) {
          console.log('dfs -> cmap[cmaplength]', cmap[cmaplength]);
          console.log(
            'dfs -> cmap[cmaplength][cmapkey]',
            cmap[cmaplength][cmapkey]
          );
          return cmap[cmaplength][cmapkey];
        }
      }
      let c = 0;
      for (let i = 0; i < reverse[n].length; i++) {
        const p = reverse[n][i];
        // console.log('dfs -> map', map);
        if (map[p]) {
          continue;
        }
        // console.log('dfs -> p', p);
        c += dfs(n + 1, { ...map, [p]: true }, m + 1) % mod;
      }
      c += dfs(n + 1, { ...map }, m);
      // console.log('dfs -> cmap', Object.keys(cmap).length);
      // console.log('dfs -> map', map);
      if (cmap[cmaplength]) {
        cmap[cmaplength][cmapkey] = c;
      } else {
        cmap[cmaplength] = {};
        cmap[cmaplength][cmapkey] = c;
      }
      return c;
    }
  };
  // console.log('dfs -> cmap', cmap);
  return dfs(0, {}, 0) % mod;
};

console.log(numberWays([[3, 4], [4, 5], [5]]));
// prettier-ignore
console.log(numberWays([[3, 5, 1],[3, 5]]));
console.log(
  numberWays([
    [1, 2, 3, 4],
    [1, 2, 3, 4],
    [1, 2, 3, 4],
    [1, 2, 3, 4]
  ])
);
console.log(
  numberWays([
    [1, 2, 3],
    [2, 3, 5, 6],
    [1, 3, 7, 9],
    [1, 8, 9],
    [2, 5, 7]
  ])
);
console.log(
  numberWays([
    [4, 15, 16, 26, 28],
    [
      1,
      2,
      3,
      4,
      6,
      7,
      8,
      10,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      21,
      22,
      24,
      25,
      27,
      28,
      29,
      30
    ],
    [
      1,
      2,
      3,
      4,
      5,
      7,
      9,
      10,
      11,
      12,
      14,
      15,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      28,
      29,
      30
    ],
    [2, 3, 6, 7, 14, 16, 17, 18, 19, 20, 21, 24, 25, 27, 28, 29],
    [1, 10],
    [1, 5, 6, 7, 8, 9, 10, 11, 13, 14, 15, 16, 19, 20, 21, 22, 24, 25, 27, 28],
    [2, 5, 10, 14, 16, 19, 21, 22, 23, 27, 30]
  ])
);

// prettier-ignore
// console.log(numberWays([[1,3,5,10,12,13,14,15,16,18,19,20,21,27,34,35,38,39,40],[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40],[3,7,10,12,13,14,15,17,21,25,29,31,35,40],[2,3,7,8,9,11,12,14,15,16,17,18,19,20,22,24,25,28,29,32,33,34,35,36,38],[6,12,17,20,22,26,28,30,31,32,34,35],[1,4,6,7,12,13,14,15,21,22,27,28,30,31,32,35,37,38,40],[6,12,21,25,38],[1,3,4,5,6,7,8,9,10,11,12,13,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,34,35,36,37,38,39,40]]));
// prettier-ignore
// console.log(numberWays([[1,2,3,4,5,12,13,16,17,18,23,24,25,26,28,30,31,33,34,38,39,40],[1,2,3,4,5,8,9,10,11,12,13,14,15,16,17,18,19,20,22,23,25,26,27,28,29,31,32,33,34,35,36,37,38,39,40],[1,2,3,5,6,8,9,11,12,13,17,21,22,23,27,28,29,32,33,36,37,38,39,40],[5,10,14,15,23,24,26,29,31,33,39,40],[2,3,4,5,6,7,8,11,12,13,14,16,17,18,19,20,21,22,23,24,25,26,27,28,30,32,33,34,35,36,39,40],[1,2,3,4,6,7,11,13,15,16,18,22,23,24,25,27,29,30,34,37,38,39,40],[1,7,11,23,24,25,28,31],[1,3,4,5,6,7,8,9,12,17,22,23,25,30,34,35,37,38,40],[1,2,3,4,5,6,7,8,9,10,11,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,30,32,36,37,38,39],[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,37,38,39,40]]));
