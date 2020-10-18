/**
 * @param {number[][]} points
 * @param {number} angle
 * @param {number[]} location
 * @return {number}
 */
var visiblePoints = function (points, angle, location) {
  function solve(points, angle, location, fn) {
    let angles = [];
    let originPoints = 0;
    const [px, py] = location;
    for (let i = 0; i < points.length; i++) {
      const [xi, yi] = points[i];
      if (px === xi && py === yi) {
        originPoints++;
        continue;
      }
      const angleAns = fn(px, py, xi, yi);
      angles.push(angleAns);
    }
    angles.sort((a, b) => a - b);
    if (angles.length === 1) return 1;
    let i = 0;
    let j = 1;
    let start = angles[i];
    let end = angles[j];
    let max = 1;
    while (end - start > angle && j < angles.length) {
      i++;
      j++;
      start = angles[i];
      end = angles[j];
    }
    while (i < angles.length && j < angles.length) {
      if (end - start <= angle) {
        if (j - i + 1 > max) {
          max = j - i + 1;
        }
        if (j + 1 < angles.length) end = angles[j + 1];
        j++;
      } else {
        i++;
        start = angles[i];
      }
    }

    return max + originPoints;
  }
  let ans = solve(points, angle, location, angleC);
  let ans1 = solve(points, angle, location, angleC360);
  if (ans > ans1) return ans;
  return ans1;
};

// https://stackoverflow.com/a/31136507/1472186
function angleC(cx, cy, ex, ey) {
  var dy = ey - cy;
  var dx = ex - cx;
  var theta = Math.atan2(dy, dx); // range (-PI, PI]
  theta *= 180 / Math.PI; // rads to degs, range (-180, 180]
  return theta;
}
function angleC360(cx, cy, ex, ey) {
  var theta = angleC(cx, cy, ex, ey); // range (-180, 180]
  if (theta < 0) theta = 360 + theta; // range [0, 360)
  return theta;
}

// prettier-ignore
console.log(visiblePoints([[2,1],[2,2],[3,3]], 90, [1,1]));
// prettier-ignore
console.log(visiblePoints([[2,1],[2,2],[3,4],[1,1]], 90, [1,1]));
// prettier-ignore
console.log(visiblePoints([[0,1],[2,1]], 13, [1,1]));
// prettier-ignore
console.log(visiblePoints([[1,1],[2,2],[3,3],[4,4],[1,2],[2,1]],0,[1,1]));
// prettier-ignore
console.log(visiblePoints([[0,0],[0,2]],
  90,
  [1,1]));
console.log(
  visiblePoints(
    [
      [13779926, 599856510],
      [195766825, 597976710],
      [119515491, 575316056],
      [744777345, 796161766],
      [187192636, 870346582],
      [413112378, 430889309],
      [436399518, 387904921],
      [296153131, 221188617],
      [536914240, 985130562],
      [226391292, 83241861],
    ],
    64,
    [451961560, 358354259]
  )
);
console.log(
  visiblePoints(
    [
      [956, 232],
      [438, 752],
      [595, 297],
      [508, 143],
      [111, 594],
      [645, 824],
      [758, 434],
      [447, 423],
      [825, 356],
      [807, 377],
    ],
    38,
    [74, 581]
  )
);
console.log(
  visiblePoints(
    [
      [198768142, 325231488],
      [730653894, 526879029],
      [482566443, 124650516],
      [301750308, 786306795],
      [428637509, 388444545],
      [824139468, 560868920],
      [46101719, 541790947],
      [33117389, 306138652],
      [379129552, 739264502],
      [632078701, 382510936],
      [648669937, 641406148],
      [402494603, 290848535],
      [681757446, 651339050],
      [755146968, 328108553],
      [856055968, 54585842],
      [642810790, 781285498],
      [624780623, 839525682],
      [225552068, 597591380],
      [941428680, 575243295],
      [904246597, 409781914],
      [133988308, 424694994],
      [263860625, 642729245],
      [725256971, 428462957],
      [951188673, 24284291],
      [65878467, 597579989],
      [423910337, 760218568],
      [375233659, 465709839],
      [39079416, 44449206],
      [76488044, 376497238],
      [768046853, 401132958],
      [862857872, 713625310],
      [834212457, 613684155],
      [145940546, 414657761],
      [438671565, 895069996],
      [486059332, 78047139],
      [539611528, 236860222],
      [328891159, 833572609],
      [561041358, 896191043],
      [469734995, 511499580],
      [868786087, 593647615],
      [502014973, 630219398],
      [834825976, 939531210],
      [232809706, 831430339],
      [446916520, 518080962],
      [516594877, 208057152],
      [851130172, 768268153],
      [665228968, 134767900],
      [347594646, 46036486],
      [675842115, 24895986],
      [877430373, 353382710],
      [167579980, 47992154],
      [125351210, 769215749],
      [438404131, 569154245],
      [604952972, 128325995],
      [304627075, 646626043],
      [651998767, 527382342],
      [121415369, 22955171],
      [46278664, 726969424],
      [650197837, 730272955],
      [326340006, 424213045],
      [242071539, 679004233],
      [208227275, 449583956],
      [688763276, 330569373],
      [657221239, 659946024],
      [760680906, 398786962],
      [695186876, 163719246],
      [416909447, 908414565],
      [59247263, 674732497],
      [396812330, 607544608],
      [752069054, 728117920],
    ],
    86,
    [136181398, 475556834]
  )
);

// 3
// 4
// 1
// 4
// 2
// 6
// 7
// 45
