/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function (s) {
  let max = -1;
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    let count = 0;
    for (let j = i + 1; j < s.length; j++) {
      const char2 = s[j];
      // console.log('maxLengthBetweenEqualCharacters -> char char2', char, char2);
      // console.log('maxLengthBetweenEqualCharacters -> count', count);
      if (char === char2) {
        if (count > max) max = count;
        // console.log('maxLengthBetweenEqualCharacters -> count', count);
        // console.log('maxLengthBetweenEqualCharacters -> max', max);
        count++;
      } else {
        count++;
      }
    }
  }
  return max;
};

console.log(maxLengthBetweenEqualCharacters('mgntdygtxrvxjnwksqhxuxtrv'));
