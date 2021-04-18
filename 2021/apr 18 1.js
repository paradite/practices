/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function (sentence) {
  const set = new Set();
  for (let i = 0; i < sentence.length; i++) {
    const element = sentence[i];
    set.add(element);
  }
  return set.size === 26;
};
