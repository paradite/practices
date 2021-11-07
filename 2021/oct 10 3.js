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

var StockPrice = function () {
  this.minHeap = new BinaryHeap(
    (a) => a.value,
    (a) => {
      return a.id;
    },
    'value'
  );
  this.maxHeap = new BinaryHeap(
    (a) => -a.value,
    (a) => {
      return a.id;
    },
    'value'
  );
  this.currentTime = 0;
  this.currentPrice = 0;
};

/**
 * @param {number} timestamp
 * @param {number} price
 * @return {void}
 */
StockPrice.prototype.update = function (timestamp, price) {
  if (timestamp >= this.currentTime) {
    this.currentTime = timestamp;
    this.currentPrice = price;
  }
  if (this.minHeap.map[timestamp] >= 0) {
    if (price >= this.minHeap.content[this.minHeap.map[timestamp]].value) {
      this.minHeap.increaseKey(timestamp, price);
    } else {
      this.minHeap.decreaseKey(timestamp, price);
    }
    if (price >= this.maxHeap.content[this.maxHeap.map[timestamp]].value) {
      this.maxHeap.decreaseKey(timestamp, price);
    } else {
      this.maxHeap.increaseKey(timestamp, price);
    }
  } else {
    this.minHeap.push({
      id: timestamp,
      value: price,
    });
    this.maxHeap.push({
      id: timestamp,
      value: price,
    });
  }
};

/**
 * @return {number}
 */
StockPrice.prototype.current = function () {
  return this.currentPrice;
};

/**
 * @return {number}
 */
StockPrice.prototype.maximum = function () {
  return this.maxHeap.peak().value;
};

/**
 * @return {number}
 */
StockPrice.prototype.minimum = function () {
  return this.minHeap.peak().value;
};

/**
 * Your StockPrice object will be instantiated and called as such:
 * var obj = new StockPrice()
 * obj.update(timestamp,price)
 * var param_2 = obj.current()
 * var param_3 = obj.maximum()
 * var param_4 = obj.minimum()
 */
// var obj = new StockPrice();
// obj.update(3, 102);
// obj.update(5, 95);
// obj.update(5, 109);
// obj.update(3, 2000);
// obj.update(10, 50);
// obj.update(5, 6000);
// obj.update(13, 20);
// obj.update(3, 50);
// obj.update(16, 100);
// obj.update(11, 3500);
// obj.update(10, 9999);
// console.log(obj.maximum());
// console.log(obj.minimum());
