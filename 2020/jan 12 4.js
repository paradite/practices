/**
 * @param {string} word
 * @return {number}
 */
var minimumDistance = function(word) {
  word = word.toLowerCase();
  let min = Infinity;
  const letters = 'abcdefghijklmnopqrstuvwxyz';
  const map = {};
  for (let i = 0; i < letters.length; i++) {
    const l = letters[i];
    const x = i % 6;
    const y = Math.floor(i / 6);
    map[l] = [x, y];
  }
  const getDist = (a, b) => {
    const [x0, y0] = a;
    const [x1, y1] = b;
    return Math.abs(x1 - x0) + Math.abs(y1 - y0);
  };
  // console.log('TCL: map', map);
  const dfs = (index, dist, lc, rc) => {
    // console.log('TCL: index', index);
    // console.log('TCL: dist', dist);
    // console.log('TCL: lc', lc);
    // console.log('TCL: rc', rc);
    if (index === word.length - 1) {
      if (dist < min) {
        min = dist;
      }
      return;
    }
    ldist = getDist(lc, map[word[index + 1]]);
    dfs(index + 1, dist + ldist, map[word[index + 1]], rc);
    if (rc) {
      rdist = getDist(rc, map[word[index + 1]]);
      dfs(index + 1, dist + rdist, lc, map[word[index + 1]]);
    } else {
      dfs(index + 1, dist, lc, map[word[index + 1]]);
    }
  };
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 5; j++) {
      dfs(0, getDist([i, j], map[word[0]]), [i, j], null);
    }
  }
  // dfs(0, 0, [0, 0], null);
  return min;
};

console.log(minimumDistance('CAKE'));
