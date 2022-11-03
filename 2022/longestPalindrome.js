/**
 * @param {string[]} words
 * @return {number}
 */
var longestPalindrome = function (words) {
  let oppositePairs = 0;
  const map = {};
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    // console.log('TCL ~ word', word);
    const oppo = word.split('').reverse().join('');
    // console.log('TCL ~ oppo', oppo);
    if (map[oppo] > 0) {
      oppositePairs += 2;
      map[oppo] = map[oppo] - 1;
    } else {
      map[word] = map[word] ? map[word] + 1 : 1;
    }
  }

  // console.log('TCL ~ oppositePairs', oppositePairs);
  for (const key in map) {
    if (Object.hasOwnProperty.call(map, key)) {
      const element = map[key];
      if (element > 0 && key[0] === key[1]) {
        oppositePairs++;
        break;
      }
    }
  }
  // console.log('TCL ~ oppositePairs', oppositePairs);
  return oppositePairs * 2;
};

console.log(longestPalindrome(['lc', 'cl', 'gg']));
console.log(longestPalindrome(['ab', 'ty', 'yt', 'lc', 'cl', 'ab']));
console.log(longestPalindrome(['cc', 'll', 'xx']));
// prettier-ignore
console.log(longestPalindrome(["qo","fo","fq","qf","fo","ff","qq","qf","of","of","oo","of","of","qf","qf","of"]));
console.log(
  longestPalindrome([
    'fo',
    'of',
    'fo',
    'of',
    'fq',
    'qf',
    'qo',
    'ff',
    'qq',
    'qf',
    'of',
    'of',
    'oo',
    'qf',
    'qf',
    'of',
  ])
);
// console.log(longestPalindrome(['cz']));
// console.log(longestPalindrome(['cc']));
