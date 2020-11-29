/**
 * @param {number} n
 */
var OrderedStream = function (n) {
  this.arr = new Array(5);
  // this.last = null;
  // console.log('OrderedStream -> this.arr', this.arr);
  this.ptr = 1;
};

/**
 * @param {number} id
 * @param {string} value
 * @return {string[]}
 */
OrderedStream.prototype.insert = function (id, value) {
  this.arr[id] = value;
  let re = [];
  console.log('OrderedStream.prototype.insert -> id', id);
  console.log('OrderedStream.prototype.insert -> this.ptr', this.ptr);
  if (id === this.ptr) {
    let i;
    for (i = id; i < this.arr.length; i++) {
      const element = this.arr[i];
      if (element) {
        re.push(element);
      } else {
        break;
      }
    }
    this.ptr = i;
  }
  // this.last = id;
  return re;
};

/**
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(id,value)
 */

var os = new OrderedStream(5);
// os.insert(3, 'ccccc'); // Inserts (3, "ccccc"), returns [].
console.log("os.insert(3, 'ccccc')", os.insert(3, 'ccccc'));
// os.insert(1, 'aaaaa'); // Inserts (1, "aaaaa"), returns ["aaaaa"].
console.log("os.insert(1, 'aaaaa')", os.insert(1, 'aaaaa'));
// os.insert(2, 'bbbbb'); // Inserts (2, "bbbbb"), returns ["bbbbb", "ccccc"].
console.log("os.insert(2, 'bbbbb')", os.insert(2, 'bbbbb'));
// os.insert(5, 'eeeee'); // Inserts (5, "eeeee"), returns [].
console.log("os.insert(5, 'eeeee')", os.insert(5, 'eeeee'));
// os.insert(4, 'ddddd'); // Inserts (4, "ddddd"), returns ["ddddd", "eeeee"].
console.log("os.insert(4, 'ddddd')", os.insert(4, 'ddddd'));
