const _ = require('lodash');

/**
 * @param {string} s
 * @return {number}
 */
var minDeletions = function (s) {
  const map = _.countBy(s);
  // console.log('TCL: map', map);
  let map2 = [];
  for (const key in map) {
    if (map.hasOwnProperty(key)) {
      const element = map[key];
      if (map2[element]) {
        map2[element] = map2[element] + 1;
      } else {
        map2[element] = 1;
      }
    }
  }
  // console.log('TCL: map2', map2);
  let empty = [];
  let deletes = 0;
  for (let i = 0; i < map2.length; i++) {
    let element = map2[i];
    if (i === 0) continue;
    if (!element) {
      empty.push(i);
    } else if (element > 1) {
      while (element > 1) {
        if (empty.length > 0) {
          let pos = empty.pop();
          let diff = i - pos;
          deletes += diff;
        } else {
          deletes += i;
        }
        element--;
      }
    }
  }
  return deletes;
};

console.log(minDeletions('aab'));
console.log(minDeletions('aaabbbcc'));
console.log(minDeletions('ceabaacb'));
console.log(minDeletions('aabb'));
