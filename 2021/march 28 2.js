// prettier-ignore
if (typeof _ === 'undefined') {
  _ = require('lodash');
}

/**
 * @param {number} n
 * @return {number}
 */
var reinitializePermutation = function (n) {
  let perm = [];
  let init = [];
  for (let i = 0; i < n; i++) {
    init[i] = i;
    perm[i] = i;
  }
  // console.log('TCL ~ init', init);
  let count = 0;
  while (count === 0 || !_.isEqual(perm, init)) {
    const arr = [];
    for (let i = 0; i < perm.length; i++) {
      if (i % 2 === 0) {
        arr[i] = perm[i / 2];
      } else {
        arr[i] = perm[n / 2 + (i - 1) / 2];
      }
    }
    perm = arr;
    count++;
    // console.log('TCL ~ perm', perm);
  }
  return count;
};

console.log(reinitializePermutation(2));
