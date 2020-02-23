var factors = num => {
  let fac = [],
    i = 1,
    ind = 0;

  while (i <= Math.floor(Math.sqrt(num))) {
    //inserting new elements in the middle using splice
    if (num % i === 0) {
      fac.splice(ind, 0, i);
      if (i != num / i) {
        fac.splice(-ind, 0, num / i);
      }
      ind++;
    }
    i++;
  }

  //swapping first and last elements
  let temp = fac[fac.length - 1];
  fac[fac.length - 1] = fac[0];
  fac[0] = temp;

  // nice sorted array of factors
  return fac;
};

/**
 * @param {number} num
 * @return {number[]}
 */
var closestDivisors = function(num) {
  let min = num;
  let ans = [1, num + 1];
  const factorsArr2 = factors(num + 2);
  for (let i = 0; i <= factorsArr2.length; i++) {
    const factor = factorsArr2[i];
    const diff = Math.abs((num + 2) / factor - factor);
    if (diff < min) {
      min = diff;
      ans = [(num + 2) / factor, factor];
      // console.log('TCL: ans', ans);
      // console.log('TCL: diff', diff);
    }
  }
  const factorsArr1 = factors(num + 1);
  for (let i = 0; i <= factorsArr1.length; i++) {
    const factor = factorsArr1[i];
    const diff = Math.abs((num + 1) / factor - factor);
    if (diff < min) {
      min = diff;
      ans = [(num + 1) / factor, factor];
      // console.log('TCL: ans', ans);
      // console.log('TCL: diff', diff);
    }
  }
  return ans;
};

console.log(closestDivisors(8));
console.log(closestDivisors(123));
console.log(closestDivisors(999));
// console.log(factors(688427155));
console.log(closestDivisors(688427155));
