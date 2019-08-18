/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function(date) {
  const month31Map = {
    1: true,
    3: true,
    5: true,
    7: true,
    8: true,
    10: true,
    12: true,
  }
  const dateObj = new Date(date);
  // console.log(dateObj);
  let [year, month, day] = date.split('-');
  year = Number.parseInt(year, 10);
  month = Number.parseInt(month, 10);
  day = Number.parseInt(day, 10);
  let ans = day;
  for (let i = 1; i < month; i++) {
    if (month31Map[i] === true) {
      ans += 31;
    } else if (i === 2) {
      if (isLeapYear(year)) {
        ans += 29;
      } else {
        ans += 28;
      }
    } else {
      ans += 30;
    }
  }
  return ans;
};

const isLeapYear = (year) => {
  return (year % 4 === 0 && year % 100 != 0) || (year % 400) === 0;
}

console.log(dayOfYear("2019-01-09"));
console.log(dayOfYear("2019-02-10"));
console.log(dayOfYear("2003-03-01"));
console.log(dayOfYear("2004-03-01"));
