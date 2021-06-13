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
  const getDiff = (start, str, skipped) => {
    console.log('TCL ~ str start skipped', str, start, skipped);
    let count = 0;
    let i = 0;
    for (; i < str.length; i++) {
      const element = str[i];
      if (element !== start) {
        if (!skipped) {
          const skippedCount = getDiff(
            start,
            str.substring(i + 1, str.length),
            true
          );
          const nonSkippedCount =
            getDiff(map[start], str.substring(i + 1, str.length), false) + 1;
          console.log('TCL ~ skippedCount', skippedCount);
          console.log('TCL ~ nonSkippedCount', nonSkippedCount);
          return count + Math.min(skippedCount, nonSkippedCount);
        } else {
          count++;
        }
      }
      start = map[start];
    }
    return count;
  };

  // console.log("TCL ~ getDiff('1', s, false)", getDiff('1', s, false));
  // console.log("TCL ~ getDiff('0', s, false)", getDiff('0', s, false));
  return Math.min(getDiff('1', s, false), getDiff('0', s, false));
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
