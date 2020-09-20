/**
 * @param {number[]} arr
 * @param {number} m
 * @param {number} k
 * @return {boolean}
 */
var containsPattern = function (arr, m, t) {
  for (let k = 0; k < arr.length; k++) {
    let count = 0;
    let s = null;
    for (let i = k; i < arr.length; i += m) {
      let cur = '';
      for (let j = i; j < i + m; j++) {
        cur = cur + '' + arr[j];
      }
      if (s === null) {
        s = cur;
        count = 1;
      } else {
        if (cur === s) {
          count++;
          if (count === t) return true;
        } else {
          count = 0;
          s = null;
        }
      }
    }
  }
  return false;
};
