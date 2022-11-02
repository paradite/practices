/**
 * @param {string} start
 * @param {string} end
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function (start, end, bank) {
  const map = {};
  // for (let i = 0; i < bank.length; i++) {
  //   const gene = bank[i];
  //   map[gene] = false;
  // }
  let curr = [start];
  let distance = 0;
  while (curr.length > 0) {
    const next = new Set();
    for (let i = 0; i < curr.length; i++) {
      const gene = curr[i];
      if (gene === end) {
        return distance;
      }
      for (let j = 0; j < bank.length; j++) {
        const bgene = bank[j];
        if (isOneStep(gene, bgene) && !map[bgene]) {
          map[gene] = true;
          next.add(bgene);
        }
      }
    }

    distance++;
    curr = Array.from(next);
    // console.log('TCL ~ curr', curr);
  }
  return -1;
};

function isOneStep(a, b) {
  let steps = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      steps++;
    }
    if (steps > 1) return false;
  }
  return steps === 1;
}

console.log(minMutation('AACCGGTT', 'AACCGGTA', ['AACCGGTA']));
// prettier-ignore
console.log(minMutation('AACCGGTT', 'AAACGGTA', ["AACCGGTA","AACCGCTA","AAACGGTA"]));
// prettier-ignore
console.log(minMutation('AAAAACCC', 'AACCCCCC', ["AAAACCCC","AAACCCCC","AACCCCCC"]));
// prettier-ignore
console.log(minMutation('AAAAACCC', 'AACCCCCC', ["AAAACCCC","AACCCCCC"]));
// prettier-ignore
console.log(minMutation("AAAAAAAA",
"CCCCCCCC",
["AAAAAAAA","AAAAAAAC","AAAAAACC","AAAAACCC","AAAACCCC","AACACCCC","ACCACCCC","ACCCCCCC","CCCCCCCA"]));
