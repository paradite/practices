// Given a string s, find the longest palindromic substring in s.
// You may assume that the maximum length of s is 1000.
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let max = s.length === 0 ? '' : s[0];
  for (let index = 0; index < s.length; index++) {
    let j = index - 1;
    let k = index + 1;
    while (j >= 0 && k < s.length) {
      if (s[j] === s[k]) {
        if (k - j + 1 > max.length) {
          max = s.slice(j, k + 1);
        }
      } else {
        break;
      }
      j--;
      k++;
    }
    j = index;
    k = index + 1;
    while (j >= 0 && k < s.length) {
      if (s[j] === s[k]) {
        if (k - j + 1 > max.length) {
          max = s.slice(j, k + 1);
        }
      } else {
        break;
      }
      j--;
      k++;
    }
  }
  return max;
};

console.log(longestPalindrome('babad'));
// "bab" / "aba"

console.log(longestPalindrome('cbbd'));
console.log(longestPalindrome(''));
console.log(longestPalindrome('c'));
console.log(longestPalindrome('cc'));
console.log(longestPalindrome('cd'));
// "bb"
