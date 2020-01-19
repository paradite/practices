/**
 * @param {number} n
 * @param {number} start
 * @return {number[]}
 */
var circularPermutation = function(n, start) {
  const validDiff = (a, b) => {
    let diff = false;
    const ab = createBinaryString(a);
    const bb = createBinaryString(b);
    for (let i = 0; i < ab.length; i++) {
      if (ab[i] !== bb[i]) {
        if (diff) {
          return false;
        } else {
          diff = true;
        }
      }
    }
    return diff === true;
  };
  const gen = a => {
    let gened = [];
    const ab = createBinaryString(a);
    // console.log('TCL: ab', ab);
    for (let i = 0; i < ab.length; i++) {
      if (ab[i] === '0') {
        gened.push(parseInt(ab.substring(0, i) + '1' + ab.substring(i + 1, ab.length), 2));
      } else {
        gened.push(parseInt(ab.substring(0, i) + '0' + ab.substring(i + 1, ab.length), 2));
      }
    }
    return gened;
  };
  // const dfs = (current, remaining, layer) => {
  //   if (remaining.size === 0) {
  //     if (validDiff(start, current)) {
  //       return [current];
  //     }
  //     return -1;
  //   }
  //   const gened = gen(current);

  //   for (let i = 0; i < gened.length; i++) {
  //     const element = gened[i];
  //     if (remaining.has(element)) {
  //       remaining.delete(element);
  //       const result = dfs(element, remaining, layer + 1);
  //       if (result !== -1) {
  //         return [current, ...result];
  //       }
  //       remaining.add(element);
  //     }
  //   }
  //   return -1;
  // };

  let remaining = new Set();
  for (let i = 0; i < Math.pow(2, n); i++) {
    remaining.add(i);
  }
  remaining.delete(start);
  let current = [start];
  let stack = [];
  stack.push([current, remaining]);
  while (stack.length !== 0) {
    // console.log('TCL: stack.length', stack.length);
    [current, remaining] = stack.pop();
    // console.log('TCL: stack', stack);
    if (remaining.size === 0) {
      if (validDiff(start, current[current.length - 1])) {
        return current;
      }
    }

    const gened = gen(current[current.length - 1]);
    for (let i = 0; i < gened.length; i++) {
      const element = gened[i];
      if (remaining.has(element)) {
        const newRemaining = new Set(remaining);
        newRemaining.delete(element);
        stack.push([[...current, element], newRemaining]);
      }
    }
  }
};

function createBinaryString(nMask) {
  // nMask must be between -2147483648 and 2147483647
  for (var nFlag = 0, nShifted = nMask, sMask = ''; nFlag < 32; nFlag++, sMask += String(nShifted >>> 31), nShifted <<= 1);
  return sMask;
}

console.log(circularPermutation(2, 3));
console.log(circularPermutation(3, 2));
console.log(circularPermutation(4, 2));
console.log(circularPermutation(5, 2));
console.log(circularPermutation(8, 2));
// console.log(circularPermutation(6, 2).length);
