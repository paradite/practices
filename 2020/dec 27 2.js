/**
 * @param {number[]} apples
 * @param {number[]} days
 * @return {number}
 */
var eatenApples = function (apples, days) {
  let loopcount = 0;
  let cur = [];
  let ans = 0;
  let i = 0;
  let next = 0;
  // let acc = 0
  while (i < apples.length || cur.length > 0) {
    console.log('eatenApples -> i', i);
    let newapples = apples[i];
    let exp = days[i];
    if (cur[exp]) {
      cur[exp] = cur[exp] + newapples;
    } else {
      cur[exp] = newapples;
    }
    // console.log('eatenApples -> i', i);
    // console.log('eatenApples -> cur', cur);
    if (cur[1] > 0) {
      ans++;
    } else {
      let start = 2;
      if (next > start) start = next;
      // console.log('eatenApples -> next', next);
      // console.log('eatenApples -> start', start);
      for (let j = start; j < cur.length; j++) {
        loopcount++;
        // console.log('eatenApples -> loopcount', loopcount);
        const element = cur[j];
        if (element > 0) {
          ans++;
          cur[j] = cur[j] - 1;
          next = j;
          break;
        }
      }
    }
    // console.log('eatenApples -> ans', ans);
    cur.shift();
    next--;
    i++;
  }
  return ans;
};

console.log(eatenApples([1, 2, 3, 5, 2], [3, 2, 1, 4, 2]));
// console.log(eatenApples([20000], [20000]));
// console.log(eatenApples([20000], [20000]));
// console.log(eatenApples([20000], [20000]));
// console.log(eatenApples([20000], [20000]));
console.log(
  eatenApples(
    [9, 10, 1, 7, 0, 2, 1, 4, 1, 7, 0, 11, 0, 11, 0, 0, 9, 11, 11, 2, 0, 5, 5],
    [3, 19, 1, 14, 0, 4, 1, 8, 2, 7, 0, 13, 0, 13, 0, 0, 2, 2, 13, 1, 0, 3, 7]
  )
);
