/**
 * @param {string} s
 * @return {number}
 */
var countPalindromicSubsequence = function (s) {
  const pairsMap = {};
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (pairsMap[char]) {
      pairsMap[char] = [pairsMap[char][0], i];
    } else {
      pairsMap[char] = [i, i];
    }
  }
  const ansMap = {};
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    for (const key in pairsMap) {
      if (Object.hasOwnProperty.call(pairsMap, key)) {
        const [start, end] = pairsMap[key];
        if (i > start && i < end) {
          if (!ansMap[key]) {
            ansMap[key] = [char];
          } else {
            if (ansMap[key].indexOf(char) === -1) {
              ansMap[key].push(char);
            }
          }
        }
      }
    }
  }
  let ans = 0;
  for (const key in ansMap) {
    if (Object.hasOwnProperty.call(ansMap, key)) {
      const element = ansMap[key];
      ans += element.length;
    }
  }
  return ans;
};

console.log(countPalindromicSubsequence('aabca'));
console.log(countPalindromicSubsequence('adc'));
console.log(countPalindromicSubsequence('bbcbaba'));
console.log(countPalindromicSubsequence('bbcbacba'));
