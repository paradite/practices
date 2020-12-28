/**
 * @param {string} number
 * @return {string}
 */
var reformatNumber = function (number) {
  number = number.replace(/ /g, '');
  number = number.replace(/-/g, '');
  let result = '';
  for (let i = 0; i < number.length; i += 3) {
    if (i < number.length - 4) {
      result = result + number.substr(i, 3) + '-';
    } else {
      if (i === number.length - 4) {
        result = result + number.substr(i, 2) + '-' + number.substr(i + 2, 2);
      } else if (i === number.length - 3) {
        result = result + number.substr(i, 3);
      } else {
        result = result + number.substr(i, 2);
      }
      break;
    }
  }
  return result;
};

console.log(reformatNumber('1-23-45 6'));
console.log(reformatNumber('1-23-45 67'));
console.log(reformatNumber('1-23-45 678'));
console.log(reformatNumber('1-23-45 6789'));
console.log(reformatNumber('1-23-45 67890'));
console.log(reformatNumber('1-23-45 678901'));
console.log(reformatNumber('1-23-45 '));
console.log(reformatNumber('1-23-4 '));
console.log(reformatNumber('1-23- '));
