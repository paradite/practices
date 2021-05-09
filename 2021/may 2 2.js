/**
 * @param {string} s
 * @return {boolean}
 */
var splitString = function (s) {
  if (Number(s) === 0) return false;
  for (let i = 1; i < s.length; i++) {
    const str = s.substring(0, i);
    let curr = Number(str);
    let valid = false;
    let start = i;
    for (let j = i; j < s.length; j++) {
      const next = Number(s.substring(start, j + 1));
      // console.log('TCL ~ curr', curr);
      // console.log('TCL ~ next', next);
      if (next === curr - 1 || (curr === 0 && next === 0)) {
        if (curr !== 0) {
          curr--;
        }
        start = j + 1;
        valid = true;
        // console.log('TCL ~ valid', valid);
        continue;
      } else {
        valid = false;
      }
    }
    if (valid === true) {
      return true;
    }
  }
  return false;
};

console.log(splitString('0500432100'));
console.log(splitString('0504030201000'));
// console.log(splitString('1234'));
// console.log(splitString('050043'));
// console.log(splitString('9080701'));
// console.log(splitString('10009998'));
// console.log(splitString('1000000980700650003'));
// console.log(splitString('10000009807006500040030201000'));
