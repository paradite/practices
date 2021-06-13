// ring loop (circle) + sliding window

/**
 * @param {string} s
 * @return {number}
 */
var minFlips = function (s) {
  const map = {
    0: '1',
    1: '0',
  };
  const n = s.length;
  s += s;
  let a1 = [];
  let a2 = [];
  let one = '1';
  let zero = '0';
  for (let i = 0; i < s.length; i++) {
    a1.push(one);
    a2.push(zero);
    one = map[one];
    zero = map[zero];
  }

  let ans1 = 0;
  let ans2 = 0;
  let min = Infinity;
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== a1[i]) ans1++;
    if (s[i] !== a2[i]) ans2++;
    if (i >= n) {
      if (s[i - n] !== a1[i - n]) ans1--;
      if (s[i - n] !== a2[i - n]) ans2--;
    }
    if (i >= n - 1) {
      min = Math.min(min, ans1, ans2);
    }
  }
  return min;
};

console.log(minFlips('111000')); // 2
console.log(minFlips('010')); // 0
console.log(minFlips('1110')); // 1
console.log(minFlips('111001')); // 3
console.log(minFlips('01001001101')); // 2
console.log(minFlips('10100101011001111110')); // 10
console.log(minFlips('111000010100100110101011100001000001011100101')); // 18

// 010 01001 101
// 01001
// 01001 101 010
// 01010 101 010

// 10 1001010110011111 10
// 1001010110011111 10 10
// 0101010101010101 10 10

// "111000010100100110101011100001000001011100101"
