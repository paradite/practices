/**
 * @param {number[]} arr
 * @param {number} k
 * @return {boolean}
 */
var canArrange = function (arr, k) {
  const map = {};
  let left = 0;
  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    if (element < 0) {
      // console.log('canArrange -> element', element);
      const need = Math.ceil((0 - element) / k);
      element = element + need * k;
      // console.log('canArrange -> element', element);
    }
    const remainder = element % k;
    if (remainder === 0) {
      if (map[remainder] && map[k - remainder] > 0) {
        map[remainder] = map[remainder] - 1;
        left--;
      } else {
        if (map[remainder]) {
          map[remainder] = map[remainder] + 1;
        } else {
          map[remainder] = 1;
        }
      }
    } else if (map[k - remainder] && map[k - remainder] > 0) {
      map[k - remainder] = map[k - remainder] - 1;
      left--;
    } else if (map[k - remainder] && map[k - remainder] > 0) {
      map[k - remainder] = map[k - remainder] - 1;
      left--;
    } else {
      left++;
      if (map[remainder]) {
        map[remainder] = map[remainder] + 1;
      } else {
        map[remainder] = 1;
      }
    }
  }
  // console.log('canArrange -> map', map);
  if (left === 0) {
    return true;
  } else {
    return false;
  }
};
