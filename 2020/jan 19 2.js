/**
 * @param {string} s
 * @return {string[]}
 */
var printVertically = function(s) {
  const words = s.split(' ');
  let max = 0;
  for (let i = 0; i < words.length; i++) {
    const w = words[i];
    if (w.length > max) {
      max = w.length;
    }
  }
  const arr = [];
  for (let i = 0; i < max; i++) {
    let result = '';
    for (let j = 0; j < words.length; j++) {
      const w = words[j][i] ? words[j][i] : ' ';
      result = result + w;
    }
    result = result.replace(/\s+$/, '');
    arr.push(result);
  }
  return arr;
};

console.log([printVertically('HOW ARE YOU')]);
console.log([printVertically('TO BE OR NOT TO BE')]);
console.log([printVertically('CONTEST IS COMING')]);
