/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
  const map = {};
  for (let i = 0; i < chars.length; i++) {
    const element = chars[i];
    if (map[element]) {
      map[element] = map[element] + 1;
    } else {
      map[element] = 1;
    }
  }
  let ans = 0;
  for (let i = 0; i < words.length; i++) {
    let valid = true;
    const word = words[i];
    // console.log('TCL: word', word);
    const mapCloned = { ...map };
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      // console.log('TCL: char', char);
      if (mapCloned[char]) {
        mapCloned[char] = mapCloned[char] - 1;
        if (mapCloned[char] < 0) {
          valid = false;
          break;
        }
      } else {
        valid = false;
        break;
      }
    }
    if (valid) {
      ans = ans + word.length;
    }
  }
  return ans;
};

console.log(countCharacters(['cat', 'bt', 'hat', 'tree'], 'atach'));
console.log(countCharacters(['hello', 'world', 'leetcode'], 'welldonehoneyr'));
