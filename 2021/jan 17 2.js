/**
 * @param {number[]} nums
 * @return {number}
 */
var tupleSameProduct = function (nums) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    const n1 = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      const n2 = nums[j];
      let prod = n1 * n2;
      if (map[prod]) {
        map[prod] = map[prod] + 1;
      } else {
        map[prod] = 1;
      }
    }
  }
  // console.log('tupleSameProduct -> map', map);
  let pairs = 0;
  for (const key in map) {
    if (Object.hasOwnProperty.call(map, key)) {
      const count = map[key];
      if (count >= 2) {
        for (let i = 0; i < count; i++) {
          for (let j = i + 1; j < count; j++) {
            pairs++;
          }
        }
      }
    }
  }
  return pairs * 8;
};

console.log(tupleSameProduct([2, 3, 4, 6]));
console.log(tupleSameProduct([1, 2, 4, 5, 10]));
console.log(tupleSameProduct([2, 3, 4, 6, 8, 12]));
console.log(tupleSameProduct([2, 3, 5, 7]));
console.log(tupleSameProduct([2, 3]));
console.log(tupleSameProduct([]));
