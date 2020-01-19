/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function(s) {
  s = s.split('');
  let arr = [];
  let cur = '';
  const letters = '0abcdefghijklmnopqrstuvwxyz';
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (char === '#') {
      // s.splice(i, 1);
      s.splice(i - 2, 0, '#');
      i++;
    }
  }
  // console.log('TCL: s', s);
  s = s.join('');
  // console.log('TCL: s', s);
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (char === '#') {
      const cur = s[i + 1] + s[i + 2];
      arr.push(letters[cur]);
      i += 3;
    } else {
      arr.push(letters[char]);
    }
  }
  return arr.join('');
};

console.log(freqAlphabets('10#11#12'));
console.log(freqAlphabets('1326#'));
console.log(freqAlphabets('25#'));
console.log(freqAlphabets('12345678910#11#12#13#14#15#16#17#18#19#20#21#22#23#24#25#26#'));
console.log(freqAlphabets('12#'));
