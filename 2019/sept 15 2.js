/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function(s) {
  let found = true;
  while (found) {
    found = false;
    let start = null;
    let end = null;
    for (let index = 0; index < s.length; index++) {
      const char = s[index];
      if (char === '(') {
        start = index;
      } else if (char === ')') {
        end = index;
        break;
      }
    }
    if (start !== null) {
      let sub = s.slice(start + 1, end);
      let reversed = sub
        .split('')
        .reverse()
        .join('');
      // console.log('TCL: s', s);
      s = s.slice(0, start) + reversed + s.slice(end + 1);
      // console.log('TCL: s', s);
      found = true;
    }
  }
  return s;
};

console.log(reverseParentheses('(abcd)'));
console.log(reverseParentheses('(u(love)i)'));
console.log(reverseParentheses('(ed(et(oc))el)'));
console.log(reverseParentheses('a(bcdefghijkl(mno)p)q'));
