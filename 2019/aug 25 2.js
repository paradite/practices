var f = function(s) {
  let ans = 0;
  let currentChar;
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (!currentChar || char < currentChar) {
      currentChar = char;
      ans = 1;
    } else if (char === currentChar) {
      ans++;
    }
  }
  return ans;
};

/**
 * @param {string[]} queries
 * @param {string[]} words
 * @return {number[]}
 */
var numSmallerByFrequency = function(queries, words) {
  const ansMap = [];
  for (let i = 0; i < words.length; i++) {
    const element = words[i];
    // console.log(element);
    const fren = f(element);
    for (let j = 0; j < fren; j++) {
      ansMap[j] = ansMap[j] ? ansMap[j] + 1 : 1;
    }
  }
  console.log(ansMap);
  let ans = [];
  for (let index = 0; index < queries.length; index++) {
    const element = queries[index];
    if (ansMap[f(element)]) {
      ans.push(ansMap[f(element)]);
    } else {
      ans.push(0);
    }
  }
  return ans;
};

// console.log(numSmallerByFrequency(['cbd'], ['zaaaz']));
// console.log(numSmallerByFrequency(['bbb', 'cc'], ['a', 'aa', 'aaa', 'aaaa']));
console.log(numSmallerByFrequency(['aabbabbb', 'abbbabaa', 'aabbbabaa', 'aabba', 'abb', 'a', 'ba', 'aa', 'ba', 'baabbbaaaa', 'babaa', 'bbbbabaa'], ['b', 'aaaba', 'aaaabba', 'aa', 'aabaabab', 'aabbaaabbb', 'ababb', 'bbb', 'aabbbabb', 'aab', 'bbaaababba', 'baaaaa']));
