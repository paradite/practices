/**
 * @param {string} num
 * @param {number[]} change
 * @return {string}
 */
var maximumNumber = function (num, change) {
  num = num.split('');
  let changed = false;
  for (let i = 0; i < num.length; i++) {
    const element = num[i];
    // console.log('TCL ~ element', element);
    if (change[element] > Number(element)) {
      num[i] = change[element].toString();
      changed = true;
    } else if (change[element] === Number(element) && changed) {
      num[i] = change[element].toString();
      changed = true;
    } else {
      if (changed) {
        return num.join('');
      }
    }
  }
  return num.join('');
};

console.log(maximumNumber('132', [9, 8, 5, 0, 3, 6, 4, 2, 6, 8]));
console.log(maximumNumber('021', [9, 4, 3, 5, 7, 2, 1, 9, 0, 6]));
console.log(maximumNumber('5', [1, 4, 7, 5, 3, 2, 5, 6, 9, 4]));
console.log(maximumNumber('214010', [6, 7, 9, 7, 4, 0, 3, 4, 4, 7]));
console.log(maximumNumber('334111', [0, 9, 2, 3, 3, 2, 5, 5, 5, 5]));
