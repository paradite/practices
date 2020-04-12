/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function(words) {
  let ans = [];
  for (let i = 0; i < words.length; i++) {
    const w = words[i];
    for (let j = 0; j < words.length; j++) {
      if (i === j) continue;
      if (words[j].includes(w)) {
        ans.push(w);
        break;
      }
    }
  }
  return ans;
};

console.log(stringMatching(['mass', 'as', 'hero', 'superhero']));
console.log(stringMatching(['leetcode', 'et', 'code']));
console.log(stringMatching(['blue', 'green', 'bu']));
console.log(stringMatching(['leetcoder', 'leetcode', 'od', 'hamlet', 'am']));
