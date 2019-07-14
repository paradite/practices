/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
  const map2 = {};
  let rest = [];
  for (var i = 0; i < arr2.length; i++) {
    map2[arr2[i]] = 1;
  }
  for (var i = 0; i < arr1.length; i++) {
    if (map2[arr1[i]]) {
      map2[arr1[i]] += 1;
    } else {
      rest.push(arr1[i]);
    }
  }
  rest.sort((a,b) => a-b);
  let ans = [];
  for (var i = 0; i < arr2.length; i++) {
    for (var j = 1; j < map2[arr2[i]]; j++) {
      ans.push(arr2[i]);
    }
  }
  return [...ans, ...rest];
};

console.log(relativeSortArray([2,106,3,1,99,3,2,4,6,7,9,2,19], [2,1,4,3,9,6]));
