// 111000
// 1100
// 1000
// 1010

// 111001

/**
 * @param {string} s
 * @return {number}
 */
var minFlips = function (s) {
  // console.log(s.length);

  const map = {
    0: '1',
    1: '0',
  };
  const getDiff = (start, str, pre, suf) => {
    // console.log('TCL ~ str', str);
    // console.log('TCL ~ start', start);
    const preValid = start !== pre || pre === undefined;
    let count = 0;
    let i = 0;
    for (; i < str.length; i++) {
      const element = str[i];
      if (element !== start) {
        count++;
      }
      start = map[start];
    }
    // console.log('TCL ~ start', start);
    // console.log('TCL ~ str[i]', str[i - 1]);
    const sufValid = start === str[i - 1] || suf === undefined;
    // console.log('TCL ~ preValid', preValid);
    // console.log('TCL ~ sufValid', sufValid);
    console.log('TCL ~ count', count);
    if (sufValid || preValid) {
      return count;
    } else {
      return Infinity;
    }
  };

  const withoutRemoval = Math.min(getDiff('1', s), getDiff('0', s));
  // console.log('TCL ~ withoutRemoval', withoutRemoval);

  let alt = s[0];
  let pre = s[0];
  let suf = s[s.length - 1];
  while (s[0] !== s[s.length - 1] && s[0] === alt) {
    pre = s[0];
    suf = s[s.length - 1];
    s = s.substring(1, s.length - 1);
    alt = map[alt];
  }
  // console.log('TCL ~ alt', alt);
  // console.log('TCL ~ map[alt]', map[alt]);
  // console.log('TCL ~ s', s);
  // console.log('TCL ~ getDiff(alt, s)', getDiff(alt, s));
  // console.log('TCL ~ getDiff(map[alt], s)', getDiff(map[alt], s));
  return Math.min(
    getDiff(alt, s, pre, suf),
    getDiff(map[alt], s, pre, suf),
    withoutRemoval
  );
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
