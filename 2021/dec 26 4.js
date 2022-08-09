// prettier-ignore
if (typeof _ === 'undefined') {
  _ = require('lodash');
}

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var recoverArray = function (nums) {
  const sum = _.sum(nums) / 2;
  const length = nums.length / 2;
  const kmap = {};
  const nmap = {};
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    nmap[n] = nmap[n] ? nmap[n] + 1 : 1;
    for (let j = 0; j < nums.length; j++) {
      const m = nums[j];
      const diff = m - n;
      if (diff > 0 && diff % 2 === 0) {
        kmap[diff / 2] = true;
      }
    }
  }
  for (const key in kmap) {
    if (Object.hasOwnProperty.call(kmap, key)) {
      const k = Number(key);
      const lowerSum = sum - k * length;
      console.log('TCL ~ lowerSum', lowerSum);
    }
  }
  console.log('TCL ~ sum', sum);
  console.log('TCL ~ nmap', nmap);
  console.log('TCL ~ kmap', kmap);
};

console.log(recoverArray([2, 10, 6, 4, 8, 12]));
