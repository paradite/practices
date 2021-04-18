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
 * @param {number[][]} tasks
 * @return {number[]}
 */
var getOrder = function (tasks) {
  tasks = tasks.map((t, i) => {
    t[2] = i;
    return t;
  });
  const ans = [];
  const queue = new BinaryHeap(
    (a) => a.value * 10000000000 + a.id,
    (a) => {
      return a.id;
    },
    'value'
  );
  tasks.sort((a, b) => {
    const [aq, ap] = a;
    const [bq, bp] = b;
    if (aq === bq) {
      return ap - bp;
    } else {
      return aq - bq;
    }
  });
  // console.log('TCL ~ tasks', tasks);
  const tasksOjb = tasks.map((task) => {
    return {
      id: task[2],
      value: task[1],
      enqueue: task[0],
    };
  });
  // console.log('TCL ~ tasksOjb', tasksOjb);
  let curr = 0;
  queue.push(tasksOjb[curr]);
  let currTime = tasksOjb[curr].enqueue;
  curr++;
  while (queue.size()) {
    const task = queue.pop();
    ans.push(task.id);
    const timePassed = task.value;
    currTime += timePassed;

    let next = tasksOjb[curr];
    while (next && next.enqueue <= currTime) {
      queue.push(next);
      curr++;
      next = tasksOjb[curr];
    }
    if (queue.size() === 0 && curr < tasksOjb.length) {
      queue.push(tasksOjb[curr]);
      curr++;
    }
  }
  return ans;
};

// prettier-ignore
console.log(getOrder([[1,2],[2,4],[1000000,2],[1000000,8],[1000000,1],[3,2],[1000,1]]));
