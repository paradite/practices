/**
 * @param {string} s
 * @return {string}
 */
var longestPrefix = function(s) {
  if (s.length === 1) return '';
  for (let i = s.length - 1; i >= 1; i--) {
    const pre = s.slice(0, i);
    const suf = s.slice(s.length - i);
    if (pre === suf) {
      return pre;
    }
  }
  return '';
};

console.log(longestPrefix('level'));
console.log(longestPrefix('ababab'));
console.log(longestPrefix('leetcodeleet'));
console.log(longestPrefix('a'));
