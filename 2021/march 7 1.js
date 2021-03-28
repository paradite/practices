/**
 * @param {string} s
 * @return {boolean}
 */
var checkOnesSegment = function (s) {
  let isOne = false;
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    const element = s[i];
    if (isOne) {
      if (element === '1') {
      } else {
        isOne = false;
      }
    } else {
      if (element === '1') {
        isOne = true;
        count++;
      } else {
        isOne = false;
      }
    }
  }
  return count <= 1;
};
