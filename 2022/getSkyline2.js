function BinaryHeap(scoreFunction, idFunction, valueProp) {
  this.content = [];
  this.scoreFunction = scoreFunction;
  this.idFunction = idFunction;
  this.valueProp = valueProp;
  this.map = {};
}

BinaryHeap.prototype = {
  size: function () {
    return this.content.length;
  },

  push: function (elt) {
    if (this.map[this.idFunction(elt)] !== undefined) {
      // ignore duplicates
      return;
    }

    this.content.push(elt);
    this.bubbleUp(this.content.length - 1);
  },

  pop: function () {
    var result = this.content[0];
    var end = this.content.pop();
    if (result !== undefined) {
      delete this.map[this.idFunction(result)];
    }

    if (this.content.length > 0) {
      this.content[0] = end;
      this.map[this.idFunction(end)] = 0;
      this.sinkDown(0);
    }

    return result;
  },

  bubbleUp: function (n) {
    var element = this.content[n];
    var score = this.scoreFunction(element);

    while (n > 0) {
      var parentN = Math.floor((n - 1) / 2);
      var parent = this.content[parentN];

      if (this.scoreFunction(parent) < score) break;

      this.map[this.idFunction(element)] = parentN;
      this.map[this.idFunction(parent)] = n;

      this.content[parentN] = element;
      this.content[n] = parent;
      n = parentN;
    }

    this.map[this.idFunction(element)] = n;

    return n;
  },

  sinkDown: function (n) {
    var element = this.content[n];
    var score = this.scoreFunction(element);

    while (true) {
      var child2N = (n + 1) * 2;
      var child1N = child2N - 1;
      var swap = null;

      if (child1N < this.content.length) {
        var child1 = this.content[child1N];
        child1score = this.scoreFunction(child1);
        if (score > child1score) {
          swap = child1N;
        }
      }

      if (child2N < this.content.length) {
        var child2 = this.content[child2N];
        var child2score = this.scoreFunction(child2);
        if ((swap == null ? score : child1score) > child2score) {
          swap = child2N;
        }
      }

      if (swap == null) break;

      this.map[this.idFunction(element)] = swap;
      this.map[this.idFunction(this.content[swap])] = n;

      this.content[n] = this.content[swap];
      this.content[swap] = element;
      n = swap;
    }

    this.map[this.idFunction(element)] = n;

    return n;
  },

  decreaseKey: function (id, value) {
    var n = this.map[id];
    this.content[n][this.valueProp] = value;
    this.bubbleUp(n);
  },

  increaseKey: function (id, value) {
    var n = this.map[id];
    this.content[n][this.valueProp] = value;
    this.sinkDown(n);
  },

  peak: function () {
    return this.content[0];
  },
};

/**
 * @param {number[][]} buildings
 * @return {number[][]}
 */
var getSkyline = function (buildings) {
  const maxHeap = new BinaryHeap(
    (a) => -a[0],
    (a) => {
      return `${a[0]}-${a[1]}-${a[2]}`;
    },
    '0'
  );

  let points = [];
  for (let i = 0; i < buildings.length; i++) {
    const [start, end] = buildings[i];
    points.push(...[start, end]);
  }
  points = Array.from(new Set(points)).sort((a, b) => a - b);

  // maxHeap.push([buildings[0][2], buildings[0][1]]);
  const res = [];
  // res.push([buildings[0][0], buildings[0][2]]);
  let cursor = 0;
  let height = -1;
  for (let i = 0; i < points.length; i++) {
    const x = points[i];
    // console.log('TCL ~ x', x);
    while (cursor < buildings.length && buildings[cursor][0] <= x) {
      maxHeap.push([
        buildings[cursor][2],
        buildings[cursor][1],
        buildings[cursor][0],
      ]);
      cursor++;
    }
    while (maxHeap.peak() && maxHeap.peak()[1] <= x) {
      maxHeap.pop();
    }
    // console.log('TCL ~ maxHeap.peak()', maxHeap.peak());
    if (!maxHeap.peak()) {
      res.push([x, 0]);
    } else if (maxHeap.peak()[0] !== height) {
      res.push([x, maxHeap.peak()[0]]);
      height = maxHeap.peak()[0];
    }
  }
  // res.push([buildings[buildings.length - 1][1], 0]);
  return res;
};

// prettier-ignore
console.log(getSkyline([[2,9,10],[3,7,15],[5,12,12],[15,20,10],[19,24,8]]));
// [[2,10],[3,15],[7,12],[12,0],[15,10],[20,8],[24,0]]
// prettier-ignore
console.log(getSkyline([[0,2,3],[2,5,3]]));
// [[0,3],[5,0]]
// prettier-ignore
console.log(getSkyline([[3,7,8],[3,8,7],[3,9,6],[3,10,5],[3,11,4],[3,12,3],[3,13,2],[3,14,1]]));
// [[3,8],[7,7],[8,6],[9,5],[10,4],[11,3],[12,2],[13,1],[14,0]]
// prettier-ignore
console.log(getSkyline([[2,4,70],[3,8,30],[6,100,41],[7,15,70],[10,30,102],[15,25,76],[60,80,91],[70,90,72],[85,120,59]]));
// [[2,70],[4,30],[6,41],[7,70],[10,102],[30,41],[60,91],[80,72],[90,59],[120,0]]
// prettier-ignore
console.log(getSkyline([[1,2,1],[1,2,2],[1,2,3]]));
// [[1,3],[2,0]]
// prettier-ignore
console.log(getSkyline([[1,5,3], [1,5,3], [1,5,3]]));

// console.log(getValidSegments([ 6, 100, 41 ], [[2,4,70],[3,8,30],[6,100,41],[7,15,70],[10,30,102],[15,25,76],[60,80,91],[70,90,72],[85,120,59]]))
