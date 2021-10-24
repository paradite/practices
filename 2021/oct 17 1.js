/**
 * @param {string} s
 * @return {boolean}
 */
var areNumbersAscending = function (s) {
  const numbers = s
    .split(' ')
    .filter((s) => Number(s) >= 0)
    .map((s) => Number(s));
  for (let i = 0; i < numbers.length - 1; i++) {
    if (numbers[i] >= numbers[i + 1]) return false;
  }
  return true;
};
