s1000Map = {
  0: '',
  1: 'M',
  2: 'MM',
  3: 'MMM',
};
s100Map = {
  0: '',
  1: 'C',
  2: 'CC',
  3: 'CCC',
  4: 'CD',
  5: 'D',
  6: 'DC',
  7: 'DCC',
  8: 'DCCC',
  9: 'CM',
};
s10Map = {
  0: '',
  1: 'X',
  2: 'XX',
  3: 'XXX',
  4: 'XL',
  5: 'L',
  6: 'LX',
  7: 'LXX',
  8: 'LXXX',
  9: 'XC',
};
s1Map = {
  0: '',
  1: 'I',
  2: 'II',
  3: 'III',
  4: 'IV',
  5: 'V',
  6: 'VI',
  7: 'VII',
  8: 'VIII',
  9: 'IX',
};

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  num = String(num).padStart(4, '0');
  const [s1000, s100, s10, s1] = String(num)
    .split('')
    .map((s) => Number(s));
  let ans = '';
  ans += s1000Map[s1000];
  ans += s100Map[s100];
  ans += s10Map[s10];
  ans += s1Map[s1];
  return ans;
};

console.log(intToRoman(1));
console.log(intToRoman(2));
console.log(intToRoman(3));
console.log(intToRoman(4));
console.log(intToRoman(5));
console.log(intToRoman(58));
console.log(intToRoman(99));
console.log(intToRoman(1994));
