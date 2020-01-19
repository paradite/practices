/**
 * @param {number} day
 * @param {number} month
 * @param {number} year
 * @return {string}
 */
var dayOfTheWeek = function (day, month, year) {
  const map = ['Sunday', "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const d = new Date(year, month - 1, day);
  return (map[d.getDay()]);

};

console.log(dayOfTheWeek(31, 8, 2019));
console.log(dayOfTheWeek(18, 7, 1999));
