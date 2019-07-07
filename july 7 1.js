// https://leetcode.com/contest/weekly-contest-144/problems/defanging-an-ip-address/

/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
  return address.replace(/\./g, '[.]');    
};

console.log(defangIPaddr("1.1.1.1"));
console.log(defangIPaddr("255.100.50.0"));