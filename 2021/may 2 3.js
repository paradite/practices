function permute(permutation) {
  var length = permutation.length,
    result = new Set(permutation.join('')),
    c = new Array(length).fill(0),
    i = 1,
    k,
    p;

  while (i < length) {
    if (c[i] < i) {
      k = i % 2 && c[i];
      p = permutation[i];
      permutation[i] = permutation[k];
      permutation[k] = p;
      ++c[i];
      i = 1;
      result.add(permutation.join(''));
    } else {
      c[i] = 0;
      ++i;
    }
  }
  return Array.from(result);
}

const minSwapAdj = (s1, s2) => {
  let i = 0;
  let j = 0;
  let result = 0;
  while (i < s1.length) {
    // console.log('TCL ~ s1', s1.join(''));
    // console.log('TCL ~ s2', s2.join(''));
    // console.log('TCL ~ result', result);
    j = i;
    while (s1[j] !== s2[i]) {
      // console.log('TCL ~ s1[j]', s1[j]);
      // console.log('TCL ~ s2[i]', s2[i]);
      j += 1;
    }
    // console.log('TCL ~ i', i);
    // console.log('TCL ~ j', j);
    while (i < j) {
      let t = s1[j];
      s1[j] = s1[j - 1];
      s1[j - 1] = t;
      j -= 1;
      result++;
    }
    i += 1;
  }
  return result;
};

/**
 * @param {string} num
 * @param {number} k
 * @return {number}
 */
var getMinSwaps = function (num, k) {
  let originalNumber = Number(num);
  const validSet = new Set();
  for (let i = 1; i < num.length + 1; i++) {
    // console.log('TCL ~ validSet.size', validSet.size);
    if (validSet.size > k) {
      break;
    }
    const lastN = num.slice(num.length - i);
    const front = num.slice(0, num.length - i);
    // console.log('TCL ~ lastN', lastN);
    // console.log('TCL ~ front', front);
    const perms = permute(lastN.split(''));
    // console.log('TCL ~ perms', perms.length);
    for (let j = 0; j < perms.length; j++) {
      const lastNPerm = perms[j];
      const combined = front + lastNPerm;
      // console.log('TCL ~ combined', combined);
      if (Number(combined) > originalNumber) {
        validSet.add(combined);
      }
    }
  }
  const validArr = Array.from(validSet);
  validArr.sort((a, b) => Number(a) - Number(b));
  // console.log('TCL ~ validArr', validArr);
  // console.log('TCL ~ validArr', validArr[k - 1]);
  const resultArr = validArr[k - 1].split('');
  console.log('TCL ~ resultArr', resultArr.join(''));
  const originalArr = num.split('');
  console.log('TCL ~ originalArr', originalArr.join(''));
  return minSwapAdj(originalArr, resultArr);
};

console.log(getMinSwaps('5489355142', 4));
console.log(getMinSwaps('11112', 4));
console.log(getMinSwaps('00123', 1));
console.log(getMinSwaps('99499', 1));
console.log(getMinSwaps('32029466933338833', 558));
console.log(getMinSwaps('599225082764424508', 1000));

console.log([5, 9, 9, 2, 2, 5, 0, 8, 2, 7, 8, 4, 6, 2, 0, 4, 4, 5].join(''));
