const mod = Math.pow(10, 9) + 7;

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
 * @param {number[][]} orders
 * @return {number}
 */
var getNumberOfBacklogOrders = function (orders) {
  const buyQueue = new BinaryHeap(
    (a) => -a.value,
    (a) => {
      return a.id;
    },
    'value'
  );

  const sellQueue = new BinaryHeap(
    (a) => a.value,
    (a) => {
      return a.id;
    },
    'value'
  );

  for (let i = 0; i < orders.length; i++) {
    const [price, amount, type] = orders[i];
    if (type === 0) {
      buyQueue.push({
        value: price,
        amount,
        id: i,
      });
    } else {
      sellQueue.push({
        value: price,
        amount,
        id: i,
      });
    }
    let buy = buyQueue.pop();
    let sell = sellQueue.pop();
    // console.log('TCL ~ buy', buy);
    // console.log('TCL ~ sell', sell);
    if (!buy) {
      sellQueue.push(sell);
    }
    if (!sell) {
      buyQueue.push(buy);
    }
    if (buy && sell && buy.value < sell.value) {
      sellQueue.push(sell);
      buyQueue.push(buy);
    }
    while (buy && sell && buy.value >= sell.value) {
      if (buy.amount > sell.amount) {
        buy.amount = buy.amount - sell.amount;
        buyQueue.push(buy);
      } else if (buy.amount < sell.amount) {
        sell.amount = sell.amount - buy.amount;
        sellQueue.push(sell);
      } else {
        // do nothing
      }
      buy = buyQueue.pop();
      sell = sellQueue.pop();
      if (!buy) {
        sellQueue.push(sell);
      }
      if (!sell) {
        buyQueue.push(buy);
      }
      if (buy && sell && buy.value < sell.value) {
        sellQueue.push(sell);
        buyQueue.push(buy);
      }
    }
  }
  // console.log('TCL ~ buyQueue', buyQueue);
  // console.log('TCL ~ sellQueue', sellQueue);
  let leftover = 0;
  while (buyQueue.size()) {
    leftover = (leftover + buyQueue.pop().amount) % mod;
  }
  while (sellQueue.size()) {
    leftover = (leftover + sellQueue.pop().amount) % mod;
  }
  return leftover;
};

// prettier-ignore
// console.log(getNumberOfBacklogOrders([[10,5,0],[15,2,1],[25,1,1],[30,4,0]]));
