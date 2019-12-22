/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
  const map = {};
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    map[element] = map[element] ? map[element] + 1 : 1;
  }
  const occMap = {};
  for (const key in map) {
    if (map.hasOwnProperty(key)) {
      const element = map[key];
      if (occMap[element]) {
        return false;
      } else {
        occMap[element] = 1;
      }
    }
  }
  return true;
};

console.log(uniqueOccurrences([1, 2, 2, 1, 1, 3]));
console.log(uniqueOccurrences([1, 2]));
console.log(uniqueOccurrences([-3, 0, 1, -3, 1, 1, 1, -3, 10, 0]));
