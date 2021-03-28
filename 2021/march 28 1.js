/**
 * @param {string} word
 * @return {number}
 */
var numDifferentIntegers = function (word) {
  word = word.replace(/[a-z]/g, ' ');
  const set = new Set();
  word
    .split(' ')
    .filter((a) => a !== '')
    .map((a) => +a)
    .forEach((a) => set.add(a));
  return set.size;
};

console.log(numDifferentIntegers('a123bc34d8ef34'));
