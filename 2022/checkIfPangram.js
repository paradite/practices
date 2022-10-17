// prettier-ignore
if (typeof _ === 'undefined') {
  _ = require('lodash');
}

/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function (sentence) {
  const map = _.countBy(sentence);
  let count = 0;
  for (const key in map) {
    if (Object.hasOwnProperty.call(map, key)) {
      count++;
    }
  }
  return count === 26;
};

console.log(checkIfPangram('thequickbrownfoxjumpsoverthelazydog'));
console.log(checkIfPangram('leetcode'));
