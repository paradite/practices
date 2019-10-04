/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
  const sorted = arr.sort((a, b) => a - b);
  // console.log('TCL: sorted', sorted);
  let min = sorted[1] - sorted[0];
  let pair = [[sorted[0], sorted[1]]];
  for (let i = 1; i < sorted.length - 1; i++) {
    const small = sorted[i];
    const big = sorted[i + 1];
    if (big - small < min) {
      min = big - small;
      pair = [[small, big]];
    } else if (big - small === min) {
      pair.push([small, big]);
    }
  }
  return pair;
};

console.log(minimumAbsDifference([4, 2, 1, 3]));
console.log(minimumAbsDifference([1, 3, 6, 10, 15]));
console.log(minimumAbsDifference([3, 8, -10, 23, 19, -4, -14, 27]));
