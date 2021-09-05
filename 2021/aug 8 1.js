/**
 * @param {string} s
 * @param {string[]} words
 * @return {boolean}
 */
var isPrefixString = function (s, words) {
  let result = '';
  for (let i = 0; i < words.length; i++) {
    result = result + words[i];
    if (s === result) {
      return true;
    }
  }
  return false;
};

console.log(isPrefixString('a', ['aa', 'aaaa', 'banana']));
