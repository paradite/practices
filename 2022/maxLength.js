// prettier-ignore
if (typeof _ === 'undefined') {
  _ = require('lodash');
}

/**
 * @param {string[]} arr
 * @return {number}
 */
var maxLength = function (arr) {
  arr = arr.filter((str) => {
    const map = _.countBy(str);
    for (const key in map) {
      if (Object.hasOwnProperty.call(map, key)) {
        const element = map[key];
        if (element > 1) return false;
      }
    }
    return true;
  });
  const narr = arr.map((str) => {
    return str.split('').reduce((acc, c) => {
      return acc + 2 ** (c.charCodeAt(0) - 97);
    }, 0);
  });
  let max = bitCount(narr[0]);
  let curr = [narr[0]];
  for (let i = 1; i < narr.length; i++) {
    const element = narr[i];
    const count = bitCount(element);
    if (count > max) {
      max = count;
    }
    const newCurr = [...curr, element];
    for (let j = 0; j < curr.length; j++) {
      const prev = curr[j];
      if ((element & prev) === 0) {
        const merged = element | prev;
        const count = bitCount(merged);
        if (count > max) {
          max = count;
        }
        newCurr.push(merged);
      }
    }
    curr = newCurr;
  }
  return max;
};

function bitCount(n) {
  n = n - ((n >> 1) & 0x55555555);
  n = (n & 0x33333333) + ((n >> 2) & 0x33333333);
  return (((n + (n >> 4)) & 0xf0f0f0f) * 0x1010101) >> 24;
}

console.log(maxLength(['un', 'iq', 'ue']));
console.log(maxLength(['cha', 'r', 'act', 'ers']));
console.log(maxLength(['abcdefghijklmnopqrstuvwxyz']));
console.log(maxLength(['aa', 'bb']));
console.log(maxLength(['a', 'abc', 'd', 'de', 'def']));
console.log(maxLength(['xdvqiefpcs', 'vgnacw', 'raobcnwgufztdykmsvlj']));
