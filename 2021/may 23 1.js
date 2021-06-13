/**
 * @param {string} s
 * @return {boolean}
 */
var checkZeroOnes = function (s) {
  let currC = 0;
  let oneM = 0;
  let zeroM = 0;
  let curr = s[0];
  for (let i = 0; i < s.length; i++) {
    const element = s[i];
    if (element === curr) {
      currC++;
      if (curr === '0' && currC > zeroM) {
        zeroM = currC;
      }
      if (curr === '1' && currC > oneM) {
        oneM = currC;
      }
    } else {
      currC = 1;
      curr = element;
    }
  }
  return oneM > zeroM;
};
