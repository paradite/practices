/**
 * @param {string} homepage
 */
var BrowserHistory = function(homepage) {
  this.array = [homepage];
  this.curruent = 0;
};

/**
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function(url) {
  if (this.curruent < this.array.length - 1) {
    this.array = this.array.slice(0, this.curruent + 1);
    this.curruent = this.array.length - 1;
  }
  this.array.push(url);
  this.curruent++;
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function(steps) {
  if (steps > this.curruent) {
    steps = this.curruent;
  }
  this.curruent = this.curruent - steps;
  return this.array[this.curruent];
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function(steps) {
  if (this.curruent + steps > this.array.length - 1) {
    this.curruent = this.array.length - 1;
    return this.array[this.curruent];
  } else {
    this.curruent = this.curruent + steps;
    return this.array[this.curruent];
  }
};

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */
