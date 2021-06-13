// prettier-ignore
if (typeof _ === 'undefined') {
      _ = require('lodash');
    }

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 */
var FindSumPairs = function (nums1, nums2) {
  this.map = _.countBy(nums2);
  this.nums1 = nums1;
  this.nums2 = nums2;
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
FindSumPairs.prototype.add = function (index, val) {
  this.map[this.nums2[index]] = this.map[this.nums2[index]] - 1;
  this.nums2[index] += val;
  if (this.map[this.nums2[index]]) {
    this.map[this.nums2[index]] = this.map[this.nums2[index]] + 1;
  } else {
    this.map[this.nums2[index]] = 1;
  }
};

/**
 * @param {number} tot
 * @return {number}
 */
FindSumPairs.prototype.count = function (tot) {
  let c = 0;
  for (let i = 0; i < this.nums1.length; i++) {
    const element = tot - this.nums1[i];
    if (this.map[element]) {
      c += this.map[element];
    }
  }
  // console.log('TCL ~ c', c);
  return c;
};

/**
 * Your FindSumPairs object will be instantiated and called as such:
 * var obj = new FindSumPairs(nums1, nums2)
 * obj.add(index,val)
 * var param_2 = obj.count(tot)
 */

var findSumPairs = new FindSumPairs([1, 1, 2, 2, 2, 3], [1, 4, 5, 2, 5, 4]);
findSumPairs.count(7); // return 8;
findSumPairs.add(3, 2); // now nums2 = [1,4,5,4,5,4]
findSumPairs.count(8); // return 2; pairs (5,2), (5,4) make 3 + 5
findSumPairs.count(4); // return 1; pair (5,0) makes 3 + 1
findSumPairs.add(0, 1); // now nums2 = [2,4,5,4,5,4]
findSumPairs.add(1, 1); // now nums2 = [2,5,5,4,5,4]
findSumPairs.count(7); // return 11; pairs (2,1), (2,2), (2,4), (3,1), (3,2), (3,4), (4,1), (4,2), (4,4) make 2 + 5 and pairs (5,3), (5,5) make 3 + 4
