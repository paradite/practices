/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function(groupSizes) {
  let groups = {};
  for (let i = 0; i < groupSizes.length; i++) {
    const element = groupSizes[i];
    if (groups[element]) {
      groups[element].push(i);
    } else {
      groups[element] = [i];
    }
  }
  let ans = [];
  for (const key in groups) {
    // console.log('TCL: groups', groups);
    // console.log('TCL: key', key);
    if (groups.hasOwnProperty(key)) {
      const arr = groups[key];
      let ansArr = [];
      for (let j = 0; j < arr.length; j++) {
        const element = arr[j];
        // console.log('TCL: element', element);
        if (ansArr.length === Number(key)) {
          ans.push(ansArr);
          ansArr = [];
        }
        ansArr.push(element);
      }
      ans.push(ansArr);
    }
  }
  return ans;
};

console.log(groupThePeople([3, 3, 3, 3, 3, 1, 3]));
console.log(groupThePeople([2, 1, 3, 3, 3, 2]));
console.log(groupThePeople([1]));
console.log(groupThePeople([1, 1]));
