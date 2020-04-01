/**
 * @param {number} maxSize
 */
var CustomStack = function(maxSize) {
  this.maxSize = maxSize;
  this.stack = new Array();
  this.increments = new Array(maxSize).fill(0);
};

/**
 * @param {number} x
 * @return {void}
 */
CustomStack.prototype.push = function(x) {
  if (this.stack.length === this.maxSize) return;
  this.stack.push(x);
};

/**
 * @return {number}
 */
CustomStack.prototype.pop = function() {
  // console.log('TCL: this.stack', this.stack);
  // console.log('TCL: this.increments', this.increments);
  if (this.stack.length === 0) return -1;
  const length = this.stack.length - 1;
  let extra = 0;
  if (this.increments[length]) {
    extra = this.increments[length];
    if (length - 1 >= 0) {
      this.increments[length - 1] += extra;
    }
    this.increments[length] = 0;
  }
  return this.stack.pop() + extra;
};

/**
 * @param {number} k
 * @param {number} val
 * @return {void}
 */
CustomStack.prototype.increment = function(k, val) {
  if (k > this.stack.length - 1) {
    k = this.stack.length - 1;
  } else {
    k--;
  }
  this.increments[k] = this.increments[k] + val;
};

/**
 * Your CustomStack object will be instantiated and called as such:
 * var obj = new CustomStack(maxSize)
 * obj.push(x)
 * var param_2 = obj.pop()
 * obj.increment(k,val)
 */

//  ["CustomStack","pop","increment","push","increment","increment","increment","pop","increment"]
// [[30],[],[3,40],[30],[4,63],[2,79],[5,57],[],[5,32]]
