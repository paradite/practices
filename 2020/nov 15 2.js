/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function (word1, word2) {
  let set1 = new Set();
  let set2 = new Set();
  let map1 = {};
  let map2 = {};
  for (let i = 0; i < word1.length; i++) {
    const w = word1[i];
    set1.add(w);
    if (map1[w]) {
      map1[w] = map1[w] + 1;
    } else {
      map1[w] = 1;
    }
  }
  for (let i = 0; i < word2.length; i++) {
    const w = word2[i];
    set2.add(w);
    if (map2[w]) {
      map2[w] = map2[w] + 1;
    } else {
      map2[w] = 1;
    }
  }
  let f1 = [];
  let f2 = [];
  for (const key in map1) {
    if (map1.hasOwnProperty(key)) {
      const element = map1[key];
      f1.push(element);
    }
  }
  // console.log('closeStrings -> f1', f1);
  for (const key in map2) {
    if (map2.hasOwnProperty(key)) {
      const element = map2[key];
      f2.push(element);
    }
  }
  f1.sort((a, b) => a - b);
  f2.sort((a, b) => a - b);
  let isArrEqual = () => {
    if (f1.length !== f2.length) return false;
    for (let i = 0; i < f1.length; i++) {
      if (f1[i] !== f2[i]) return false;
    }
    return true;
  };
  // console.log('closeStrings -> f2', f2);
  return isSetsEqual(set1, set2) && isArrEqual();
};

isSetsEqual = (a, b) =>
  a.size === b.size && [...a].every((value) => b.has(value));

console.log(closeStrings('abc', 'bca'));
