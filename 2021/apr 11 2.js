/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findTheWinner = function (n, k) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr[i] = i + 1;
  }
  let start = 0;
  while (arr.length > 1) {
    // console.log('TCL ~ arr', arr);
    const count = k;
    // console.log('TCL ~ start', start);
    const choice = (start + count - 1) % arr.length;
    // console.log('TCL ~ choice', choice);
    arr.splice(choice, 1);
    start = choice;
    if (start === arr.length) {
      start = 0;
    }
  }
  return arr[0];
};

console.log(findTheWinner(5, 2));
console.log(findTheWinner(5, 3));
