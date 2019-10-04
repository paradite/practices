/**
 * @param {number} n
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var nthUglyNumber = function(n, a, b, c) {
  // console.log('TCL: c % b', c % b);
  // console.log('TCL: c % a', c % a);
  const recurse = (start, end) => {
    if (start > end) {
      return -1;
    }
    const mid = Math.ceil((start + end) / 2);
    const numCount = getNumberCountUntil(mid);
    if (numCount > n) {
      return recurse(start, mid - 1);
    } else if (numCount < n) {
      return recurse(mid + 1, end);
    } else {
      return mid;
    }
  };

  const getNumberCountUntil = k => {
    let da = Math.floor(k / a);
    let db = Math.floor(k / b);
    let dc = Math.floor(k / c);
    let dab = Math.floor(k / (a * b));
    let dac = Math.floor(k / (a * c));
    let dbc = Math.floor(k / (b * c));
    let dabc = Math.floor(k / (a * b * c));
    let included = 0;
    if (a % c === 0 || a % b === 0) {
      da = 0;
      dab = 0;
      dac = 0;
      included++;
    }
    if (b % a === 0 || b % c === 0) {
      db = 0;
      dab = 0;
      dbc = 0;
      included++;
    }
    if (c % a === 0 || c % b === 0) {
      dc = 0;
      dac = 0;
      dbc = 0;
      included++;
    }
    if (included >= 2) {
      dabc = 0;
    }

    return da + db + dc - dab - dac - dbc + 3 * dabc;
  };

  getNumberCountUntil(1999999984);
  let end = 2 * Math.pow(10, 9) + 1;
  let ans = recurse(1, end);
  // console.log('TCL: ans', ans);

  while (ans % a !== 0 && ans % b !== 0 && ans % c !== 0) {
    ans--;
  }
  return ans;
};

console.log(nthUglyNumber(3, 2, 3, 5));
console.log(nthUglyNumber(4, 2, 3, 4));
console.log(nthUglyNumber(5, 2, 11, 13));
console.log(nthUglyNumber(5, 2, 3, 3));
console.log(nthUglyNumber(100000000, 2, 46141313, 20978967));
console.log(nthUglyNumber(1000000000, 2, 217983653, 336916467));

// 4
// 6
// 10
// 199999986
