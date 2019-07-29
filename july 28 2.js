/**
 * @param {string} target
 * @return {string}
 */
var alphabetBoardPath = function(target) {
  const board = ["abcde", "fghij", "klmno", "pqrst", "uvwxy", "z"];
  const boardIndex = {};
  for (var i = 0; i < board.length; i++) {
    row = board[i];
    for (var j = 0; j < row.length; j++) {
      boardIndex[row[j]] = [i, j];
    }
  }

  target = 'a' + target;

  let ans = '';
  for (var i = 0; i < target.length - 1; i++) {
    const diff = getDiff(target[i], target[i+1]);
    const inst = getInst(diff, target[i], target[i+1]);
    ans = ans + inst + '!';
  }
  return ans;

  function getDiff(start, end) {
    return [boardIndex[end][0] - boardIndex[start][0], boardIndex[end][1] - boardIndex[start][1]];
  }

  function genX(diff) {
    let ins = '';
    const letter = diff > 0 ? 'R' : 'L';
    diff = Math.abs(diff);
    for (var i = 0; i < diff; i++) {
      ins = ins + letter;
    }
    return ins;
  }

  function genY(diff) {
    let ins = '';
    const letter = diff > 0 ? 'D' : 'U';
    diff = Math.abs(diff);
    for (var i = 0; i < diff; i++) {
      ins = ins + letter;
    }
    return ins;
  }

  function getInst(diff, start, end) {
    let ins;
    if (start === 'z') {
      ins = genY(diff[0]);
      ins = ins + genX(diff[1]);
    } else {
      ins = genX(diff[1]);
      ins = ins + genY(diff[0]);
    }
    return ins;
  }
};

console.log(alphabetBoardPath('leet'));
console.log(alphabetBoardPath('code'));
console.log(alphabetBoardPath('bzb'));