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

  console.log('TCL ~ init segments', segments);
  while (k > 0 && segments.length > 0) {
    [k, segments] = removeSegment(k, segments);
  }
  console.log('TCL ~ final segments', segments);

  let ans = getSegmentsLength(segments);

  return ans;
};

function removeSegment(k, segments) {
  let bestRatio = 0;
  let bestSegmentIndexStart = 0;
  let bestSegmentIndexEnd = 0;
  let minPartialRemove = Infinity;
  let removed = 0;
  let partialRemove = false;
  // single segments
  for (let i = 0; i < segments.length; i++) {
    const [seg, count] = segments[i];
    const length = getSegmentLength(count);
    const ratio = length / count;
    if (count <= k && ratio > bestRatio) {
      bestRatio = ratio;
      bestSegmentIndexStart = i;
      bestSegmentIndexEnd = i;
      removed = count;
      partialRemove = false;
    } else if (
      bestRatio === 0 &&
      count >= 10 &&
      count - 9 <= k &&
      count - 9 < minPartialRemove
    ) {
      minPartialRemove = count - 9;
      bestSegmentIndexStart = i;
      bestSegmentIndexEnd = i;
      removed = count - 9;
      partialRemove = true;
    } else if (bestRatio === 0) {
      removed = k;
      partialRemove = true;
    }
  }
  // merge blocking segments
  for (let i = 0; i < segments.length; i++) {
    let toRemove = 0;
    let lengthReduced = 0;
    const [leftSeg, leftCount] = segments[i];
    j = i + 1;
    let [nextSeg, nextCount] = segments[j] || [];
    while (j <= segments.length - 1 && nextSeg && nextSeg !== leftSeg) {
      toRemove += nextCount;
      lengthReduced += getSegmentLength(nextCount);
      j++;
      [nextSeg, nextCount] = segments[j] || [];
    }
    const mergeLengthReduced =
      getSegmentLength(leftCount) +
      getSegmentLength(nextCount) -
      getSegmentLength(leftCount + nextCount);
    // console.log('TCL ~ mergeLengthReduced', mergeLengthReduced);
    lengthReduced += mergeLengthReduced;
    if (toRemove > 0 && toRemove <= k) {
      const ratio = lengthReduced / toRemove;
      if (ratio > bestRatio) {
        bestRatio = ratio;
        bestSegmentIndexStart = i + 1;
        bestSegmentIndexEnd = j - 1;
        removed = toRemove;
        partialRemove = false;
      }
    }
  }
  if (partialRemove) {
    segments[bestSegmentIndexStart][1] =
      segments[bestSegmentIndexStart][1] - removed;
  } else {
    let removeIndex = bestSegmentIndexEnd;
    while (removeIndex >= bestSegmentIndexStart) {
      segments.splice(removeIndex, 1);
      removeIndex--;
    }
  }

  console.log('TCL ~ segments before merge', segments);
  mergeOneSegment(segments);
  console.log('TCL ~ segments after merge', segments);

  return [k - removed, segments];
}

function mergeOneSegment(segments) {
  for (let i = 0; i < segments.length - 1; i++) {
    const [seg, segcount] = segments[i];
    const [seg2, seg2count] = segments[i + 1];
    if (seg == seg2) {
      segments.splice(i + 1, 1);
      segments[i][1] = segcount + seg2count;
      return;
    }
  }
}

function getSegmentLength(count) {
  return count === 1 ? 1 : count >= 10 ? 3 : 2;
}

function getSegmentsLength(segments) {
  return segments.reduce((sum, [segment, count]) => {
    return sum + getSegmentLength(count);
  }, 0);
}

// console.log(getLengthOfOptimalCompression('aaabcccd', 2)); // 4
// console.log(getLengthOfOptimalCompression('aabbaa', 2)); // 2
// console.log(getLengthOfOptimalCompression('aaaaaaaaaaa', 0)); // 3
// console.log(getLengthOfOptimalCompression('aabaabbcbbbaccc', 6)); // 4
console.log(getLengthOfOptimalCompression('aaaabbab', 3)); // 2
// console.log(getLengthOfOptimalCompression('aabaabbcbbbaccc', 15));
// console.log(getLengthOfOptimalCompression('aabaabbcbbbaccc', 16));
// console.log(getLengthOfOptimalCompression('aaaaaaaaaaa', 2));
// console.log(getLengthOfOptimalCompression('aaaaaaabaaa', 4));
// console.log(getLengthOfOptimalCompression('aaaaaaabaaa', 1));
// console.log(getLengthOfOptimalCompression('aaaaaaabaaa', 0));

// aabbbaacc a2b3a a4c2
// aabbaaccaaddaaee
