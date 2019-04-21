// https://leetcode.com/contest/weekly-contest-126/problems/check-if-word-is-valid-after-substitutions/

/**
 * @param {string} S
 * @return {boolean}
 */
var isValid = function(S) {
  const valid = "abc";
  const baseRe = new RegExp(valid, "g");
  const valids = [valid];
  for (var i = 0; i < 10; i++) {
    valids.push(valids[i] + valid);
  }
  // console.log(valids);
  for (var i = valids.length - 1; i >= 0; i--) {
    const re = new RegExp(valids[i], "g");
    while (S.includes(valids[i])) {
      S = S.replace(baseRe, "");
      // console.log(S);
      S = S.replace(re, "");
      // console.log(S);
    }
  }
  // console.log(S);
  if (S.length === 0) {
    return true;
  }
  return false;
};

console.log(isValid("aabcbc"));
console.log(isValid("abcabcababcc"));
console.log(isValid("abccba"));
console.log(isValid("cababc"));
