const _ = require('lodash');
/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
  const map = _.countBy(arr);
  let ans = -1;
  // console.log('findLucky -> map', map);
  for (const key in map) {
    if (map.hasOwnProperty(key)) {
      const element = map[key];
      if (key === element + '') {
        if (element > ans) {
          ans = element;
        }
      }
    }
  }
  return ans;
};

console.log(findLucky([2, 2, 3, 4]));
console.log(findLucky([1, 2, 2, 3, 3, 3]));
console.log(findLucky([2, 2, 2, 3, 3]));
console.log(findLucky([5]));
console.log(findLucky([7, 7, 7, 7, 7, 7, 7]));
