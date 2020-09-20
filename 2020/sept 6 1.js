/**
 * @param {string} s
 * @return {string}
 */
var modifyString = function (s) {
  let arr = [];
  const letters = 'abcdefghijklmnopqrstuvwxyz';
  for (let i = 0; i < s.length; i++) {
    const element = s[i];
    if (element !== '?') {
      arr.push(element);
    } else {
      j = i + 1;
      while (s[j] === '?') {
        j = j + 1;
      }
      for (let k = 0; k < letters.length; k++) {
        const l = letters[k];
        if (l !== arr[i - 1] && l !== s[j]) {
          arr.push(l);
          break;
        }
      }
    }
  }
  return arr.join('');
};
