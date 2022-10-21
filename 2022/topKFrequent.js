/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function (words, k) {
  const map = {};
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    map[word] = map[word] ? map[word] + 1 : 1;
  }
  let arrs = [];
  let uniques = new Set();
  for (const key in map) {
    if (Object.hasOwnProperty.call(map, key)) {
      const count = map[key];
      uniques.add(count);
      if (arrs[count]) {
        arrs[count].push(key);
      } else {
        arrs[count] = [key];
      }
    }
  }
  const uniqueArrs = Array.from(uniques).sort((a, b) => b - a);
  let limit = 0;
  let last = 0;
  for (let i = 0; i < uniqueArrs.length && limit < k; i++) {
    const count = arrs[uniqueArrs[i]].length;
    limit += count;
    last = i;
  }
  for (let i = 0; i <= last; i++) {
    if (arrs[uniqueArrs[i]]) {
      arrs[uniqueArrs[i]].sort();
    }
  }
  // console.log('TCL ~ uniqueArrs', uniqueArrs);
  // console.log('TCL ~ arrs', arrs);
  const ans = [];
  let i = 0;
  while (ans.length < k) {
    const count = uniqueArrs[i];
    // console.log('TCL ~ count', count);
    // console.log('TCL ~ arrs[count]', arrs[count]);
    for (let j = 0; j < arrs[count].length && ans.length < k; j++) {
      // console.log('TCL ~ j', j);
      const str = arrs[count][j];
      ans.push(str);
    }
    i++;
  }
  // for (let i = 0; i < k; i++) {
  //   const count = uniqueArrs[i];
  //   ans.push(...arrs[count]);
  // }
  return ans;
};

console.log(topKFrequent(['i', 'love', 'leetcode', 'i', 'love', 'coding'], 1));
console.log(topKFrequent(['i', 'love', 'leetcode', 'i', 'love', 'coding'], 2));
console.log(topKFrequent(['i', 'love', 'leetcode', 'i', 'love', 'coding'], 3));
console.log(topKFrequent(['i', 'love', 'leetcode', 'i', 'love', 'coding'], 4));
// prettier-ignore
console.log(topKFrequent(["the","day","is","sunny","the","the","the","sunny","is","is", 'a', 'a', 'a', 'a'], 4));
// prettier-ignore
console.log(topKFrequent(["the","day","is","sunny","the","the","the","sunny","is","is"], 3));
// prettier-ignore
console.log(topKFrequent(["the","day","is","sunny","the","the","the","sunny","is","is"], 1));
