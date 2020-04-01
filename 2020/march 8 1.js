/**
 * @param {number} n
 * @return {string}
 */
var generateTheString = function(n) {
  if (n % 2 === 0) {
    return [...Array(n - 1).fill('a'), 'b'].join('');
  } else {
    return Array(n)
      .fill('a')
      .join('');
  }
};

console.log(generateTheString(4));
console.log(generateTheString(2));
console.log(generateTheString(7));
