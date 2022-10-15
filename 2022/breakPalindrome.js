/**
 * @param {string} palindrome
 * @return {string}
 */
var breakPalindrome = function (palindrome) {
  const midPos =
    palindrome.length % 2 === 0 ? undefined : Math.floor(palindrome.length / 2);
  // console.log('TCL ~ midPos', midPos);
  let res = '';
  const letters = 'abcdefghijklmnopqrstuvwxyz';
  for (let i = 0; i < palindrome.length; i++) {
    if (i === midPos) {
      continue;
    }
    const char = palindrome[i];
    // const pos = letters.indexOf(char);
    for (let j = 0; j < letters.length; j++) {
      const l = letters[j];
      if (l !== char) {
        const newArr = Array.from(palindrome);
        newArr[i] = l;
        res = newArr.join('');
        if (l < char) {
          return res;
        }
        break;
      }
    }
  }
  return res;
};

console.log(breakPalindrome('abccba'));
console.log(breakPalindrome('a'));
console.log(breakPalindrome('z'));
console.log(breakPalindrome('aba'));
console.log(breakPalindrome('abba'));
console.log(breakPalindrome('zbcbz'));
