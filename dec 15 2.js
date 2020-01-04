/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var sequentialDigits = function(low, high) {
  let seqs = [];
  // for (let i = min; i <= max; i++) {
  for (let j = 1; j < 10; j++) {
    let seq = '';
    for (let k = j; k < 10; k++) {
      seq += '' + k;
      // console.log('TCL: seq', seq);
      if (Number(seq) <= high && Number(seq) >= low) {
        seqs.push(Number(seq));
      }
    }
  }
  seqs.sort((a, b) => a - b);
  return seqs;
  // }
};

console.log(sequentialDigits(100, 300));
console.log(sequentialDigits(1000, 13000));
