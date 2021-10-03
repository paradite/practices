/**
 * @param {string} s
 * @return {number}
 */
var minimumMoves = function (s) {
  let ans = 0;
  for (let i = 0; i < s.length; i++) {
    const element = s[i];
    if (element === 'X') {
      ans++;
      i = i + 2;
    }
  }
  return ans;
};

console.log(minimumMoves('OOXXXXOO'));
