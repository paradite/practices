/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  let min = Infinity;
  let ans = '';

  let start = 0;
  let end = 0;
  const expectedMap = {};
  const currMap = {};

  for (let i = 0; i < t.length; i++) {
    const char = t[i];
    if (expectedMap[char]) {
      expectedMap[char] = expectedMap[char] + 1;
    } else {
      expectedMap[char] = 1;
    }
  }

  // console.log('TCL ~ expectedMap', expectedMap);
  function isContained() {
    for (const key in expectedMap) {
      if (Object.hasOwnProperty.call(expectedMap, key)) {
        const count = expectedMap[key];
        if (!currMap[key] || currMap[key] < count) {
          return false;
        }
      }
    }
    return true;
  }

  while (end < s.length) {
    // console.log('TCL ~ currMap', currMap);
    const char = s[end];
    // console.log({ start, end, char });
    if (currMap[char]) {
      currMap[char] = currMap[char] + 1;
    } else {
      currMap[char] = 1;
    }
    if (!isContained()) {
      end++;
    } else {
      // contained
      // update ans
      if (end - start + 1 < min) {
        min = end - start + 1;
        ans = s.slice(start, end + 1);
      }
      // check if can move start
      let startChar = s[start];
      while (
        (!expectedMap[startChar] && currMap[startChar]) ||
        (currMap[startChar] && currMap[startChar] - 1 >= expectedMap[startChar])
      ) {
        // can move start
        currMap[startChar] = currMap[startChar] - 1;
        // console.log('TCL ~ start', start);
        start++;
        // console.log('TCL ~ start', start);
        startChar = s[start];
        // update ans
        if (end - start + 1 < min) {
          min = end - start + 1;
          ans = s.slice(start, end + 1);
        }
      }
      end++;
    }
  }

  // console.log('TCL ~ ans', ans);
  return ans;
};

console.log(minWindow('ADOBECODEBANC', 'ABC'));
console.log(minWindow('a', 'a'));
console.log(minWindow('a', 'aa'));
console.log(minWindow('aa', 'aa'));
console.log(minWindow('aba', 'aa'));
console.log(minWindow('baab', 'aa'));
console.log(minWindow('bbcaabdaaa', 'aa'));
console.log(minWindow('ADOBECODEBANC', 'ABCD'));
console.log(minWindow('ADOBECODEBANC', 'ABCDE'));
console.log(minWindow('ADOBECODEBANC', 'ABCDEA'));
