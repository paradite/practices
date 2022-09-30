/**
 * @param {number[][]} buildings
 * @return {number[][]}
 */
var getSkyline = function (buildings) {
  let min = Infinity;
  let max = 0;
  const maxHeight = [];

  for (let i = 0; i < buildings.length; i++) {
    const [x1, x2, height] = buildings[i];
    if (x1 < min) min = x1;
    if (x2 > max) max = x2;
  }

  const allValidSegments = [];
  for (let i = 0; i < buildings.length; i++) {
    const validSegments = getValidSegments(buildings[i], buildings);
    // console.log('TCL ~ buildings[i]', buildings[i]);
    // console.log('TCL ~ validSegments', validSegments);
    allValidSegments.push(...validSegments);
  }

  allValidSegments.sort((a, b) => a[0] - b[0]);
  // console.log('TCL ~ allValidSegments', allValidSegments);

  const res = [];
  res.push([allValidSegments[0][0], allValidSegments[0][2]]);
  let prevHeight = allValidSegments[0][2];
  let prevEnd = allValidSegments[0][1];
  for (let i = 1; i < allValidSegments.length; i++) {
    const [start, end, height] = allValidSegments[i];
    if (start > prevEnd) {
      res.push([prevEnd, 0]);
    }
    if (height !== prevHeight) {
      res.push([start, height]);
    }
    prevEnd = end;
    prevHeight = height;
  }
  res.push([max, 0]);
  return res;
};

function getValidSegments(segment, segments) {
  // console.log('TCL ~ segment', segment);
  const invalidSegments = [];
  let [start, end, height] = segment;
  for (let i = 0; i < segments.length; i++) {
    const [ostart, oend, oheight] = segments[i];
    if (oheight > height) {
      if (invalidSegments.length > 0) {
        let found = false;
        for (let j = 0; j < invalidSegments.length; j++) {
          const [invalidStart, invalidEnd] = invalidSegments[j];
          if (ostart >= invalidStart && ostart <= invalidEnd) {
            invalidSegments[j][1] = Math.max(oend, invalidEnd);
            found = true;
            break;
          } else if (oend >= invalidStart && oend <= invalidEnd) {
            invalidSegments[j][0] = Math.min(ostart, invalidStart);
            found = true;
            break;
          }
        }
        if (!found) {
          invalidSegments.push([ostart, oend]);
        }
      } else {
        invalidSegments.push([ostart, oend]);
      }
    }
  }

  // trim start and end and filter out inside
  const invalidSegmentsInside = [];
  for (let i = 0; i < invalidSegments.length; i++) {
    const [invalidStart, invalidEnd] = invalidSegments[i];
    if (invalidStart <= start && invalidEnd >= end) {
      // whole segment invalid
      return [];
    } else if (
      invalidEnd >= start &&
      invalidEnd <= end &&
      invalidStart <= start
    ) {
      start = invalidEnd;
    } else if (
      invalidStart >= start &&
      invalidStart <= end &&
      invalidEnd >= end
    ) {
      end = invalidStart;
    } else if (invalidStart > start && invalidEnd < end) {
      invalidSegmentsInside.push(invalidSegments[i]);
    }
  }
  // console.log('TCL ~ [start,end]', [start, end]);
  // console.log('TCL ~ invalidSegmentsInside', invalidSegmentsInside);
  if (invalidSegmentsInside.length === 0) {
    return [[start, end, height]];
  } else {
    const res = [[start, invalidSegmentsInside[0][0], height]];
    for (let i = 0; i < invalidSegmentsInside.length - 1; i++) {
      const [_start, endi] = invalidSegmentsInside[i];
      const [starti, _end] = invalidSegmentsInside[i + 1];
      res.push([endi, starti, height]);
    }
    res.push([
      invalidSegmentsInside[invalidSegmentsInside.length - 1][1],
      end,
      height,
    ]);
    return res;
  }
}

// prettier-ignore
console.log(getSkyline([[2,9,10],[3,7,15],[5,12,12],[15,20,10],[19,24,8]]));
// [[2,10],[3,15],[7,12],[12,0],[15,10],[20,8],[24,0]]
// prettier-ignore
console.log(getSkyline([[0,2,3],[2,5,3]]));
// [[0,3],[5,0]]
// prettier-ignore
console.log(getSkyline([[3,7,8],[3,8,7],[3,9,6],[3,10,5],[3,11,4],[3,12,3],[3,13,2],[3,14,1]]));
// [[3,8],[7,7],[8,6],[9,5],[10,4],[11,3],[12,2],[13,1],[14,0]]
// prettier-ignore
console.log(getSkyline([[2,4,70],[3,8,30],[6,100,41],[7,15,70],[10,30,102],[15,25,76],[60,80,91],[70,90,72],[85,120,59]]));
// [[2,70],[4,30],[6,41],[7,70],[10,102],[30,41],[60,91],[80,72],[90,59],[120,0]]

// console.log(getValidSegments([ 6, 100, 41 ], [[2,4,70],[3,8,30],[6,100,41],[7,15,70],[10,30,102],[15,25,76],[60,80,91],[70,90,72],[85,120,59]]))
