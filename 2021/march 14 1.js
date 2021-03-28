/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function (s1, s2) {
  let diff = 0;
  for (let i = 0; i < s1.length; i++) {
    const e1 = s1[i];
    const e2 = s2[i];
    if (e1 !== e2) {
      diff++;
    }
  }
  return (
    diff <= 2 && s1.split('').sort().join('') === s2.split('').sort().join('')
  );
};
