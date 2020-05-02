const _ = require('lodash');

// Remove
Array.prototype.remove = function(val) {
  const index = this.indexOf(val);
  if (index > -1) {
    this.splice(index, 1);
  }
  return this;
};

const mod = Math.pow(10, 9) + 7;

const arr = [1, 2, 3, 3, 4];
arr.remove(3);
arr.remove(3);
console.log('TCL: arr', arr);

// Map
const digits = [1, 2, 2, 0, 4, 1, 1, 0];
const map = _.countBy(digits);
console.log('TCL: map', map);

// Sort
const meetings = [
  [0, 2],
  [3, 10],
  [0, 2],
  [4, 10],
  [2, 5],
  [1, 5],
  [0, 10],
  [0, 5]
];
const sortedMeetings = _.sortBy(meetings, [1, 0]);
console.log('TCL: sortedMeetings', sortedMeetings);
