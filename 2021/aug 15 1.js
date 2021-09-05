/**
 * @param {string[]} patterns
 * @param {string} word
 * @return {number}
 */
var numOfStrings = function (patterns, word) {
  let ans = 0;
  for (let i = 0; i < patterns.length; i++) {
    const p = patterns[i];
    if (word.includes(p)) ans++;
  }
  return ans;
};
