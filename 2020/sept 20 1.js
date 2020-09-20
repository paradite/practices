/**
 * @param {string} text
 * @return {string}
 */
var reorderSpaces = function (text) {
  let words = [];
  let cur = '';
  let spaces = 0;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (c === ' ') {
      spaces++;
      if (cur.length > 0) {
        words.push(cur);
        cur = '';
      }
    } else {
      cur = cur + c;
    }
  }
  if (cur.length > 0) {
    words.push(cur);
  }
  if (words.length === 1) {
    let ans = words[0];
    while (spaces > 0) {
      ans = ans + ' ';
      spaces--;
    }
    return ans;
  }
  let width = Math.floor(spaces / (words.length - 1));
  // console.log('reorderSpaces -> width', width);
  let sep = '';
  while (width > 0) {
    sep = sep + ' ';
    width--;
  }
  let leftover = spaces % (words.length - 1);
  // console.log('reorderSpaces -> leftover', leftover);
  let ans = words.join(sep);
  while (leftover > 0) {
    ans = ans + ' ';
    leftover--;
  }
  return ans;
};

console.log(reorderSpaces('  this   is  a sentence '));
console.log(reorderSpaces(' practice   makes   perfect'));
console.log(reorderSpaces('hello   world'));
console.log(reorderSpaces('  walks  udp package   into  bar a'));
console.log(reorderSpaces('a'));
console.log(reorderSpaces('  hello'));

// https://leetcode.com/contest/weekly-contest-207/submissions/detail/398101069/
