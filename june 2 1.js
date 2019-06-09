// https://leetcode.com/contest/weekly-contest-139/problems/greatest-common-divisor-of-strings/

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
  let s1 = str1;
  let s2 = str2;
  if (s1.length > s2.length) {
    let temp = s1;
    s1 = s2;
    s2 = temp;
  }
  let ans = '';
  for (var i = 0; i < s1.length; i++) {
    if(s1.length % (i + 1) !== 0 || s2.length % (i + 1) !== 0) {
      continue;
    }
    let p = s1.slice(0, i + 1);
    // console.log(p);
    // console.log(s1.length)
    // console.log(i)
    // console.log(s1.length / (i + 1))
    let gen1 = concatN(p, s1.length / (i + 1));
    let gen2 = concatN(p, s2.length / (i + 1));
    // console.log(gen1);
    // console.log(gen2);
    // console.log('===')
    if (gen1 === s1 && gen2 === s2) {
      if (p.length > ans.length) {
        ans = p;
      }
    }
  }
  return ans;
};

var concatN = function(s, n) {
  let res = '';
  // console.log('A' + 'A')
  // console.log(s)
  // console.log(s+s)
  while (n) {
    // console.log(s);
    res = res + s;
    n--;
  }
  return res;
}

console.log(gcdOfStrings('ABCABC', 'ABC'));
console.log('---');
console.log(gcdOfStrings('ABC', 'ABCABC'));
console.log('---');
console.log(gcdOfStrings('ABABAB', 'ABAB'));
console.log('---');
console.log(gcdOfStrings('LEET', 'CODE'));
console.log(gcdOfStrings('LELELELE', 'LELELELELELELELE'));
