const mod = Math.pow(10, 9) + 7;
const modBig = BigInt(mod);

// calculate power with modulo using divide and conquer
function powerMod(base, exponent, mod) {
  if (exponent === 0) {
    return 1;
  }
  // if (exponent === 1) {
  //   return base;
  // }
  let value = powerMod(base, Math.floor(exponent / 2), mod);
  const bigValue = BigInt(value);
  const bigValueSquare = (bigValue * bigValue) % BigInt(mod);
  if (exponent % 2 === 1) {
    return Number(((bigValueSquare % modBig) * BigInt(base)) % modBig);
  } else if (exponent % 2 === 0) {
    return Number(bigValueSquare) % mod;
  }
  return value;
}

/**
 * @param {number} n
 * @return {number}
 */
var countGoodNumbers = function (n) {
  const firstCount = Math.ceil(n / 2);
  const secondCount = n - firstCount;
  let ans = 1n;
  ans = (ans * BigInt(powerMod(5, firstCount, mod))) % modBig;
  ans = (ans * BigInt(powerMod(4, secondCount, mod))) % modBig;
  return Number(ans);
};

console.log(countGoodNumbers(1));
console.log(countGoodNumbers(4));
console.log(countGoodNumbers(50));
console.log(countGoodNumbers(806166225460393));
