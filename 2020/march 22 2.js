var getFactors = num => {
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
 * @param {number[]} nums
 * @return {number}
 */
var sumFourDivisors = function(nums) {
  const factorMap = {};
  const visited = {};
  let ans = 0;
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (visited[num]) {
      if (factorMap[num].length === 4) {
        ans = ans + factorMap[num].reduce((a, b) => a + b, 0);
      }
      continue;
    }
    if (factorMap[num]) {
      if (factorMap[num].length > 4) {
        continue;
      } else {
        const factors = getFactors(num);
        visited[num] = true;
        factorMap[num] = factors;
        if (factors.length === 4) {
          ans = ans + factorMap[num].reduce((a, b) => a + b, 0);
        }
      }
    } else {
      const factors = getFactors(num);
      visited[num] = true;
      factorMap[num] = factors;
      if (factors.length === 4) {
        ans = ans + factorMap[num].reduce((a, b) => a + b, 0);
      }
    }
  }
  // console.log('TCL: factorMap', factorMap);
  return ans;
};

console.log(sumFourDivisors([21, 4, 7]));
console.log(sumFourDivisors([8]));
console.log(sumFourDivisors([21, 4, 7, 8]));
console.log(sumFourDivisors([8, 8]));
