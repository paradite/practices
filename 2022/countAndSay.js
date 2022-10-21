/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  let str = '1';
  for (let i = 1; i < n; i++) {
    let currChar = str[0];
    let newstr = '';
    let count = 1;
    for (let j = 1; j < str.length; j++) {
      const char = str[j];
      if (char !== currChar) {
        newstr += String(count) + String(currChar);
        currChar = char;
        count = 1;
      } else {
        count++;
      }
    }
    newstr += String(count) + String(currChar);
    str = newstr;
  }
  return str;
};

console.log(countAndSay(1));
console.log(countAndSay(2));
console.log(countAndSay(3));
console.log(countAndSay(4));
console.log(countAndSay(5));
console.log(countAndSay(30));
