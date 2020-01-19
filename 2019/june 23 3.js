// https://leetcode.com/contest/weekly-contest-142/problems/find-in-mountain-array/

/**
 * // This is the MountainArray's API interface.
 * // You should not implement it, or speculate about its implementation
 * function MountainArray() {
 *
 *     @param {integer} index
 *     @return {integer}
 *     this.get = function(index) {
 *         ...
 *     };
 *
 *     @return {integer}
 *     this.length = function() {
 *         ...
 *     };
 * };
 */
/**
 * @param {number} target
 * @param {MountainArray} mountainArr
 * @return {number}
 */
var findInMountainArray = function(target, mountainArr) {
  let min = 0;
  let max = mountainArr.length();
  let middle = Math.floor((min+max)/2);
  let cur = mountainArr.get(middle);
  let next = mountainArr.get(middle + 1);
  let previous = mountainArr.get(middle - 1);
  while(!(previous < cur && cur > next)) {
    if (previous < cur && cur < next) {
      min = middle + 1;
      middle = Math.floor((min+max)/2);
      cur = mountainArr.get(middle);
      next = mountainArr.get(middle + 1);
      previous = mountainArr.get(middle - 1);
    } else {
      max = middle - 1;
      middle = Math.floor((min+max)/2);
      cur = mountainArr.get(middle);
      next = mountainArr.get(middle + 1);
      previous = mountainArr.get(middle - 1);
    }
  }
  if (cur === target) {
    return middle;
  } else {
    let ans = binarySearchNormal(mountainArr, target, 0, mountainArr.length());
    if (ans > -1) {
      return ans;
    } else {
      return binarySearchReverse(mountainArr, target, 0, mountainArr.length()); 
    }
  }
};

const binarySearchNormal = function(arr, target, min, max) {
  if (min === max) {
    if (arr.get(i) === target) {
      return i;
    } else {
      return -1;
    }
  }
  if (min + 1 === max) {
    if (arr.get(min) === target) {
      return min;
    } else if(arr.get(max) === target) {
      return max;
    } else {
      return -1;
    }
  }
  const midIndex = Math.floor((min+max)/2);
  const cur = arr.get(midIndex);
  if (cur >= target) {
    return binarySearchNormal(arr, target, min, midIndex);
  } else {
    return binarySearchNormal(arr, target, midIndex, max);
  }
}

const binarySearchReverse = function(arr, target, min, max) {
  if (min === max) {
    if (arr.get(i) === target) {
      return i;
    } else {
      return -1;
    }
  }
  if (min + 1 === max) {
    if (arr.get(min) === target) {
      return min;
    } else if(arr.get(max) === target) {
      return max;
    } else {
      return -1;
    }
  }
  const midIndex = Math.floor((min+max)/2);
  const cur = arr.get(midIndex);
  if (cur >= target) {
    return binarySearchReverse(arr, target, midIndex, max);
  } else {
    return binarySearchReverse(arr, target, min, midIndex);
  }
}

// [0,5,3,1]
// 0

console.log(binarySearchNormal([0,1,3], 3, 0, 2));
console.log(binarySearchNormal([0,1,5,8], 1, 0, 3));
