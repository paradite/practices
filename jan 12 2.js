/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var minFlips = function(a, b, c) {
  a = a.toString(2);
  b = b.toString(2);
  c = c.toString(2);
  let max = Math.max(a.length, b.length, c.length);
  while (a.length < max) {
    a = '0' + a;
  }
  while (b.length < max) {
    b = '0' + b;
  }
  while (c.length < max) {
    c = '0' + c;
  }
  // console.log('TCL: a', a);
  // console.log('TCL: b', b);
  // console.log('TCL: c', c);
  let ans = 0;
  for (let i = 0; i < c.length; i++) {
    const element = Number(c[i]);
    if (element === 1) {
      if (a[i] === '1' || b[i] === '1') {
        continue;
      } else {
        ans++;
      }
    } else {
      if (a[i] === '1' && b[i] === '1') {
        ans += 2;
      } else if (a[i] === '1' || b[i] === '1') {
        ans++;
      } else {
        continue;
      }
    }
  }
  return ans;
};

console.log(minFlips(2, 6, 5));
console.log(minFlips(4, 2, 7));
console.log(minFlips(1, 2, 3));
