/**
 * @param {string} s
 * @return {number}
 */
var numSteps = function(s) {
  const arr = s.split('');
  let ans = 0;
  while (arr.length !== 1) {
    // console.log('numSteps -> arr', arr);
    if (arr[arr.length - 1] === '1') {
      arr[arr.length - 1] = '0';
      let j = arr.length - 2;
      for (; j >= 0; j--) {
        if (arr[j] === '1') {
          arr[j] = '0';
        } else {
          arr[j] = '1';
          break;
        }
      }
      if (j === -1) {
        arr.unshift('1');
      }
      ans++;
    } else {
      arr.pop();
      ans++;
    }
  }
  return ans;
};

console.log(numSteps('1101'));
console.log(numSteps('10'));
console.log(numSteps('1'));

// 10011
// 10100
// 1010
