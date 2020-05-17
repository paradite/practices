/**
 * @param {string} text
 * @return {string}
 */
var arrangeWords = function(text) {
  let words = text.split(' ');
  words[0] = words[0][0].toLowerCase() + words[0].slice(1);
  words = stableSort(words, (a, b) => {
    return a.length - b.length;
  });
  words[0] = words[0][0].toUpperCase() + words[0].slice(1);
  return words.join(' ');
};

var stableSort = (arr, compare) =>
  arr
    .map((item, index) => ({ item, index }))
    .sort((a, b) => compare(a.item, b.item) || a.index - b.index)
    .map(({ item }) => item);

console.log(arrangeWords('Leetcode is cool'));
console.log(arrangeWords('Keep calm and code on'));
console.log(arrangeWords('To be or not to be'));
