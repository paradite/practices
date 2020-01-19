/**
 * @param {number} n
 * @return {number}
 */
var numPrimeArrangements = function(n) {
  const primes = [2];
  const mod = Math.pow(10, 9) + 7;
  for (let index = 3; index <= n; index++) {
    let isPrime = true;
    for (let j = 0; j < primes.length; j++) {
      const prime = primes[j];
      if (index % prime === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      primes.push(index);
    }
  }
  // console.log(primes);
  let ans = 1;
  if (n === 1) {
    return 1;
  }
  let nonPrimes = n - primes.length;
  for (let index = 1; index <= primes.length; index++) {
    ans = (ans * index) % mod;
  }
  for (let index = 1; index <= nonPrimes; index++) {
    ans = (ans * index) % mod;
  }
  return ans;
};

console.log(numPrimeArrangements(1));
console.log(numPrimeArrangements(2));
console.log(numPrimeArrangements(3));
console.log(numPrimeArrangements(4));
console.log(numPrimeArrangements(5));
console.log(numPrimeArrangements(100));
