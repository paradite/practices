/**
 * @param {string} s
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var canMakePaliQueries = function(s, queries) {
  let ans = [];
  const cf = {};
  // 'b'.charCodeAt(0) - 97
  for (let index = 0; index < queries.length; index++) {
    const [left, right, k] = queries[index];
    const sub = s.slice(left, right + 1);
    let map = {};
    let required = 0;
    for (let j = 0; j < sub.length; j++) {
      const element = sub[j];
      map[element] = map[element] ? map[element] + 1 : 1;
    }

    for (const key in map) {
      if (map.hasOwnProperty(key)) {
        const count = map[key];
        if (count % 2 === 1) {
          required++;
        }
      }
    }
    if (sub.length % 2 === 1) {
      required--;
    }
    // console.log(map);
    // console.log(required);
    if (required > k * 2) {
      ans.push(false);
    } else {
      ans.push(true);
    }
  }
  return ans;
};

console.log(canMakePaliQueries('abcda', [[3, 3, 0], [1, 2, 0], [0, 3, 1], [0, 3, 2], [0, 4, 1]]));
