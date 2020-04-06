const _ = require('lodash');

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  const map = {};
  for (let i = 0; i < strs.length; i++) {
    const str = strs[i];
    const fArr = [];
    for (let j = 0; j < str.length; j++) {
      const code = str[j].charCodeAt(0) - 97;
      fArr[code] = fArr[code] ? fArr[code] + 1 : 1;
    }
    let mapKey = '';
    for (let j = 0; j < fArr.length; j++) {
      if (fArr[j]) {
        mapKey = mapKey + j + '-' + fArr[j] + '-';
      }
    }

    if (map[mapKey]) {
      map[mapKey].push(str);
    } else {
      map[mapKey] = [str];
    }
  }
  // console.log('groupAnagrams -> map', map);
  return Object.values(map);
};

console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));
