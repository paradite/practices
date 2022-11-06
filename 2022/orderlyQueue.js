/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var orderlyQueue = function (s, k) {
  let min = s;
  if (k === 1) {
    let ns = s;
    for (let i = 0; i < ns.length; i++) {
      const char = ns[0];
      ns = ns.slice(1, ns.length) + char;
      if (ns < min) {
        min = ns;
      }
    }
  } else {
    const arr = s.split('').sort().join('');
    return arr;
  }
  return min;
};

console.log(orderlyQueue('cba', 1));
console.log(orderlyQueue('baaca', 3));
console.log(orderlyQueue('baaca', 2));
console.log(orderlyQueue('baaca', 1));
console.log(orderlyQueue('cba', 2));
