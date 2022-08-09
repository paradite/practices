/**
 * @param {string} word
 * @return {number}
 */
var countVowelSubstrings = function (word) {
  let ans = 0;
  const isVowel = (s) => 'aeiou'.includes(s);
  for (let i = 0; i < word.length; i++) {
    const start = word[i];
    if (isVowel(start)) {
      const map = {
        [start]: true,
      };
      for (let j = i + 1; j < word.length; j++) {
        const element = word[j];
        if (isVowel(element)) {
          map[element] = true;
          if (map['a'] && map['e'] && map['i'] && map['o'] && map['u']) {
            ans++;
          }
        } else {
          break;
        }
      }
    }
  }
  return ans;
};
