const _ = require('lodash');

/**
 * @param {number[]} deliciousness
 * @return {number}
 */
var countPairs = function (deli) {
  const mod = Math.pow(10, 9) + 7;
  var f = [];
  function factorial(n) {
    if (n == 0) return 0;
    if (n == 1) return 1;
    if (f[n] > 0) return f[n];
    return (f[n] = factorial(n - 1) + n);
  }
  let ans = 0;
  let ansd = 0;
  const map = _.countBy(deli);
  // console.log('TCL: map', map);
  for (let i = 0; i <= 4; i++) {
    let goal = Math.pow(2, i);
    for (const key in map) {
      if (map.hasOwnProperty(key)) {
        let d = Number(key);
        const alt = goal - d;
        const altCount = map[alt];
        if (altCount) {
          // console.log('countPairs -> d', d);
          // console.log('countPairs -> alt', alt);
          // console.log('countPairs -> map[d]', map[d]);
          // console.log('countPairs -> map[alt]', map[alt]);
          if (d === alt) {
            if (map[d] >= 2) {
              ans += factorial(map[d] - 1) % mod;
              // console.log('countPairs -> ans', ans);
            }
          } else {
            ansd += (map[d] * map[alt]) % mod;
            // console.log('countPairs -> ansd', ansd);
          }
        }
      }
    }
  }
  return (ans + ansd / 2) % mod;
};

console.log(countPairs([1, 3, 5, 7, 9]));
console.log(countPairs([1, 1, 1, 3, 3, 3, 7]));
