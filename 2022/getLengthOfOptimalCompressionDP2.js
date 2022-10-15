/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLengthOfOptimalCompression = function (s, k) {
  // dp[i][j][k][l] => [total length] at i position, ending with char j, left with k removal, with j count
  dp = [];
  dp[0] = {};
  const char = s[0];
  dp[0][char] = [];
  dp[0][char][k] = [];
  dp[0][char][k][1] = 1;
  dp[0][char][k - 1] = [];
  dp[0][char][k - 1].push(0);
  currTotalLength = 1;

  for (let i = 1; i < s.length; i++) {
    // console.log('TCL ~ i', i);
    const char = s[i];
    currTotalLength += 1;
    dp[i] = {};
    dp[i][char] = [];
    for (const prevChar in dp[i - 1]) {
      if (Object.hasOwnProperty.call(dp[i - 1], prevChar)) {
        if (!dp[i][prevChar]) {
          dp[i][prevChar] = [];
        }
        for (let j = 0; j < dp[i - 1][prevChar].length; j++) {
          if (dp[i - 1][prevChar][j]) {
            if (!dp[i][char][j]) {
              dp[i][char][j] = [];
            }
            for (let k = 0; k < dp[i - 1][prevChar][j].length; k++) {
              if (dp[i - 1][prevChar][j][k] >= 0) {
                const prevSegCount = k;
                const prevTotalLength = dp[i - 1][prevChar][j][k];
                // left over j removal
                if (j >= 1) {
                  // can remove, update current dp prevChar with removal
                  if (!dp[i][prevChar]) {
                    dp[i][prevChar] = [];
                  }
                  if (!dp[i][prevChar][j - 1]) {
                    dp[i][prevChar][j - 1] = [];
                  }
                  if (
                    !dp[i][prevChar][j - 1][k] ||
                    (dp[i][prevChar][j - 1][k] &&
                      prevTotalLength < dp[i][prevChar][j - 1][k])
                  ) {
                    dp[i][prevChar][j - 1][k] = prevTotalLength;
                  }
                }
                // do not remove, check if better than current segChar
                if (prevChar === char) {
                  // same char
                  const additionalLength = prevSegCount
                    ? getSegmentLength(prevSegCount + 1) -
                      getSegmentLength(prevSegCount)
                    : getSegmentLength(1);
                  const newTotalLength = prevTotalLength + additionalLength;
                  if (dp[i][char][j][k + 1]) {
                    if (newTotalLength < dp[i][char][j][k + 1]) {
                      dp[i][char][j][k + 1] = newTotalLength;
                    }
                  } else {
                    dp[i][char][j][k + 1] = newTotalLength;
                  }
                } else {
                  // different char
                  const additionalLength = getSegmentLength(1);
                  const newTotalLength = prevTotalLength + additionalLength;
                  if (dp[i][char][j][1]) {
                    if (newTotalLength < dp[i][char][j][1]) {
                      dp[i][char][j][1] = newTotalLength;
                    }
                  } else {
                    dp[i][char][j][1] = newTotalLength;
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  let ans = Infinity;

  const last = dp[s.length - 1];
  for (const key in last) {
    if (Object.hasOwnProperty.call(last, key)) {
      const charRemovalArr = last[key];
      for (let i = 0; i < charRemovalArr.length; i++) {
        if (charRemovalArr[i]) {
          const jLengths = charRemovalArr[i];
          for (let j = 0; j < jLengths.length; j++) {
            const length = jLengths[j];
            if (length < ans) {
              ans = length;
            }
          }
        }
      }
    }
  }

  return ans;
};

function getSegmentLength(count) {
  return count === 1 ? 1 : count >= 10 ? (count >= 100 ? 4 : 3) : 2;
}

function getSegmentsLength(segments) {
  return segments.reduce((sum, [segment, count]) => {
    return sum + getSegmentLength(count);
  }, 0);
}

console.log(getLengthOfOptimalCompression('aaabcccd', 2)); // 4
console.log(getLengthOfOptimalCompression('aabbaa', 2)); // 2
console.log(getLengthOfOptimalCompression('aaaaaaaaaaa', 0)); // 3
console.log(getLengthOfOptimalCompression('aabaabbcbbbaccc', 6)); // 4
console.log(getLengthOfOptimalCompression('aaaabbab', 3)); // 2
console.log(getLengthOfOptimalCompression('llllllllllttttttttt', 1)); // 4
console.log(getLengthOfOptimalCompression('llllllllllttttttttt', 2)); // 4
console.log(getLengthOfOptimalCompression('lllllllllltttttttttt', 1)); // 5
console.log(getLengthOfOptimalCompression('lllllllllltttttttttt', 2)); // 4
console.log(getLengthOfOptimalCompression('dbacbcdccbbd', 9)); // 2
console.log(
  getLengthOfOptimalCompression(
    'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
    0
  )
); // 4
// prettier-ignore
console.log(getLengthOfOptimalCompression("aaabaaabaababbaaaabbbabaaabbabbaabaaabbabbbaaaaaaababaabbbbbbbaabbbbbabaaabaaabbbababba", 31)); // 8
// prettier-ignore
console.log(getLengthOfOptimalCompression("aaabaaaabbbaaabbbbbbbbbaaababbbbabbbabbbbbaaaaabab", 8)); // 12
console.log(getLengthOfOptimalCompression('llllllllllttttttttttt', 3)); // 4
console.log(getLengthOfOptimalCompression('lllllllllllttttttttttt', 1)); // 6
// console.log(getLengthOfOptimalCompression('aab', 15));
console.log(getLengthOfOptimalCompression('aabaabbcbbbaccc', 15));
console.log(getLengthOfOptimalCompression('aabaabbcbbbaccc', 16));
console.log(getLengthOfOptimalCompression("bababbaba", 1)); // 7

// console.log(getLengthOfOptimalCompression('aaaaaaaaaaa', 2));
// console.log(getLengthOfOptimalCompression('aaaaaaabaaa', 4));
// console.log(getLengthOfOptimalCompression('aaaaaaabaaa', 1));
// console.log(getLengthOfOptimalCompression('aaaaaaabaaa', 0));

// aabbbaacc a2b3a a4c2
// aabbaaccaaddaaee

// aaabaaaabbbaaabbbbbbbbbaaababbbbabbbabbbbbaaaaabab
// aaa aaaa   aaabbbbbbbbbaaab bbbb bbb bbbbbaaaaa ab
// aaa aaaabbbaaabbbbbbbbb   b bbbb bbb bbbbbaaaaa ab

// prettier-ignore
// console.log(getSegmentsLength(getSegments('aaaaaaabbbaaabbbbbbbbbbbbbbbbbbbbbbaaaaaab')));
// console.log(getSegmentsLength(getSegments('aaaaaaaaaabbbbbbbbbaaab')));
// console.log(getSegmentsLength(getSegments('aaaaaaabbbaaabbbbbbbbbb')));
