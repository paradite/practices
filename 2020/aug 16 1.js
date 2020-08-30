/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function (arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element % 2 === 1) {
      count++;
      if (count === 3) {
        return true;
      }
    } else {
      count = 0;
    }
  }
  return false;
};
