/**
 * @param {number[]} arr
 * @param {number[][]} queries
 * @return {number[]}
 */
var xorQueries = function(arr, queries) {
  let res = arr[0];
  const dp = [res];
  for (let j = 1; j < arr.length; j++) {
    res = res ^ arr[j];
    dp.push(res);
  }
  console.log('TCL: dp', dp);
  let ans = [];
  for (let i = 0; i < queries.length; i++) {
    const query = queries[i];
    const [left, right] = query;
    let res = dp[right];
    if (left > 0) {
      res = res ^ dp[left - 1];
    }
    ans.push(res);
  }
  return ans;
};

// [ 2, 7, 14, 8 ]
// [ 8, 0, 4, 4 ]

console.log(
  xorQueries(
    [1, 3, 4, 8],
    [
      [0, 1],
      [1, 2],
      [0, 3],
      [3, 3]
    ]
  )
);

console.log(
  xorQueries(
    [4, 8, 2, 10],
    [
      [2, 3],
      [1, 3],
      [0, 0],
      [0, 3]
    ]
  )
);
