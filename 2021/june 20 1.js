/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function (num) {
  let found;
  for (let i = num.length - 1; i >= 0; i--) {
    const element = num[i];
    if (Number(element) % 2 !== 0) {
      found = i;
      break;
    }
  }
  if (found >= 0) {
    return num.substring(0, found + 1);
  }
  return '';
};
