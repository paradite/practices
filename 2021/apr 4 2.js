/**
 * @param {number[][]} logs
 * @param {number} k
 * @return {number[]}
 */
var findingUsersActiveMinutes = function (logs, k) {
  const map = {};
  for (let i = 0; i < logs.length; i++) {
    const [id, time] = logs[i];
    if (map[id]) {
      map[id][time] = true;
    } else {
      map[id] = { [time]: true };
    }
  }
  // console.log('TCL ~ map', map);
  let counts = new Array(k).fill(0);
  for (const key in map) {
    if (Object.hasOwnProperty.call(map, key)) {
      const act = map[key];
      let count = 0;
      for (const key in act) {
        if (Object.hasOwnProperty.call(act, key)) {
          count++;
        }
      }
      counts[count - 1] = counts[count - 1] + 1;
    }
  }
  return counts;
};
