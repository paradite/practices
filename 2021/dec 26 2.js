/**
 * @param {number} n
 * @param {number[]} startPos
 * @param {string} s
 * @return {number[]}
 */
var executeInstructions = function (n, startPos, s) {
  const rowMap = {
    R: 0,
    L: 0,
    U: -1,
    D: 1,
  };
  const colMap = {
    R: 1,
    L: -1,
    U: 0,
    D: 0,
  };
  let ans = [];
  for (let i = 0; i < s.length; i++) {
    let pos = [startPos[0], startPos[1]];
    let count = 0;
    for (let j = i; j < s.length; j++) {
      const move = s[j];
      const newR = pos[0] + rowMap[move];
      const newC = pos[1] + colMap[move];
      if (newR >= 0 && newR < n && newC >= 0 && newC < n) {
        count++;
        pos = [newR, newC];
      } else {
        break;
      }
    }
    ans.push(count);
  }
  return ans;
};
