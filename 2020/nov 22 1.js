/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function (word1, word2) {
  return word1.join('') === word2.join('');
};

console.log(arrayStringsAreEqual(['ab', 'c'], ['bc', 'a']));
console.log(arrayStringsAreEqual(['a', 'cb'], ['ab', 'c']));
console.log(
  arrayStringsAreEqual(
    ['jbboxe', 'yshcrtanrtlzyyp', 'vudsssnzuef', 'lde'],
    ['jbboxeyshcrtanrt', 'lzyypvudsssnzueflde']
  )
);
console.log(
  arrayStringsAreEqual(
    [
      'chovmfxcstotbdtoqmzutlizluwygoagsvunjyawirsljnrrfnjzmodaresq',
      'xwgpjkautbzw',
      'khmgxfuwqdv',
      'cngf',
      'qvwc',
      'x',
    ],
    [
      'chovmfxcstotbdtoqmzutlizluwygoagsvunjyawirsljnrrfnjzmodaresqxwgpjkautbzwkhmgxfuwqdv',
      'cngfqvwc',
      'x',
    ]
  )
);
