/**
 * @param {number[]} arr
 * @return {number[]}
 */
var getDistances = function (arr) {
  const map = {};
  const ans = [];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (map[element]) {
      map[element].push(i);
    } else {
      map[element] = [i];
    }
  }
  const prefixSumMap = {};
  for (const key in map) {
    if (Object.hasOwnProperty.call(map, key)) {
      const array = map[key];
      let sum = 0;
      let sumArr = [];
      for (let i = 0; i < array.length; i++) {
        const element = array[i];
        sum = sum + element;
        sumArr.push(sum);
      }
      prefixSumMap[key] = sumArr;
      for (let i = 0; i < array.length; i++) {
        const index = array[i];
        const othersLeft = i - 0;
        const othersRight = array.length - 1 - i;
        const left = i === 0 ? 0 : sumArr[i - 1];
        const right = sumArr[array.length - 1] - sumArr[i];
        const selfLeft = index * othersLeft;
        const selfRight = -index * othersRight;
        const sum = -left + right + selfLeft + selfRight;
        // console.log(
        //   'TCL ~ index left right selfleft selfright sum',
        //   index,
        //   left,
        //   right,
        //   selfLeft,
        //   selfRight,
        //   sum
        // );
        ans[index] = sum;
      }
    }
  }
  // console.log(map);
  // console.log(prefixSumMap);
  return ans;
};

console.log(getDistances([2, 1, 3, 1, 2, 3, 3]));
console.log(getDistances([10, 5, 10, 10]));
