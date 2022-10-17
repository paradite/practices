/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function (sentence) {
  let n = 0;
  for (let i = 0; i < sentence.length; i++) {
    n |= 2 ** (sentence.charCodeAt(i) - 97);
  }
  return n === 2 ** 26 - 1;
};

console.log(checkIfPangram('thequickbrownfoxjumpsoverthelazydog'));
console.log(checkIfPangram('thequickbrownfoxjumpsoverthelzydog'));
console.log(checkIfPangram('thequickbrownfoxjumpsoverthelaydog'));
console.log(checkIfPangram('leetcode'));
