/**
 * @param {string} s
 * @return {string}
 */
var reformat = function(s) {
  const l = [];
  const n = [];
  for (let i = 0; i < s.length; i++) {
    const element = s[i];
    if ('0123456789'.includes(element)) {
      n.push(element);
    } else {
      l.push(element);
    }
  }
  if (Math.abs(l.length - n.length) > 1) {
    return '';
  }
  let ans = '';
  if (l.length > n.length) {
    for (var i = 0; i < n.length; i++) {
      ans = ans + l[i] + n[i];
    }
    ans = ans + l[i];
  } else if (n.length > l.length) {
    for (var i = 0; i < l.length; i++) {
      ans = ans + n[i] + l[i];
    }
    ans = ans + n[i];
  } else {
    for (var i = 0; i < n.length; i++) {
      ans = ans + n[i] + l[i];
    }
  }
  return ans;
};

console.log(reformat('a0b1c2'));
console.log(reformat('leetcode'));
console.log(reformat('1229857369'));
console.log(reformat('covid2019'));
console.log(reformat('abc12'));
console.log(reformat('ab123'));
