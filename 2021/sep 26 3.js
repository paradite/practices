/**
 * Rotates the given array 90 degrees clockwise.
 * @param  {Array} a two-dimensional array
 * @return {Array}   2d array representing a rotated version of the input
 */
function rotate90(a) {
  const w = a.length;
  const h = a[0].length;
  let b = new Array(h);
  for (let y = 0; y < h; y++) {
    b[y] = new Array(w);
    for (let x = 0; x < w; x++) {
      b[y][x] = a[w - 1 - x][y];
    }
  }
  return b;
}

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var placeWordInCrossword = function (board, word) {
  function match(seg) {
    if (seg.length !== word.length) return false;
    for (let i = 0; i < seg.length; i++) {
      if (seg[i] !== ' ' && seg[i] !== word[i]) return false;
    }
    return true;
  }
  function matchRow(row) {
    const segments = row.join('').split('#');
    for (let i = 0; i < segments.length; i++) {
      const seg = segments[i];
      if (match(seg)) {
        return true;
      }
    }
    return false;
  }
  function solve() {
    for (let i = 0; i < board.length; i++) {
      const row = board[i];
      if (matchRow(row)) {
        return true;
      }
    }
    return false;
  }
  for (let i = 0; i < 4; i++) {
    const r = solve(board);
    if (r) return true;
    board = rotate90(board);
  }
  return false;
};

console.log(
  placeWordInCrossword(
    [
      ['#', ' ', '#'],
      [' ', ' ', '#'],
      ['#', 'c', ' '],
    ],
    'abc'
  )
);
