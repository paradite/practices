// prettier-ignore
if (typeof _ === 'undefined') {
  _ = require('lodash');
}

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
      throw 'Error: id "' + this.idFunction(elt) + '" already present in heap';
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
};

/**
 * @param {number[][]} classes
 * @param {number} extraStudents
 * @return {number}
 */
var maxAverageRatio = function (classes, extraStudents) {
  const queue = new BinaryHeap(
    (a) => -a.value,
    (a) => {
      return a.id;
    },
    'value'
  );
  for (let i = 0; i < classes.length; i++) {
    const [pass, total] = classes[i];
    if (pass === total) continue;
    queue.push({
      id: i,
      value: (pass + 1) / (total + 1) - pass / total,
    });
  }
  // console.log('TCL ~ queue', queue);
  while (extraStudents && queue.size() > 0) {
    const c = queue.pop();
    // console.log('TCL ~ c', c);
    classes[c.id] = [classes[c.id][0] + 1, classes[c.id][1] + 1];
    const [pass, total] = classes[c.id];
    queue.push({
      id: c.id,
      value: (pass + 1) / (total + 1) - pass / total,
    });
    extraStudents--;
  }
  // console.log('TCL ~ classes', classes);
  return (
    _.sum(
      classes.map((c) => {
        const [pass, total] = c;
        return pass / total;
      })
    ) / classes.length
  );
};

// prettier-ignore
console.log(maxAverageRatio([[1,2],[3,5],[2,2]], 2));
// prettier-ignore
console.log(maxAverageRatio([[1,1],[3,3],[2,2]], 100));
// prettier-ignore
console.log(maxAverageRatio([[2,4],[3,9],[4,5],[2,10]], 4));
