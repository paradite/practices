/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function (arr) {
  arr.sort((a, b) => a - b);
  let prediff = null;
  for (let i = 0; i < arr.length - 1; i++) {
    const diff = arr[i + 1] - arr[i];
    if (prediff !== null) {
      if (diff !== prediff) {
        return false;
      }
    } else {
      prediff = diff;
    }
  }
  return true;
};
