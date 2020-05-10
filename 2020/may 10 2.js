/**
 * @param {number[]} arr
 * @return {number}
 */
var countTriplets = function(arr) {
  let ans = 0;
  for (let i = 0; i < arr.length; i++) {
    let a = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      if (j - 1 !== i) {
        a = a ^ arr[j - 1];
      }
      b = arr[j];
      for (let k = j; k < arr.length; k++) {
        if (i >= j) continue;
        if (j > k) continue;
        if (k !== j) {
          b = b ^ arr[k];
        }
        // console.log('countTriplets -> a,b', a, b);
        if (a === b) {
          // console.log('countTriplets -> i,j,k', i, j, k, a === b);
          ans++;
        }
      }
    }
  }
  return ans;
};

console.log(countTriplets([2, 3, 1, 6, 7]));
console.log(countTriplets([1, 1, 1, 1, 1]));
console.log(countTriplets([2, 3]));
// console.log(countTriplets([2]));
console.log(countTriplets([1, 3, 5, 7, 9]));
console.log(countTriplets([7, 11, 12, 9, 5, 2, 7, 17, 22]));
