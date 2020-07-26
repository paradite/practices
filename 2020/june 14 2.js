if (typeof _ === 'undefined') {
  _ = require('lodash');
}

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findLeastNumOfUniqueInts = function (arr, k) {
  const map = _.countBy(arr);
  const freqArr = [];
  let t = 0;
  for (let [key, value] of Object.entries(map)) {
    t++;
    freqArr.push(value);
  }
  freqArr.sort((a, b) => a - b);
  freqArr.forEach((a) => {
    k = k - a;
    if (k >= 0) {
      t--;
    }
  });
  return t;
};

console.log(findLeastNumOfUniqueInts([5, 5, 4], 1));
