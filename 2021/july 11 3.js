const mod = Math.pow(10, 9) + 7;

// return number of ways to color a m * n grid in three different colors with no adjacent cells having the same color
var colorTheGrid = function (m, n) {
  let perms = [];
  const getOneRow = (n, prevRow) => {
    perms = [];
    return dfs(0, n, -1, prevRow, []);
  };
  const dfs = (curr, max, preColor, prevRow, acc) => {
    if (curr > max - 1) {
      perms.push(acc);
      return;
    }
    for (let i = 0; i < 3; i++) {
      if (i !== preColor && (!prevRow || prevRow[curr] !== i)) {
        dfs(curr + 1, max, i, prevRow, [...acc, i]);
      }
    }
  };
  getOneRow(m, null);
  let ans = perms.length;
  // console.log(perms);
  for (let i = 1; i < n; i++) {
    const prevPerms = perms;
    console.log('TCL ~ prevPerms', prevPerms);
    let currentPerms = [];
    for (let j = 0; j < prevPerms.length; j++) {
      const perm = prevPerms[j];
      getOneRow(m, perm);
      // console.log('TCL ~ perms', perms);
      currentPerms = currentPerms.concat(perms);
    }
    perms = currentPerms;
    ans = perms.length;
  }
  return ans % mod;
};

console.log(colorTheGrid(1, 1));
console.log(colorTheGrid(1, 2));
console.log(colorTheGrid(5, 5));
