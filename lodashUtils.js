// prettier-ignore
if (typeof _ === 'undefined') {
  _ = require('lodash');
}

// Map
const digits = [1, 2, 2, 0, 4, 1, 1, 0];
const map = _.countBy(digits);
console.log('TCL ~ map', map);

// Sort
const meetings = [
  [0, 2],
  [3, 10],
  [0, 2],
  [4, 10],
  [2, 5],
  [1, 5],
  [0, 10],
  [0, 5],
];
const sortedMeetings = _.sortBy(meetings, [1, 0]);
console.log('TCL ~ sortedMeetings', sortedMeetings);
