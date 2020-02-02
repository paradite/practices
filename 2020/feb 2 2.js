/**
 * @param {number[]} arr
 * @return {number}
 */
var minSetSize = function(arr) {
  const half = Math.ceil(arr.length / 2);
  let total = arr.length;
  const lengths = [];
  const map = {};
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    map[element] = map[element] ? map[element] + 1 : 1;
  }
  for (const key in map) {
    if (map.hasOwnProperty(key)) {
      const element = map[key];
      lengths.push(element);
    }
  }
  lengths.sort((a, b) => a - b).reverse();
  // console.log(lengths);
  for (let i = 0; i < lengths.length; i++) {
    const element = lengths[i];
    total = total - element;
    if (total <= half) {
      return i + 1;
    }
  }
};

console.log(minSetSize([3, 3, 3, 3, 5, 5, 5, 2, 2, 7]));
console.log(minSetSize([7, 7, 7, 7, 7, 7]));
console.log(minSetSize([1, 9]));
console.log(minSetSize([1000, 1000, 3, 7]));
console.log(minSetSize([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
