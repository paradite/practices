/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
  const array = s.split('');
  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i - 1]) {
      if (array[i] === array[i - 1]) {
        array.splice(i - 1, 2);
      }
    }
  }
  return array.join('');
};

console.log(removeDuplicates('abbaca'));
console.log(removeDuplicates('azxxzy'));
console.log(removeDuplicates('dreeeeeeeep'));
console.log(removeDuplicates(''));
console.log(removeDuplicates('d'));
console.log(removeDuplicates('dd'));
console.log(removeDuplicates('ddd'));
