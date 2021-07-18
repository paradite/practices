/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
var canBeTypedWords = function (text, brokenLetters) {
  const map = {};
  for (let i = 0; i < brokenLetters.length; i++) {
    const element = brokenLetters[i];
    map[element] = true;
  }
  text = text.split(' ');
  let ans = 0;
  for (let i = 0; i < text.length; i++) {
    const word = text[i];
    let work = true;
    for (let j = 0; j < word.length; j++) {
      const w = word[j];
      if (map[w]) {
        work = false;
        break;
      }
    }
    if (work) {
      ans++;
    }
  }
  return ans;
};
