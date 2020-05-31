/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
  const isV = c => {
    return c === 'a' || c === 'e' || c === 'i' || c === 'o' || c === 'u';
  };
  let cur = 0;
  let max = 0;
  for (let i = 0; i < s.length; i++) {
    const element = s[i];
    if (i < k) {
      if (isV(element)) {
        cur++;
        if (cur > max) {
          max = cur;
        }
      }
    } else {
      if (isV(s[i - k])) {
        cur--;
      }
      if (isV(s[i])) {
        cur++;
      }
      if (cur > max) {
        max = cur;
      }
    }
  }
  return max;
};
