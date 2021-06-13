/**
 * @param {string} n
 * @param {number} x
 * @return {string}
 */
var maxValue = function (n, x) {
  const arr = n.split('');
  let ne = false;
  if (arr[0] === '-') {
    ne = true;
    arr.shift();
  }
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (ne && x < element) {
      arr.splice(i, 0, x);
      return '-' + arr.join('');
    }
    if (!ne && x > element) {
      arr.splice(i, 0, x);
      return arr.join('');
    }
  }
  if (ne) {
    arr.push(x);
    return '-' + arr.join('');
  } else {
    arr.push(x);
    return arr.join('');
  }
};

console.log(maxValue('99', 9));
console.log(maxValue('12', 9));
console.log(maxValue('9876', 3));
console.log(maxValue('-9876', 3));
console.log(maxValue('-333', 1));
console.log(maxValue('-13', 9));
