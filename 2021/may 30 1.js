/**
 * @param {string} firstWord
 * @param {string} secondWord
 * @param {string} targetWord
 * @return {boolean}
 */
var isSumEqual = function (firstWord, secondWord, targetWord) {
  let fn = [];
  let sn = [];
  let tn = [];
  for (let i = 0; i < firstWord.length; i++) {
    fn.push(firstWord.charCodeAt(i) - 97);
  }
  for (let i = 0; i < secondWord.length; i++) {
    sn.push(secondWord.charCodeAt(i) - 97);
  }
  for (let i = 0; i < targetWord.length; i++) {
    tn.push(targetWord.charCodeAt(i) - 97);
  }
  return Number(fn.join('')) + Number(sn.join('')) === Number(tn.join(''));
};
