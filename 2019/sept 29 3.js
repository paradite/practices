/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function(s, k) {
  let replacers = [];
  let array = 'abcdefghijklmnopqrstuvwxyz';
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    let replacer = '';
    for (let j = 1; j <= k; j++) {
      replacer = replacer + element;
    }
    replacers.push(replacer);
  }
  console.log(replacers);
  s1 = s;
  for (let index = 0; index < replacers.length; index++) {
    const s1 = s.replace(replacers[i], '');
  }
  return s;
};

console.log(removeDuplicates('abcd', 2));
