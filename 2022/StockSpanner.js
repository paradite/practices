var StockSpanner = function () {
  this.arr = [];
  this.max = 0;
};

/**
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function (price) {
  this.arr.push(price);
  if (price >= this.max) {
    this.max = price;
    return this.arr.length;
  }
  for (let i = this.arr.length - 1; i >= 0; i--) {
    const element = this.arr[i];
    if (element > price) {
      return this.arr.length - i - 1;
    }
  }
  return this.arr.length;
};

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
var obj = new StockSpanner();
console.log(obj.next(100));
console.log(obj.next(80));
console.log(obj.next(60));
console.log(obj.next(70));
console.log(obj.next(60));
console.log(obj.next(75));
console.log(obj.next(85));
