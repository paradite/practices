// https://leetcode.com/contest/weekly-contest-140/problems/occurrences-after-bigram/
/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
var findOcurrences = function(text, first, second) {
  const ans = [];
  const tokens = text.split(' ');
  for (var i = 0; i < tokens.length - 2; i++) {
    // console.log(tokens[i]);
    if (tokens[i] === first) {
      if(tokens[i+1] === second) {
        ans.push(tokens[i+2]);
      }
    }
  }
  return ans;
};


console.log(findOcurrences('alice is a good girl she is a good student', 'a', 'good'));
console.log(findOcurrences('we will we will rock you', 'we', 'will'));