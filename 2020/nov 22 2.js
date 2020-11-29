/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getSmallestString = function (n, k) {
  const letters = 'abcdefghijklmnopqrstuvwxyz';
  let zs = (k - (k % 26)) / 26;
  let remainer = k - 26 * zs;
  let length = n - zs;
  while (length > remainer) {
    zs--;
    remainer = remainer + 26;
    length++;
  }
  // console.log('getSmallestString -> zs', zs);
  // console.log('getSmallestString -> remainer', remainer);
  // console.log('getSmallestString -> length', length);
  let ans = '';
  if (zs) {
    while (length > 1) {
      ans = 'a' + ans;
      remainer--;
      length--;
    }
  } else {
    while (length > 1) {
      ans = 'a' + ans;
      remainer--;
      length--;
    }
  }

  // console.log('getSmallestString -> remainer', remainer);
  ans = ans + letters[remainer - 1];
  while (zs) {
    ans = ans + 'z';
    zs--;
  }
  return ans;
};

console.log(getSmallestString(3, 27));
console.log(getSmallestString(5, 73));
console.log(getSmallestString(2, 18));
console.log(getSmallestString(2, 40));
console.log(getSmallestString(80, 576));

// "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaavzzzzzzzzzzzzzzzzzzz"
