/**
 * @param {number[][]} mat
 * @return {number}
 */
var minFlips = function(mat) {};

console.log(
  minFlips([
    [0, 0],
    [0, 1]
  ])
); // 3

console.log(minFlips([[0]])); // 0

console.log(
  minFlips([
    [1, 1, 1],
    [1, 0, 1],
    [0, 0, 0]
  ])
); // 6

console.log(
  minFlips([
    [1, 0, 0],
    [1, 0, 0]
  ])
); // -1
