/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
  const length = arr.length;
  let skip = false;
  for (var i = 0; i < length; i++) {
    if(skip) {
      skip = false;
      continue;
    }
    if (arr[i] === 0) {
      arr.splice(i, 0, 0);
      arr.splice(arr.length - 1, 1);
      skip = true;
    }
  }
};

console.log(duplicateZeros([1,0,2,3,0,4,5,0]));
console.log(duplicateZeros([1,2,3]));
console.log(duplicateZeros([0,1]));
console.log(duplicateZeros([0,0]));