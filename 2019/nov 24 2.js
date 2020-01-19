/**
 * @param {number[][]} grid
 * @return {number}
 */
var countServers = function(grid) {
  const rows = [];
  const cols = [];
  let ans = 0;
  const map = {};
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      const r = i;
      const c = j;
      const cell = grid[i][j];
      if (cell === 1) {
        let counted = false;
        // console.log('TCL: r', r);
        // console.log('TCL: c', c);
        // console.log('TCL: rows[r]', rows[r]);
        // console.log('TCL: cols[c]', cols[c]);
        if (rows[r]) {
          if (rows[r].length === 1 && !map[rows[r][0][0] + '.' + rows[r][0][1]]) {
            // console.log('TCL: r', r);
            // console.log('TCL: rows[r]', rows[r]);
            // console.log("TCL: rows[r][0][1] + '.' + rows[r][0][1]", rows[r][0][0] + '.' + rows[r][0][1]);
            ans++;
            map[rows[r][0][0] + '.' + rows[r][0][1]] = true;
          }
          rows[r].push([r, c]);
          if (!map[r + '.' + c]) {
            // console.log("TCL: r + '.' + c", r + '.' + c);
            ans++;
          }
          counted = true;
          map[r + '.' + c] = true;
        } else {
          rows[r] = [];
          rows[r].push([r, c]);
        }
        if (cols[c]) {
          if (cols[c].length === 1 && !map[cols[c][0][0] + '.' + cols[c][0][1]]) {
            // console.log("TCL: cols[c][0][0] + '.' + cols[c][0][1]", cols[c][0][0] + '.' + cols[c][0][1]);
            ans++;
            map[cols[c][0][0] + '.' + cols[c][0][1]] = true;
          }
          cols[c].push([r, c]);
          if (!counted && !map[r + '.' + c]) {
            // console.log("TCL: r + '.' + c", r + '.' + c);
            counted = true;
            ans++;
          }
          map[r + '.' + c] = true;
        } else {
          cols[c] = [];
          cols[c].push([r, c]);
        }
      }
    }
  }
  // console.log('TCL: map', map);
  return ans;
};

console.log(countServers([[1, 0], [0, 1]]));
console.log(countServers([[1, 0], [1, 1]]));
console.log(countServers([[1, 1, 0, 0], [0, 0, 1, 0], [0, 0, 1, 0], [0, 0, 0, 1]]));
console.log(countServers([[0, 0, 0, 0], [1, 1, 1, 1], [0, 0, 0, 1], [0, 0, 1, 1], [0, 0, 0, 1]]));
