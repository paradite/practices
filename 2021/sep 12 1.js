/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function (word, ch) {
  let index = word.indexOf(ch);
  if (index) {
    return (
      word
        .substring(0, index + 1)
        .split('')
        .reverse()
        .join('') + word.substring(index + 1)
    );
  } else {
    return word;
  }
};
