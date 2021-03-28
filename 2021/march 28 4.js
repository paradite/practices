const mod = Math.pow(10, 9) + 7;

/**
 * @param {number} primeFactors
 * @return {number}
 */
var maxNiceDivisors = function (primeFactors) {
  const groupsOf = Math.ceil(Math.sqrt(primeFactors));
  console.log('TCL ~ groupsOf', groupsOf);
  let arr = [];
  const groups = Math.floor(primeFactors / groupsOf);
  for (let i = 0; i < groups; i++) {
    arr.push(groupsOf);
  }
  arr.push(primeFactors - groupsOf * groups);
  console.log('TCL ~ arr', arr);
  const product = arr.reduce((prev, curr) => {
    return prev * curr;
  }, 1);
  // console.log('TCL ~ product', product);
  return product % mod;
};

console.log(maxNiceDivisors(5));
console.log(maxNiceDivisors(8));
console.log(maxNiceDivisors(18));
console.log(maxNiceDivisors(20000));
