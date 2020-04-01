/**
 * @param {number} n
 * @param {string} s1
 * @param {string} s2
 * @param {string} evil
 * @return {number}
 */
const mod = Math.pow(10, 9) + 7;
var findGoodStrings = function(n, s1, s2, evil) {
  if (s1.startsWith(evil) && s2.startsWith(evil)) return 0;
  let total = stringToNum(s2) - stringToNum(s1) + 1;
  console.log('findGoodStrings -> total', total);
  if (total <= 0) return 0;
  let actualDiff = n;
  for (let i = 0; i < n; i++) {
    if (s1[i] === s2[i]) {
      actualDiff--;
    } else {
      break;
    }
  }
  const remove = calEvil(s1, s2, evil, actualDiff);
  total = total - remove;
  console.log('findGoodStrings -> total', total);
  const s1Suf = s1.slice(-evil.length);
  const s2Suf = s2.slice(-evil.length);
  if (evil < s1Suf) {
    total--;
  }
  if (evil > s2Suf) {
    total--;
  }
  while (total < 0) {
    total = total + mod;
  }
  return total;
};

const calEvil = (s1, s2, evil, n) => {
  let num = 0;
  for (let i = 1; i <= n; i++) {
    if (i === n) {
      if (s1.charCodeAt(0) < evil.charCodeAt(0) && s2.charCodeAt(0) > evil.charCodeAt(0)) {
        const next = Math.pow(26, i - 1) - num;
        num = num + (next % mod);
      } else {
        const diff = s2.charCodeAt(0) - s1.charCodeAt(0);
        // console.log('calEvil -> diff', diff);
        const next = Math.pow(26, i - 2) * diff - num;
        // console.log('calEvil -> next', next);
        num = num + (next % mod);
      }
    } else {
      const next = Math.pow(26, i - 1) - num;
      num = num + (next % mod);
    }
  }
  console.log('calEvil -> num', num);
  return num;
};

const stringToNum = s => {
  let num = 0;
  for (let i = 0; i < s.length; i++) {
    const str = s[i];
    const next = (str.charCodeAt(0) - 97) * Math.pow(26, s.length - 1 - i);
    num = num + (next % mod);
  }
  return num;
};

console.log(findGoodStrings(2, 'aa', 'da', 'b'));
console.log(findGoodStrings(8, 'leetcode', 'leetgoes', 'leet'));
console.log(findGoodStrings(2, 'gx', 'gz', 'x'));
console.log(findGoodStrings(3, 'szc', 'zyi', 'p'));
