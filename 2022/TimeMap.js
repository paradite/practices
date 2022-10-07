var TimeMap = function () {
  this.map = {};
};

/**
 * @param {string} key
 * @param {string} value
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function (key, value, timestamp) {
  if (this.map[key]) {
    this.map[key].push([timestamp, value]);
  } else {
    this.map[key] = [];
    this.map[key].push([timestamp, value]);
  }
};

/**
 * @param {string} key
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function (key, timestamp) {
  let currMax = [undefined, undefined];
  const getValue = (index, arr) => {
    return arr[index];
  };
  const recurse = (input, target, start, end) => {
    if (start > end) {
      return currMax[0] ? currMax[1] : '';
    }
    const mid = Math.ceil((start + end) / 2);
    const [time, value] = getValue(mid, input);
    // console.log('TCL ~ target mid [time, value]', target, mid, [time, value]);
    if (time < target) {
      if (!currMax[0] || time > currMax[0]) {
        currMax = [time, value];
      }
      return recurse(input, target, mid + 1, end);
    } else if (time > target) {
      return recurse(input, target, start, mid - 1);
    } else {
      return value;
    }
  };
  const arr = this.map[key];
  if (!arr) return '';
  return recurse(arr, timestamp, 0, arr.length - 1);
};

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */
