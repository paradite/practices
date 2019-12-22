/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
  if (n === 0) {
    return 0;
  }
  let sum = 0;
  let product = 1;
  let remainder = n % 10;
  while (n) {
    n = Math.floor(n / 10);
    // console.log('TCL: remainder', remainder);
    sum += remainder;
    product = product * remainder;
    remainder = n % 10;
    // n = Math.floor(n / 10);
  }
  // console.log('TCL: sum', sum);
  // console.log('TCL: product', product);
  return product - sum;
};

console.log(subtractProductAndSum(234));
console.log(subtractProductAndSum(4421));
console.log(subtractProductAndSum(705));
console.log(subtractProductAndSum(0));
