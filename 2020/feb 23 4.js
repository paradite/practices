const _ = require('lodash');

Array.prototype.remove = function(val) {
  const index = this.indexOf(val);
  if (index > -1) {
    this.splice(index, 1);
  }
  return this;
};

/**
 * @param {number[]} digits
 * @return {string}
 */
var largestMultipleOfThree = function(digits) {
  digits = _.reverse(_.sortBy(digits));
  const map = _.countBy(digits);
  for (let i = 0; i < 10; i++) {
    if (!map[i]) {
      map[i] = 0;
    }
  }
  const sum = _.sum(digits);

  const diff = sum % 3;
  // console.log('TCL: map', map);
  // console.log('TCL: diff', diff);
  if (diff === 0) {
    if (sum === 0) {
      return '0';
    }
    return digits.join('');
  }
  if (diff === 1) {
    if (map[1] || map[4] || map[7]) {
      if (map[1]) {
        digits.remove(1);
      } else if (map[4]) {
        digits.remove(4);
      } else if (map[7]) {
        digits.remove(7);
      }
      return digits.join('');
    } else {
      let toRemove = 2;
      const ls = [2, 2, 5, 5, 8, 8];
      for (let i = 0; i < ls.length; i++) {
        const element = ls[i];
        if (map[element]) {
          toRemove--;
          digits.remove(element);
          map[element] = map[element] - 1;
          if (toRemove === 0) {
            break;
          }
        }
      }
      if (toRemove === 0) {
        return digits.join('');
      } else {
        return '';
      }
    }
  } else if (diff === 2) {
    if (map[2] || map[5] || map[8]) {
      if (map[2]) {
        digits.remove(2);
      } else if (map[5]) {
        digits.remove(5);
      } else if (map[8]) {
        digits.remove(8);
      }
      return digits.join('');
    } else {
      let toRemove = 2;
      const ls = [1, 1, 4, 4, 7, 7];
      for (let i = 0; i < ls.length; i++) {
        const element = ls[i];
        if (map[element]) {
          toRemove--;
          digits.remove(element);
          map[element] = map[element] - 1;
          if (toRemove === 0) {
            break;
          }
        }
      }
      if (toRemove === 0) {
        return digits.join('');
      } else {
        return '';
      }
    }
  }
  return '';
};

console.log(largestMultipleOfThree([8, 1, 9]));
console.log(largestMultipleOfThree([8, 1, 9, 0, 0]));
console.log(largestMultipleOfThree([8, 6, 7, 1, 0]));
console.log(largestMultipleOfThree([1]));
console.log(largestMultipleOfThree([0, 0, 0, 0, 0, 0]));
console.log(largestMultipleOfThree([5, 8]));
