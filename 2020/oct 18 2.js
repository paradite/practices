/**
 * @param {string} s
 * @param {number} a
 * @param {number} b
 * @return {string}
 */
var findLexSmallestString = function (s, a, b) {
  let map = {};
  let min = s;
  const rotate = (s) => {
    return s.slice(s.length - b, s.length) + s.slice(0, s.length - b);
  };
  const add = (s) => {
    let newS = '';
    for (let i = 0; i < s.length; i++) {
      const element = s[i];
      if (i % 2 === 0) {
        newS = newS + element;
      } else {
        newS = newS + ((Number(element) + a) % 10);
      }
    }
    return newS;
  };
  const dfs = (s) => {
    // console.log('dfs -> s', s);
    if (map[s]) return;
    map[s] = true;
    if (s < min) {
      min = s;
    }
    dfs(rotate(s));
    dfs(add(s));
  };
  dfs(s);
  return min;
};

console.log(findLexSmallestString('5525', 9, 2));

// 123456
// 456123

// 345612
// 561234
