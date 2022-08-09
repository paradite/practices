// prettier-ignore
if (typeof _ === 'undefined') {
  _ = require('lodash');
}
/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {string[]}
 */
var wordSubsets = function (words1, words2) {
  const result = [];
  const maxMap = {};
  for (let i = 0; i < words2.length; i++) {
    const word = words2[i];
    const map = _.countBy(word);
    for (const key in map) {
      if (Object.hasOwnProperty.call(map, key)) {
        const count = map[key];
        if (maxMap[key]) {
          maxMap[key] = Math.max(maxMap[key], count);
        } else {
          maxMap[key] = count;
        }
      }
    }
    // console.log('TCL ~ map', map);
  }
  // console.log('TCL ~ maxMap', maxMap);
  for (let i = 0; i < words1.length; i++) {
    const word = words1[i];
    const map = _.countBy(word);
    let valid = true;
    for (const key in maxMap) {
      if (Object.hasOwnProperty.call(maxMap, key)) {
        const count = maxMap[key];
        if (map[key] && map[key] >= count) {
          // result.push(word);
          // break;
        } else {
          valid = false;
        }
      }
    }
    if (valid) {
      result.push(word);
    }
  }
  return result;
};

console.log(
  wordSubsets(['amazon', 'apple', 'facebook', 'google', 'leetcode'], ['e', 'o'])
);

console.log(
  wordSubsets(
    ['amazon', 'apple', 'facebook', 'google', 'leetcode'],
    ['leet', 'e']
  )
);
