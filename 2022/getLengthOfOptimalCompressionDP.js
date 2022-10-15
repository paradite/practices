/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLengthOfOptimalCompression = function (s, k) {
  let segments = [];
  let segment = '';
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (segment === '') {
      segment = char;
      count = 1;
    } else if (char === segment) {
      count++;
    } else {
      segments.push([segment, count]);
      segment = char;
      count = 1;
    }
  }
  segments.push([segment, count]);

  // console.log('TCL ~ init segments', segments);

  // dp[i][j][k] => [total length, j count] at i position, ending with char j, left with k removal
  dp = [];
  dp[0] = {};
  const [segChar, segCount] = segments[0];
  dp[0][segChar] = [];
  dp[0][segChar][k] = [getSegmentLength(segCount), segCount];
  if (segCount <= k) {
    dp[0][segChar][k - segCount] = [0, 0];
  }
  let currTotalLength = getSegmentLength(segCount);
  const diffToOneDigit = segCount - 9;
  // console.log('TCL ~ diffToOneDigit', diffToOneDigit);
  if (diffToOneDigit > 0 && k >= diffToOneDigit) {
    dp[0][segChar][k - diffToOneDigit] = [
      currTotalLength - 1,
      segCount - diffToOneDigit,
    ];
  }

  for (let i = 1; i < segments.length; i++) {
    const [segChar, segCount] = segments[i];
    currTotalLength += getSegmentLength(segCount);
    dp[i] = {};
    dp[i][segChar] = [];
    dp[i][segChar][k] = [currTotalLength, segCount];
    const diffToOneDigit = segCount - 9;
    // console.log('TCL ~ diffToOneDigit', diffToOneDigit);
    if (diffToOneDigit > 0 && k >= diffToOneDigit) {
      dp[i][segChar][k - diffToOneDigit] = [
        currTotalLength - 1,
        segCount - diffToOneDigit,
      ];
    }
    // console.log('TCL ~ iiiiiii', i);
    for (const prevChar in dp[i - 1]) {
      if (Object.hasOwnProperty.call(dp[i - 1], prevChar)) {
        if (!dp[i][prevChar]) {
          dp[i][prevChar] = [];
        }
        const removalArr = dp[i - 1][prevChar];
        // console.log('TCL ~ dp[i - 1][prevChar]', dp[i - 1][prevChar]);
        for (let j = 0; j < removalArr.length; j++) {
          // console.log('TCL ~ prevChar j', prevChar, j);
          // console.log('TCL ~ start dp[i][segChar][j]', dp[i][segChar][j]);
          if (removalArr[j]) {
            const [prevTotalLength, prevSegCount] = removalArr[j];
            // left over j removal
            if (j >= segCount) {
              // can remove, update current dp prevChar with removal
              // console.log('remove current');
              if (
                !dp[i][prevChar][j - segCount] ||
                (dp[i][prevChar][j - segCount] &&
                  prevTotalLength < dp[i][prevChar][j - segCount])
              ) {
                dp[i][prevChar][j - segCount] = [prevTotalLength, prevSegCount];
              }
            }
            // console.log('TCL ~ mid dp[i][segChar][j]', dp[i][segChar][j]);

            // partial removal
            const diffToOneDigit = segCount - 9;
            if (diffToOneDigit > 0 && j >= diffToOneDigit) {
              // console.log('remove partial');
              const newLength = prevTotalLength + 2;
              dp[i][segChar][j - diffToOneDigit] = [newLength, 9];
            }

            // do not remove, check if better than current segChar
            if (dp[i][segChar][j]) {
              // console.log('dont remove have existing');
              // have existing record
              if (prevChar === segChar) {
                const additionalLength = prevSegCount
                  ? getSegmentLength(prevSegCount + segCount) -
                    getSegmentLength(prevSegCount)
                  : getSegmentLength(segCount);
                const newTotalLength = prevTotalLength + additionalLength;
                if (newTotalLength < dp[i][segChar][j][0]) {
                  dp[i][segChar][j] = [newTotalLength, prevSegCount + segCount];
                } else if (
                  newTotalLength === dp[i][segChar][j][0] &&
                  prevSegCount + segCount > dp[i][segChar][j][1]
                ) {
                  dp[i][segChar][j] = [newTotalLength, prevSegCount + segCount];
                }
              } else {
                // different char
                const additionalLength = getSegmentLength(segCount);
                const newTotalLength = prevTotalLength + additionalLength;
                if (newTotalLength < dp[i][segChar][j][0]) {
                  dp[i][segChar][j] = [newTotalLength, segCount];
                } else if (
                  newTotalLength === dp[i][segChar][j][0] &&
                  segCount > dp[i][segChar][j][1]
                ) {
                  dp[i][segChar][j] = [newTotalLength, segCount];
                }
              }
            } else {
              // console.log('dont remove no existing');
              // no existing record
              if (prevChar === segChar) {
                const additionalLength = prevSegCount
                  ? getSegmentLength(prevSegCount + segCount) -
                    getSegmentLength(prevSegCount)
                  : getSegmentLength(segCount);
                // console.log('TCL ~ prevSegCount', prevSegCount);
                // console.log('TCL ~ segCount', segCount);
                // console.log('TCL ~ additionalLength', additionalLength);
                const newTotalLength = prevTotalLength + additionalLength;
                // console.log('TCL ~ newTotalLength', newTotalLength);
                dp[i][segChar][j] = [newTotalLength, prevSegCount + segCount];
              } else {
                const additionalLength = getSegmentLength(segCount);
                const newTotalLength = prevTotalLength + additionalLength;
                // console.log('not same', newTotalLength, segCount);
                dp[i][segChar][j] = [newTotalLength, segCount];
              }
            }
          }
          // console.log('TCL ~ end dp[i][segChar]', dp[i][segChar]);
        }
      }
    }
    // console.log('TCL ~ dp[i]', dp[i]);
  }
  // console.log('TCL ~ dp', dp);
  // for (const key in dp) {
  //   if (Object.hasOwnProperty.call(dp, key)) {
  //     const element = dp[key];
  //     console.log('dp ', key, dp[key]);
  //   }
  // }
  // console.log('TCL ~ dp', JSON.stringify(dp, null));

  let ans = getSegmentsLength(segments);

  const last = dp[segments.length - 1];
  for (const key in last) {
    if (Object.hasOwnProperty.call(last, key)) {
      const charRemovalArr = last[key];
      for (let i = 0; i < charRemovalArr.length; i++) {
        if (charRemovalArr[i]) {
          const [length] = charRemovalArr[i];
          if (length < ans) {
            ans = length;
          }
        }
      }
    }
  }

  return ans;
};

function mergeOneSegment(segments) {
  for (let i = 0; i < segments.length - 1; i++) {
    const [seg, segCount] = segments[i];
    const [seg2, seg2count] = segments[i + 1];
    if (seg == seg2) {
      segments.splice(i + 1, 1);
      segments[i][1] = segCount + seg2count;
      return;
    }
  }
}

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
// console.log(getLengthOfOptimalCompression('llllllllllttttttttttt', 3)); // 4
// console.log(getLengthOfOptimalCompression('lllllllllllttttttttttt', 1)); // 6
// console.log(getLengthOfOptimalCompression('aabaabbcbbbaccc', 15));
// console.log(getLengthOfOptimalCompression('aabaabbcbbbaccc', 16));
// console.log(getLengthOfOptimalCompression('aaaaaaaaaaa', 2));
// console.log(getLengthOfOptimalCompression('aaaaaaabaaa', 4));
// console.log(getLengthOfOptimalCompression('aaaaaaabaaa', 1));
// console.log(getLengthOfOptimalCompression('aaaaaaabaaa', 0));

// aabbbaacc a2b3a a4c2
// aabbaaccaaddaaee
