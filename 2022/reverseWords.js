/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  return s
    .split(/\s+/)
    .filter((s) => s)
    .reverse()
    .join(' ');
};

console.log(reverseWords('the sky is blue'));
console.log(reverseWords('  hello   world  '));
console.log(reverseWords('a good   example'));
