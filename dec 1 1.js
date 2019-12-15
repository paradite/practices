/**
 * @param {number[][]} moves
 * @return {string}
 */
var tictactoe = function(moves) {
  let squares = [];
  for (let i = 0; i < moves.length; i++) {
    const [row, col] = moves[i];
    if (i % 2 === 0) {
      squares[row * 3 + col] = 'A';
    } else {
      squares[row * 3 + col] = 'B';
    }
  }
  const lines = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  if (moves.length === 9) {
    return 'Draw';
  }
  return 'Pending';
};

console.log(tictactoe([[0, 0], [2, 0], [1, 1], [2, 1], [2, 2]]));
console.log(tictactoe([[0, 0], [1, 1], [0, 1], [0, 2], [1, 0], [2, 0]]));
console.log(tictactoe([[0, 0], [1, 1], [2, 0], [1, 0], [1, 2], [2, 1], [0, 1], [0, 2], [2, 2]]));
console.log(tictactoe([[0, 0], [1, 1]]));
console.log(tictactoe([]));
