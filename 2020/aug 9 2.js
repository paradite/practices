/**
 * @param {number} n
 * @param {number} k
 * @return {character}
 */
var findKthBit = function (n, k) {
  let steps = [1];
  // find length of Nth string
  for (let i = 1; i <= 20; i++) {
    steps[i] = steps[i - 1] * 2 + 1;
  }
  // find function keeps track of whether we need to invert the bit
  const find = (n, k, invert) => {
    if (n === 1) {
      if (invert) return '1';
      return '0';
    }
    let step = n - 1;
    if (k <= (steps[step] - 1) / 2) {
      return find(n - 1, k, invert);
    } else if (k === (steps[step] - 1) / 2 + 1) {
      if (invert) return '0';
      return '1';
    } else {
      // calculate the previous position in N-1 string
      const prevPos = steps[step - 1] - (k - steps[step - 1] - 1) + 1;
      return find(n - 1, prevPos, !invert);
    }
  };
  return find(n, k, false);
};

console.log(findKthBit(3, 1));
console.log(findKthBit(3, 2));
console.log(findKthBit(3, 3));
console.log(findKthBit(3, 4));
console.log(findKthBit(3, 5));
console.log(findKthBit(3, 6));
console.log(findKthBit(3, 7));
