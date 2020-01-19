/**
 * @param {number} n
 * @param {number} m
 * @param {number[][]} indices
 * @return {number}
 */
var oddCells = function(n, m, indices) {
  let ans = 0;
  let cMap = {};
  let rMap = {};
  for (let i = 0; i < indices.length; i++) {
    const [ri, ci] = indices[i];
    cMap[ci] = cMap[ci] ? cMap[ci] + 1 : 1;
    rMap[ri] = rMap[ri] ? rMap[ri] + 1 : 1;
  }
  // console.log('TCL: cMap', cMap);
  // console.log('TCL: rMap', rMap);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      const total = (rMap[i] ? rMap[i] : 0) + (cMap[j] ? cMap[j] : 0);
      // console.log('TCL: i', i);
      // console.log('TCL: j', j);
      // console.log('TCL: total', total);
      if (total % 2 === 1) {
        ans++;
      }
    }
  }
  return ans;
};

console.log(oddCells(2, 3, [[0, 1], [1, 1]]));
console.log(oddCells(2, 2, [[1, 1], [0, 0]]));
