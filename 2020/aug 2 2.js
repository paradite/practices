/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var getWinner = function (arr, k) {
  const max = Math.max(...arr);
  if (k > arr.length) {
    return max;
  }
  let count = 0;
  let curr = 0;
  let next = 1;
  let newarr = [];
  while (count < k) {
    if (arr[4] !== undefined) {
      // console.log('getWinner -> count', count);
      // console.log('getWinner -> arr', arr);
      // console.log('getWinner -> curr', curr, 'next', next);
      // console.log('getWinner -> newarr', newarr);
    }
    if (arr[curr] > arr[next]) {
      newarr.push(arr[next]);
      next++;
      count++;
      if (next >= arr.length) {
        newarr.unshift(arr[curr]);
        arr = newarr;
        curr = 0;
        next = 1;
        newarr = [];
      }
    } else {
      newarr.push(arr[curr]);
      curr = next;
      next++;
      count = 1;
      if (next >= arr.length) {
        newarr.unshift(arr[next - 1]);
        arr = newarr;
        curr = 0;
        next = 1;
        newarr = [];
      }
    }
  }
  return arr[curr];
};

// console.log(getWinner([2, 1, 3, 5, 4, 6, 7], 2));
// console.log(getWinner([3, 2, 1], 10));
// console.log(getWinner([1, 9, 8, 2, 3, 7, 6, 4, 5], 7));
console.log(getWinner([1, 11, 22, 33, 44, 55, 66, 77, 88, 99], 1000000000));
