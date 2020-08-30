/**
 * @param {number} n
 * @param {number[]} rounds
 * @return {number[]}
 */
var mostVisited = function (n, rounds) {
  let map = {};
  for (let i = 0; i < rounds.length - 1; i++) {
    const round = rounds[i];
    const next = rounds[i + 1];
    let c = round;
    while (c !== next) {
      // console.log('mostVisited -> c', c);
      if (map[c]) {
        map[c] = map[c] + 1;
      } else {
        map[c] = 1;
      }
      c = c + 1;
      if (c > n) {
        c = 1;
      }
    }
    if (i === rounds.length - 2) {
      if (map[c]) {
        map[c] = map[c] + 1;
      } else {
        map[c] = 1;
      }
    }
  }
  let ans = [];
  let max = 0;
  // console.log('mostVisited -> map', map);
  for (const key in map) {
    if (map.hasOwnProperty(key)) {
      const element = map[key];
      if (element > max) {
        max = element;
        ans = [key];
      } else if (element === max) {
        ans.push(key);
      }
    }
  }
  return ans;
};

console.log(mostVisited(4, [1, 3, 1, 2]));
