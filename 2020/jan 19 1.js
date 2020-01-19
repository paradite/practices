/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number = function(num) {
  num = num + '';
  num = num.replace('6', '9');
  return +num;
};

console.log(maximum69Number(9669));
console.log(maximum69Number(9996));
console.log(maximum69Number(9999));
