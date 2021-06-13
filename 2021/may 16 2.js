/**
 * @param {string} s
 * @return {number}
 */
var minSwaps = function (s) {
  let arr1 = [];
  let arr2 = [];
  for (let i = 0; i < s.length; i++) {
    if (i % 2 === 0) {
      arr1.push('1');
      arr2.push('0');
    } else {
      arr2.push('1');
      arr1.push('0');
    }
  }

  let zeros1 = 0;
  let ones1 = 0;
  let zeros2 = 0;
  let ones2 = 0;
  for (let i = 0; i < s.length; i++) {
    const element = s[i];
    if (element !== arr1[i]) {
      if (element === '0') {
        zeros1++;
      } else {
        ones1++;
      }
    }
    if (element !== arr2[i]) {
      if (element === '0') {
        zeros2++;
      } else {
        ones2++;
      }
    }
  }
  let ans1 = zeros1 === ones1 ? zeros1 : -1;
  let ans2 = zeros2 === ones2 ? zeros2 : -1;
  if (ans1 === -1 && ans2 === -1) {
    return -1;
  } else if (ans1 !== -1 && ans2 !== -1) {
    return Math.min(ans1, ans2);
  } else if (ans1 === -1) {
    return ans2;
  } else {
    return ans1;
  }
};

console.log(minSwaps('111000'));
console.log(minSwaps('010'));
console.log(minSwaps('1110'));
console.log(minSwaps('1111000'));
