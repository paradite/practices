const _ = require('lodash');

/**
 * @param {number[]} balls
 * @return {number}
 */
var getProbability = function(balls) {
  let barr = [];
  for (let i = 0; i < balls.length; i++) {
    const element = balls[i];
    for (let j = 0; j < element; j++) {
      barr.push(i + 1);
    }
  }
  const sample = array => {
    const l = array.length;

    let a = [];
    let b = [];
    for (var i = array.length - 1; i >= 0; i--) {
      const e = array.splice(Math.floor(Math.random() * array.length), 1);
      if (a.length < l / 2) {
        a.push(e[0]);
      } else {
        b.push(e[0]);
      }
    }
    const amap = _.countBy(a);
    const bmap = _.countBy(b);
    return Object.entries(bmap).length === Object.entries(amap).length;
  };
  let t = 0;
  let MAX = 10000;
  for (let i = 0; i < MAX; i++) {
    if (sample([...barr])) {
      t++;
    }
  }
  return t / MAX;
};

// console.log(getProbability([1, 1]));
console.log(getProbability([2, 1, 1]));
// console.log(getProbability([2, 2, 4]));
console.log(getProbability([6, 6, 6, 6, 6, 6]));
