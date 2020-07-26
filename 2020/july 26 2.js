/**
 * @param {string} target
 * @return {number}
 */
var minFlips = function (target) {
  if (!target.includes('1')) {
    return 0;
  }
  const i = target.indexOf('1');
  let start1 = true;
  if (i !== 0) {
    target = target.slice(i);
    start1 = false;
  }
  let prev = '1';
  let ans = 0;
  for (let i = 1; i < target.length; i++) {
    const element = target[i];
    if (element === '0' && prev === '1') {
      ans++;
    } else if (element === '1' && prev === '0') {
      ans++;
    }
    prev = element;
  }
  // if (!start1) {
  ans++;
  // }
  return ans;
  // console.log('minFlips -> target', target);
};

console.log(minFlips('10111'));
console.log(minFlips('101'));
console.log(minFlips('00000'));
console.log(minFlips('001011101'));
console.log(minFlips('111000'));
console.log(minFlips('111001'));
console.log(minFlips('111010'));
