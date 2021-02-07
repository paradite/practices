// prettier-ignore
if (typeof _ === 'undefined') {
  _ = require('lodash');
}

/**
 * @param {number[]} candiesCount
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var canEat = function (candiesCount, queries) {
  let ans = [];
  const sum = _.sum(candiesCount);
  // console.log('TCL ~ sum', sum);
  // console.log(candiesCount.length);

  const getMin = (day) => {
    for (let i = 0; i < candiesCount.length; i++) {
      const count = candiesCount[i];
      if (count <= day) {
        day = day - count;
      } else {
        return i;
      }
    }
  };
  const getMax = (day, limit) => {
    let i = 0;
    let cur = candiesCount[i];
    while (day > 0) {
      // console.log('TCL ~ i', i);
      // console.log('TCL ~ day', day);
      // console.log('TCL ~ cur', cur);
      if (cur > limit) {
        cur = cur - limit;
        day--;
      } else if (cur === limit) {
        i++;
        cur = candiesCount[i];
        day--;
      } else {
        cur = cur - limit;
        day--;
        while (cur < 0) {
          i++;
          if (i >= candiesCount.length) return candiesCount.length - 1;
          cur = cur + candiesCount[i];
          // console.log('TCL ~ cur',cur);
        }
      }
    }
    return i;
  };
  const answerQuery = (type, day, limit) => {
    const min = getMin(day);
    const max = getMax(day, limit);
    // console.log('min max', min, max);

    return type >= min && type <= max;
  };

  for (let i = 0; i < queries.length; i++) {
    // if (i === 31 - 1) {
    // }
    const [type, day, limit] = queries[i];
    // console.log('TCL ~ queries[i]', queries[i]);
    ans.push(answerQuery(type, day, limit));
    // console.log('TCL ~ ans',ans);
  }
  return ans;
};

// prettier-ignore
// console.log(canEat([7,4,5,3,8],[[0,2,2],[4,2,4],[2,13,1000000000]]));

// prettier-ignore
// console.log(canEat([5,2,6,4,1],[[3,1,2],[4,10,3],[3,10,100],[4,100,30],[1,3,1]]));

// prettier-ignore
// console.log(canEat([10,11,42,42,49,14,44,33,13,49,32,19,48,36,25,38,32,45,30,21,13,45,39,12,12,25,26,18,35,28,1,31,14,16,38,49,26,33,39,39,7,31,20,8,49,36,6,1,32,2,35,10,31,37,13,43,26],
//   [[52,19,44]]));

// [true,true,true,false,false,false,true,false,false,false,false,true,true,false,true,false,true,false,false,false,false,false,true,false,true,true,false,true,false,false,false,false,false,false,false,true,false,false,false,true,false,false,true,true,false,true,false,false,false,true,false,false,false,true,true,false,true,true,true,false,false,false,true,false,false,false,true,true,true,true,false,true,false,false,true,true,true,true,false,false,true,false,true,true,true]
// [true,true,true,false,false,false,true,false,false,false,false,true,true,false,true,false,true,false,false,true,false,false,true,false,true,true,true,true,false,false,false,false,false,false,false,true,false,false,false,true,false,false,true,true,false,true,false,false,false,true,false,false,false,true,true,false,true,true,true,false,false,false,true,false,false,false,true,true,true,true,false,true,false,false,true,true,true,true,false,false,true,false,true,true,true ]
// prettier-ignore
// console.log(canEat([10,11,42,42,49,14,44,33,13,49,32,19,48,36,25,38,32,45,30,21,13,45,39,12,12,25,26,18,35,28,1,31,14,16,38,49,26,33,39,39,7,31,20,8,49,36,6,1,32,2,35,10,31,37,13,43,26],
//   [[24,579,17],[13,275,40],[38,432,75],[47,62,4],[14,908,33],[19,1031,77],[18,316,71],[54,1558,48],[35,1403,19],[10,449,58],[0,1258,94],[41,1014,59],[33,932,15],[18,1488,46],[51,630,89],[7,362,4],[1,14,3],[0,1029,3],[2,1454,63],[52,19,44],[7,418,18],[42,1505,12],[49,1188,92],[15,1116,76],[47,668,40],[50,468,7],[49,167,8],[51,316,94],[27,1270,58],[1,158,66],[25,979,28],[11,837,84],[27,1311,80],[16,1148,77],[51,1538,34],[19,120,70],[8,1508,7],[24,1464,93],[1,1448,44],[45,331,12],[17,111,4],[6,332,19],[53,1368,98],[23,609,85],[11,1364,69],[54,1066,32],[8,1566,30],[40,1331,21],[16,1478,23],[34,133,65],[17,1484,9],[37,1150,65],[13,885,69],[54,191,46],[21,105,22],[1,37,75],[35,479,79],[37,905,89],[49,551,74],[16,986,26],[21,1325,34],[41,1520,67],[40,611,69],[7,997,22],[32,1108,39],[2,1549,59],[35,553,71],[28,729,93],[15,357,11],[43,566,90],[18,1213,87],[23,10,100],[8,423,18],[19,1270,59],[15,413,64],[44,765,76],[5,17,97],[42,1228,10],[27,1236,44],[5,411,46],[54,458,93],[27,1148,33],[20,429,85],[12,315,88],[56,446,26]]));

// prettier-ignore
console.log(canEat([16,38,8,41,30,31,14,45,3,2,24,23,38,30,31,17,35,4,9,42,28,18,37,18,14,46,11,13,19,3,5,39,24,48,20,29,4,19,36,11,28,49,38,16,23,24,4,22,29,35,45,38,37,40,2,37,8,41,33,8,40,27,13,4,33,5,8,14,19,35,31,8,8]
,  [[35,669,5],[72,822,74],[47,933,94],[62,942,85],[42,596,11],[56,1066,18],[54,571,45],[39,890,100],[3,175,26],[48,1489,37],[40,447,52],[30,584,7],[26,1486,38],[21,1142,21],[9,494,96],[56,759,81],[13,319,16],[20,1406,57],[11,1092,19],[24,670,67],[38,1702,33],[5,676,32],[50,1386,77],[36,1551,87],[29,1445,13],[58,977,13],[7,887,64],[37,1396,23],[0,765,69],[40,1083,86],[43,1054,49],[48,690,92],[28,1201,56],[47,948,43],[57,233,25],[32,1293,65],[0,1646,34],[43,1467,39],[39,484,23],[21,1576,69],[12,1222,68],[9,457,83],[32,65,9],[10,1424,42],[35,534,3],[23,83,22],[33,501,33],[25,679,51],[2,321,42],[1,240,68],[7,1297,42],[45,480,72],[26,1472,9],[6,649,90],[26,361,57],[49,1592,7],[11,158,95],[35,448,24],[41,1654,10],[61,510,43],[31,1230,95],[11,1471,12],[37,43,84],[56,1147,48],[69,1368,65],[22,170,24],[56,192,80],[34,1207,69],[1,1226,22],[37,1633,50],[11,98,58],[17,125,13],[0,1490,5],[37,1732,43],[45,793,14],[16,578,72],[50,241,78]]));

// [true,true,true,true,true,true,true,true,false,false,true,true,false,false,false,true,true,false,false,false,false,false,false,false,false,true,false,false,false,false,false,true,false,true,true,false,false,false,true,false,false,false,false,false,true,true,true,false,false,false,false,true,false,false,true,false,true,true,false,true,false,false,true,true,true,true,true,false,false,false,true,true,false,false,true,false,true]
// [true,true,true,true,true,true,true,true,false,false,true,true,false,false,false,true,true,false,false,false,false,false,false,false,false,true,false,false,false,false,true,true,false,true,true,false,false,false,true,false,false,false,false,false,true,true,true,false,false,false,false,true,false,false,true,false,true,true,false,true,false,false,true,true,true,true,true,false,false,false,true,true,false,false,true,false,true]
