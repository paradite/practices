/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function (s) {
  let max = 0;
  let cur = 0;
  for (let i = 0; i < s.length; i++) {
    const element = s[i];
    if (element === '(') cur++;
    if (element === ')') cur--;
    if (cur > max) max = cur;
  }
  return max;
};
