// prettier-ignore
if (typeof _ === 'undefined') {
  _ = require('lodash');
}

/**
 * @param {number[]} tasks
 * @param {number} sessionTime
 * @return {number}
 */
var minSessions = function (tasks, sessionTime) {
  tasks.sort((a, b) => a - b);
  let minSessions = tasks.length;
  const maxMemo = {};
  const dfsMemo = {};

  const dfs = (tasksRemaining, currSessions) => {
    if (dfsMemo[`${tasksRemaining.join('-')}.${currSessions}`]) {
      // console.log('memoed dfs ', tasksRemaining, currSessions);
      return;
    }
    dfsMemo[`${tasksRemaining.join('-')}.${currSessions}`] = true;
    const dfsFindMax = (tasksRemaining, currIndex, acc, arr) => {
      if (acc > sessionTime) return;
      if (currIndex > tasksRemaining.length - 1) return;
      // console.log('TCL ~ arr', arr);
      dfsFindMax(tasksRemaining, currIndex + 1, acc, [...arr]);
      acc = acc + tasksRemaining[currIndex];
      arr.push(tasksRemaining[currIndex]);
      if (acc > max && acc <= sessionTime) {
        // console.log('TCL ~ acc arr1', acc, arr);
        max = acc;
        maxArrs = [[...arr]];
      } else if (acc === max && acc <= sessionTime) {
        // console.log('TCL ~ acc arr2', acc, arr);
        maxArrs.push([...arr]);
      }
      dfsFindMax(tasksRemaining, currIndex + 1, acc, arr);
    };

    const map = _.countBy(tasksRemaining);
    // console.log('TCL ~ map tasksRemaining', map, tasksRemaining);
    let max = 0;
    let maxArrs = [];
    // console.log('TCL ~ tasksRemaining', tasksRemaining);
    if (maxMemo[tasksRemaining.join('-')]) {
      // console.log('memo', tasksRemaining.join('-'));
      [max, maxArrs] = maxMemo[tasksRemaining.join('-')];
    } else {
      dfsFindMax(tasksRemaining, 0, 0, []);
      maxMemo[tasksRemaining.join('-')] = [max, maxArrs];
    }
    // console.log('TCL ~ maxArrs', maxArrs);
    for (let i = 0; i < maxArrs.length; i++) {
      const maxArr = maxArrs[i];
      const maxArrMap = _.countBy(maxArr);
      for (const key in maxArrMap) {
        if (Object.hasOwnProperty.call(maxArrMap, key)) {
          const element = maxArrMap[key];
          map[key] = map[key] - element;
        }
      }
      let newArr = [];
      for (const key in map) {
        if (Object.hasOwnProperty.call(map, key)) {
          const element = map[key];
          for (let i = 0; i < element; i++) {
            newArr.push(Number(key));
          }
        }
      }
      if (newArr.length === 0) {
        minSessions = Math.min(minSessions, currSessions + 1);
      } else {
        dfs(newArr, currSessions + 1);
      }
      // revert
      for (const key in maxArrMap) {
        if (Object.hasOwnProperty.call(maxArrMap, key)) {
          const element = maxArrMap[key];
          map[key] = map[key] + element;
        }
      }
    }
  };

  dfs(tasks, 0);
  return minSessions;
};

console.log(minSessions([1, 2, 3], 3));
console.log(minSessions([3, 1, 3, 1, 1], 8));
console.log(minSessions([1, 2, 3, 4, 5], 15));
console.log(minSessions([1, 2, 3, 4, 5, 3, 4, 4, 3, 1, 3, 2, 6, 2, 3], 8));
