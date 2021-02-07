const mapPush = (map, key, value) => {
  if (map[key]) {
    map[key].push(value);
  } else {
    map[key] = [value];
  }
};

const mapAdd = (map, key) => {
  if (map[key]) {
    map[key] = map[key] + 1;
  } else {
    map[key] = 1;
  }
};

/**
 * @param {number[][]} adjacentPairs
 * @return {number[]}
 */
var restoreArray = function (adjacentPairs) {
  const next = {};
  const count = {};
  for (let i = 0; i < adjacentPairs.length; i++) {
    const [a, b] = adjacentPairs[i];
    // TODO: optimize LOC
    mapPush(next, a, b);
    mapPush(next, b, a);
    mapAdd(count, a);
    mapAdd(count, b);
  }
  let start = null;
  for (const key in count) {
    if (Object.hasOwnProperty.call(count, key)) {
      const element = count[key];
      if (element === 1) {
        start = key;
        break;
      }
    }
  }
  let result = [Number(start)];
  let used = {
    [start]: true,
  };
  let cur = start;
  while (result.length < adjacentPairs.length + 1) {
    let nextCandidates = next[cur];
    if (nextCandidates.length === 1 || used[nextCandidates[1]]) {
      result.push(Number(nextCandidates[0]));
      used[nextCandidates[0]] = true;
      cur = nextCandidates[0];
    } else {
      result.push(Number(nextCandidates[1]));
      used[nextCandidates[1]] = true;
      cur = nextCandidates[1];
    }
  }
  return result;
};

// prettier-ignore
console.log(restoreArray( [[2,1],[3,4],[3,2]]));
// prettier-ignore
console.log(restoreArray( [[4,-2],[1,4],[-3,1]]));
// prettier-ignore
console.log(restoreArray( [[100000,-100000]]));
