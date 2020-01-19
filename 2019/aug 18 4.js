/**
 * @param {string} s
 * @return {string}
 */
var lastSubstring = function(s) {
  let ans = '';
  for (let i = 0; i < s.length; i++) {
    const sub = s.slice(i);
    if (sub > ans) {
      ans = sub;
    }
  }
  return ans;
};

console.log(lastSubstring('abab'));
console.log(lastSubstring('leetcode'));
