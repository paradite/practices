/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  const map = {
    a: true,
    A: true,
    e: true,
    E: true,
    i: true,
    I: true,
    o: true,
    O: true,
    u: true,
    U: true,
  };

  const chars = [];
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (map[char]) {
      chars.push(char);
    }
  }

  chars.reverse();
  const resArr = [];
  let curr = 0;
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (map[char]) {
      resArr.push(chars[curr]);
      curr++;
    } else {
      resArr.push(char);
    }
  }
  return resArr.join('');
};

console.log(reverseVowels('hello'));
console.log(reverseVowels('leetcode'));
console.log(reverseVowels('UlauAobEae'));
console.log(reverseVowels('aA'));
