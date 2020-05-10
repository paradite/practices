/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkIfCanBreak = function(s1, s2) {
  s1 = s1.split('');
  s2 = s2.split('');
  s1.sort();
  s2.sort();
  // console.log('checkIfCanBreak -> s1', s1);
  // console.log('checkIfCanBreak -> s2', s2);
  let count = 0;
  let count2 = 0;
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] >= s2[i]) {
      // console.log('checkIfCanBreak -> s1[i]', s1[i]);
      // console.log('checkIfCanBreak -> s2[i]', s2[i]);
      count++;
    }
    if (s1[i] <= s2[i]) {
      // console.log('checkIfCanBreak -> s1[i]', s1[i]);
      // console.log('checkIfCanBreak -> s2[i]', s2[i]);
      count2++;
    }
  }
  if (
    count === 0 ||
    count === s1.length ||
    count2 === 0 ||
    count2 === s1.length
  ) {
    return true;
  }
  return false;
};

console.log(checkIfCanBreak('abc', 'xya'));
console.log(checkIfCanBreak('abe', 'acd'));
console.log(checkIfCanBreak('leetcodee', 'interview'));
console.log(checkIfCanBreak('szy', 'cid'));
console.log(checkIfCanBreak('yopumzgd', 'pamntyya'));
