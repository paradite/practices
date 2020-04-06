const _ = require('lodash');

/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var canConstruct = function(s, k) {
  if (k === s.length) return true;
  if (k > s.length) return false;
  const map = _.countBy(s.split(''));
  let singles = 0;
  for (const key in map) {
    if (map.hasOwnProperty(key)) {
      const element = map[key];
      if (element % 2 !== 0) {
        singles++;
      }
    }
  }
  return singles <= k;
};

console.log(canConstruct('annabelle', 2));
console.log(canConstruct('leetcode', 3));
console.log(canConstruct('true', 4));
console.log(canConstruct('yzyzyzyzyzyzyzy', 2));
console.log(canConstruct('cr', 7));
console.log(canConstruct('fayrouz', 1));
