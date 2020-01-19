/**
 * @param {number} length
 */
var SnapshotArray = function(length) {
  this.arr = [];
  this.snap_id = 0;
  for (let i = 0; i < length; i++) {
    this.arr[i] = [];
    this.arr[i].last_snap = 0;
    this.arr[i][0] = 0;
  }
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
SnapshotArray.prototype.set = function(index, val) {
  this.arr[index][this.snap_id + 1] = val;
  this.arr[index].last_snap = this.snap_id + 1;
};

/**
 * @return {number}
 */
SnapshotArray.prototype.snap = function() {
  this.snap_id = this.snap_id + 1;
  return this.snap_id - 1;
};

/**
 * @param {number} index
 * @param {number} snap_id
 * @return {number}
 */
SnapshotArray.prototype.get = function(index, snap_id) {
  // console.log(this.arr);
  
  if (this.arr[index][snap_id + 1] >= 0) {
    return this.arr[index][snap_id + 1];
  } else if(this.arr[index].last_snap < snap_id + 1) {
    return this.arr[index][this.arr[index].last_snap];
  } else {
    for (let i = snap_id; i >= 0; i--) {
      if (this.arr[index][i] >= 0) {
        return this.arr[index][i];
      }
    }
    return 0;
  }
};

/**
 * Your SnapshotArray object will be instantiated and called as such:
 * var obj = new SnapshotArray(length)
 * obj.set(index,val)
 * var param_2 = obj.snap()
 * var param_3 = obj.get(index,snap_id)
 */


 ["SnapshotArray", "set", "snap", "set", "get", "set", "get"]
 [([3], [0, 5], [], [0, 6], [0, 0], [1, 1], [1, 0])]

 ["SnapshotArray", "set", "snap", "set", "get", "set", "get", "snap", "get", "get"]
 [([3], [0, 5], [], [0, 6], [0, 0], [1, 1], [1, 0], [], [1, 0], [1, 1])]

 ["SnapshotArray", "set", "snap", "set", "get", "set", "get", "get", "get"]
 [([3], [0, 5], [], [0, 6], [0, 0], [1, 1], [1, 0], [1, 0], [1, 1])]

 ["SnapshotArray", "snap", "snap", "get", "set", "snap", "set"]
 [[4], [], [], [3, 1], [2, 4], [], [1, 4]]

["SnapshotArray","set","set","snap","get","set","snap","set","set","get","get"]
[[3],[1,18],[1,4],[],[0,0],[0,20],[],[0,2],[1,1],[1,1],[1,0]]

[null,null,null,0,0,null,1,null,null,4,4]