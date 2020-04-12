/**
 * @param {number[]} queries
 * @param {number} m
 * @return {number[]}
 */
var processQueries = function(queries, m) {
  let arr = [];
  let res = [];
  for (let i = 0; i < m; i++) {
    arr.push(i + 1);
  }
  for (let i = 0; i < queries.length; i++) {
    const q = queries[i];
    const index = arr.indexOf(q);
    res.push(index);
    arr.splice(index, 1);
    arr.unshift(q);
  }
  // console.log('processQueries -> arr', arr);
  return res;
};

console.log(processQueries([3, 1, 2, 1], 5));
console.log(processQueries([4, 1, 2, 2], 4));
console.log(processQueries([7, 5, 5, 8, 3], 8));
console.log(processQueries([7, 5, 5, 8, 3, 3993, 5869, 3248, 1245, 232, 1255, 3564, 5645, 1321], 20000));
