/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function (s) {
  let i = 0;
  while (i <= s.length - 2) {
    // console.log('makeGood -> s', s);
    // console.log('makeGood -> i', i);
    if (
      s[i] !== s[i + 1] &&
      s[i].toLocaleLowerCase() === s[i + 1].toLocaleLowerCase()
    ) {
      s = s.slice(0, i) + s.slice(i + 2);
      i = i - 2;
      if (i < 0) {
        i = 0;
      }
    } else {
      i++;
    }
  }
  return s;
};

console.log(makeGood('leEeetcode'));
console.log(makeGood('abBAcC'));
