/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {
  const map = {};
  for (let i = 0; i < paths.length; i++) {
    const [a, b] = paths[i];
    map[a] = b;
  }
  let d = '';
  for (const key in map) {
    if (map.hasOwnProperty(key)) {
      let element = map[key];
      while (map[element]) {
        element = map[element];
      }
      return element;
    }
  }
};

// prettier-ignore
console.log(destCity([["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]]));
// prettier-ignore
console.log(destCity([["B","C"],["D","B"],["C","A"]]));
// prettier-ignore
console.log(destCity([["A","Z"]]));
