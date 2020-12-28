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
 * @param {number[]} apples
 * @param {number[]} days
 * @return {number}
 */
var eatenApples = function (apples, days) {
  const queue = new BinaryHeap(
    (a) => a.value,
    (a) => {
      return a.id;
    },
    'value'
  );
  let day = 0;
  let ans = 0;
  queue.push({
    id: day,
    value: days[day] + day, // expiry date
    count: apples[day],
  });
  let pick = queue.pop();
  while (pick || day < days.length) {
    if (pick && pick.count > 0) {
      pick.count = pick.count - 1;
      ans++;
      queue.push(pick);
    }
    day++;
    if (day < apples.length) {
      queue.push({
        id: day,
        value: days[day] + day, // expiry date
        count: apples[day],
      });
    }
    pick = queue.pop();
    while (pick && (pick.count <= 0 || pick.value <= day)) {
      pick = queue.pop();
    }
  }
  return ans;
};

console.log(eatenApples([1], [2]));
console.log(eatenApples([1, 2, 3, 5, 2], [3, 2, 1, 4, 2]));
console.log(eatenApples([3, 0, 0, 0, 0, 2], [3, 0, 0, 0, 0, 2]));
console.log(eatenApples([20000], [20000]));
// prettier-ignore
console.log(eatenApples(
[9,10,1,7,0,2,1,4,1,7,0,11,0,11,0,0,9,11,11,2,0,5,5],
[3,19,1,14,0,4,1,8,2,7,0,13,0,13,0,0,2,2,13,1,0,3,7]));
// prettier-ignore
console.log(eatenApples([0,19,19,19,11,14,33,0,28,7,0,28,7,0,21,16,0,22,0,13,8,0,19,0,0,2,26,2,22,0,8,0,0,27,19,16,24,0,20,26,20,7,0,0,29,0,0,16,19,0,0,0,29,30,17,0,23,0,0,26,24,13,3,0,21,0,18,0],
  [0,5,1,16,7,10,54,0,40,2,0,23,4,0,20,18,0,40,0,22,8,0,35,0,0,3,24,1,8,0,10,0,0,2,38,8,4,0,36,33,14,9,0,0,56,0,0,21,27,0,0,0,14,20,18,0,42,0,0,44,3,8,3,0,10,0,27,0]));
