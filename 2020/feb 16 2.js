var ProductOfNumbers = function() {
  this.arr = [];
  this.map = {};
};

/**
 * @param {number} num
 * @return {void}
 */
ProductOfNumbers.prototype.add = function(num) {
  this.arr.push(num);
  this.map = {};
};

/**
 * @param {number} k
 * @return {number}
 */
ProductOfNumbers.prototype.getProduct = function(k) {
  if (this.map[k]) {
    return this.map[k];
  }
  const last = this.arr.slice(-k);
  let ans = 1;
  for (let i = 1, j = last.length - 1; j >= 0; j--, i++) {
    const element = last[j];
    ans = ans * element;
    this.map[i] = ans;
  }
  this.map[k] = ans;
  return ans;
};

/**
 * Your ProductOfNumbers object will be instantiated and called as such:
 * var obj = new ProductOfNumbers()
 * obj.add(num)
 * var param_2 = obj.getProduct(k)
 */

const productOfNumbers = new ProductOfNumbers();
productOfNumbers.add(3); // [3]
productOfNumbers.add(0); // [3,0]
productOfNumbers.add(2); // [3,0,2]
productOfNumbers.add(5); // [3,0,2,5]
productOfNumbers.add(4); // [3,0,2,5,4]
productOfNumbers.getProduct(2); // return 20. The product of the last 2 numbers is 5 * 4 = 20
productOfNumbers.getProduct(3); // return 40. The product of the last 3 numbers is 2 * 5 * 4 = 40
productOfNumbers.getProduct(4); // return 0. The product of the last 4 numbers is 0 * 2 * 5 * 4 = 0
productOfNumbers.add(8); // [3,0,2,5,4,8]
productOfNumbers.getProduct(2); // return 32. The product of the last 2 numbers is 4 * 8 = 32
