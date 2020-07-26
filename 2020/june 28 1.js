/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function (path) {
  const map = {
    '0.0': true,
  };
  let cur = [0, 0];
  for (let i = 0; i < path.length; i++) {
    const element = path[i];
    if (element === 'N') {
      cur[0] = cur[0];
      cur[1] = cur[1] + 1;
    } else if (element === 'S') {
      cur[0] = cur[0];
      cur[1] = cur[1] - 1;
    } else if (element === 'E') {
      cur[0] = cur[0] + 1;
      cur[1] = cur[1];
    } else if (element === 'W') {
      cur[0] = cur[0] - 1;
      cur[1] = cur[1];
    }
    if (map[cur[0] + '.' + cur[1]]) {
      return true;
    }
    // console.log('isPathCrossing -> map', map);
    map[cur[0] + '.' + cur[1]] = true;
  }
  return false;
};

console.log(isPathCrossing('NES'));
console.log(isPathCrossing('NESWW'));
