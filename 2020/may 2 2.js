/**
 * @param {number} num
 * @return {number}
 */
var maxDiff = function(num) {
  numC = (num + '').split('');
  let max = 0;
  let min = 0;
  let diff = 0;
  let found = null;
  for (let i = 0; i < numC.length; i++) {
    const n = numC[i];
    if (found !== null && n === found) {
      // console.log('maxDiff -> n', n);
      // console.log('maxDiff -> found', found);
      numC[i] = '9';
    } else if (found === null && n !== '9') {
      numC[i] = '9';
      found = n;
    }
  }
  max = Number(numC.join(''));
  found = null;
  num = (num + '').split('');
  let first = true;
  for (let i = 0; i < num.length; i++) {
    const n = num[i];
    if (found === null && n === '1') {
      first = false;
    } else if (found !== null && n === found) {
      // console.log('maxDiff -> n', n);
      // console.log('maxDiff -> found', found);
      num[i] = first ? '1' : '0';
    } else if (found === null && n !== '1' && n !== '0') {
      num[i] = first ? '1' : '0';
      found = n;
    }
  }
  min = Number(num.join(''));
  // console.log('maxDiff -> max', max);
  // console.log('maxDiff -> min', min);
  return max - min;
};

console.log(maxDiff(555));
console.log(maxDiff(9));
console.log(maxDiff(123456));
console.log(maxDiff(10000));
console.log(maxDiff(9288));
