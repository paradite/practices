if (typeof _ === 'undefined') {
  _ = require('lodash');
}

/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var minCharacters = function (a, b) {
  const combined = a + b;
  let total = combined.length;
  const map = _.countBy(combined);
  let max = 0;
  for (const key in map) {
    if (Object.hasOwnProperty.call(map, key)) {
      const element = map[key];
      if (element > max) {
        max = element;
      }
    }
  }

  const solve = (a, b) => {
    const af = [];
    const bf = [];
    for (let i = 0; i < 26; i++) {
      af[i] = 0;
      bf[i] = 0;
    }
    for (let i = 0; i < a.length; i++) {
      const element = a.charCodeAt(i) - 97;
      af[element] = af[element] + 1;
    }
    for (let i = 0; i < b.length; i++) {
      const element = b.charCodeAt(i) - 97;
      bf[element] = bf[element] + 1;
    }
    for (let i = 1; i < 26; i++) {
      af[i] = af[i - 1] + af[i];
      bf[i] = bf[i - 1] + bf[i];
    }
    // console.log('TCL ~ af', af);
    // console.log('TCL ~ bf', bf);
    let min = Infinity;
    // a smaller than b
    for (let i = 0; i < 25; i++) {
      let atochange = a.length - af[i];
      let btochange = bf[i];
      let total = atochange + btochange;
      if (total < min) min = total;
    }
    return min;
  };

  const s1 = solve(a, b);
  const s2 = solve(b, a);
  return Math.min(s1, s2, total - max);
};

// 23121
console.log(minCharacters('aba', 'caa'));
console.log(minCharacters('dabadd', 'cda'));
console.log(minCharacters('da', 'cced'));
console.log(minCharacters('ace', 'abe'));
console.log(minCharacters('bbbbd', 'bbbbc'));
console.log(minCharacters('abdzzzzzzzzzzzceyed', 'efotmpazzzzsls'));
