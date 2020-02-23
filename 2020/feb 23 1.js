/**
 * @param {string} date1
 * @param {string} date2
 * @return {number}
 */
var daysBetweenDates = function(date1, date2) {
  const diff = Math.abs(new Date(date1).getTime() - new Date(date2).getTime());
  return Math.floor(diff / (1000 * 60 * 60 * 24));
};

console.log(daysBetweenDates('2019-06-29', '2019-06-30'));
console.log(daysBetweenDates('2019-06-29', '2019-06-27'));
console.log(daysBetweenDates('2020-01-15', '2019-12-31'));
