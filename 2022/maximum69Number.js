/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number = function (num) {
  const digits = String(num).split('');
  for (let i = 0; i < digits.length; i++) {
    const d = digits[i];
    if (d === '6') {
      digits[i] = '9';
      break;
    }
  }
  return Number(digits.join(''));
};
