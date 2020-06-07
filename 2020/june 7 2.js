/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getStrongest = function(arr, k) {
  arr.sort((a, b) => a - b);
  // console.log('getStrongest -> arr', arr);
  const mean = arr[Math.floor((arr.length - 1) / 2)];
  // console.log('getStrongest -> mean', mean);
  arr.sort((a, b) => {
    if (Math.abs(a - mean) > Math.abs(b - mean)) {
      return -1;
    } else if (Math.abs(b - mean) > Math.abs(a - mean)) {
      return 1;
    } else {
      return b - a;
    }
  });
  return arr.slice(0, k);
};
