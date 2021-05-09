/**
 * @param {number[][]} logs
 * @return {number}
 */
var maximumPopulation = function (logs) {
  let counter = {};
  for (let i = 0; i < logs.length; i++) {
    const [start, end] = logs[i];
    counter[start] = counter[start] ? counter[start] + 1 : 1;
    counter[end] = counter[end] ? counter[end] - 1 : -1;
  }
  let arr = [];
  for (const key in counter) {
    if (Object.hasOwnProperty.call(counter, key)) {
      const count = counter[key];
      arr.push([Number(key), count]);
    }
  }
  arr.sort((a, b) => a[0] - b[0]);
  // console.log('TCL ~ arr', arr);
  let curr = 0;
  let max = 0;
  let maxYear = 0;
  for (let i = 0; i < arr.length; i++) {
    const [year, c] = arr[i];
    curr += c;
    if (curr > max) {
      maxYear = year;
      max = curr;
    }
  }
  return maxYear;
};

// prettier-ignore
console.log(maximumPopulation([[1993,1999],[2000,2010]]));
