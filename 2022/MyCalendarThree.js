function isSame(objA, objB, compare, compareContext) {
  var ret = compare ? compare.call(compareContext, objA, objB) : void 0;

  if (ret !== void 0) {
    return !!ret;
  }

  if (objA === objB) {
    return true;
  }

  if (typeof objA !== 'object' || !objA || typeof objB !== 'object' || !objB) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);

  // Test for A's keys different from B.
  for (var idx = 0; idx < keysA.length; idx++) {
    var key = keysA[idx];

    if (!bHasOwnProperty(key)) {
      return false;
    }

    var valueA = objA[key];
    var valueB = objB[key];

    ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;

    if (ret === false || (ret === void 0 && valueA !== valueB)) {
      return false;
    }
  }

  return true;
}

function IntervalTree() {
  this.count = 0;
}
IntervalTree.prototype.insert = function (record) {
  if (record.low > record.high) {
    throw new Error('`low` value must be lower or equal to `high` value');
  }
  if (this.root === undefined) {
    // Base case: Tree is empty, new node becomes root
    this.root = new Node(this, record);
    this.count++;
    return true;
  } else {
    // Otherwise, check if node already exists with the same key
    var node = this.root.searchExisting(record.low);
    if (node !== undefined) {
      // Check the records in this node if there already is the one with same low, high, data
      for (var i = 0; i < node.records.length; i++) {
        if (isSame(node.records[i], record)) {
          // This record is same as the one we're trying to insert; return false to indicate
          // nothing has been inserted
          return false;
        }
      }
      // Add the record to the node
      node.records.push(record);
      // Update max of the node and its parents if necessary
      if (record.high > node.max) {
        node.max = record.high;
        if (node.parent) {
          node.parent.updateMaxOfParents();
        }
      }
      this.count++;
      return true;
    } else {
      // Node with this key doesn't already exist. Call insert function on root's node
      this.root.insert(record);
      this.count++;
      return true;
    }
  }
};
IntervalTree.prototype.search = function (low, high) {
  if (this.root === undefined) {
    // Tree is empty; return empty array
    return [];
  } else {
    return this.root.search(low, high);
  }
};
IntervalTree.prototype.remove = function (record) {
  if (this.root === undefined) {
    // Tree is empty; nothing to remove
    return false;
  } else {
    var node = this.root.searchExisting(record.low);
    if (node === undefined) {
      return false;
    } else if (node.records.length > 1) {
      var removedRecord =
        // Node with this key has 2 or more records. Find the one we need and remove it
        void 0;
      // Node with this key has 2 or more records. Find the one we need and remove it
      for (var i = 0; i < node.records.length; i++) {
        if (isSame(node.records[i], record)) {
          removedRecord = node.records[i];
          node.records.splice(i, 1);
          break;
        }
      }
      if (removedRecord) {
        removedRecord = undefined;
        // Update max of that node and its parents if necessary
        if (record.high === node.max) {
          var nodeHigh = node.getNodeHigh();
          if (node.left !== undefined && node.right !== undefined) {
            node.max = max(max(node.left.max, node.right.max), nodeHigh);
          } else if (node.left !== undefined && node.right === undefined) {
            node.max = max(node.left.max, nodeHigh);
          } else if (node.left === undefined && node.right !== undefined) {
            node.max = max(node.right.max, nodeHigh);
          } else {
            node.max = nodeHigh;
          }
          if (node.parent) {
            node.parent.updateMaxOfParents();
          }
        }
        this.count--;
        return true;
      } else {
        return false;
      }
    } else if (node.records.length === 1) {
      // Node with this key has only 1 record. Check if the remaining record in this node is
      // actually the one we want to remove
      if (isSame(node.records[0], record)) {
        // The remaining record is the one we want to remove. Remove the whole node from the tree
        if (this.root.key === node.key) {
          // We're removing the root element. Create a dummy node that will temporarily take
          // root's parent role
          var rootParent = new Node(this, {
            low: record.low,
            high: record.low,
          });
          rootParent.left = this.root;
          this.root.parent = rootParent;
          var removedNode = this.root.remove(node);
          this.root = rootParent.left;
          if (this.root !== undefined) {
            this.root.parent = undefined;
          }
          if (removedNode) {
            removedNode = undefined;
            this.count--;
            return true;
          } else {
            return false;
          }
        } else {
          var removedNode = this.root.remove(node);
          if (removedNode) {
            removedNode = undefined;
            this.count--;
            return true;
          } else {
            return false;
          }
        }
      } else {
        // The remaining record is not the one we want to remove
        return false;
      }
    } else {
      // No records at all in this node?! Shouldn't happen
      return false;
    }
  }
};
IntervalTree.prototype.inOrder = function () {
  return new InOrder(this.root);
};
IntervalTree.prototype.preOrder = function () {
  return new PreOrder(this.root);
};

function max(a, b) {
  return a < b ? b : a;
}
function height(node) {
  if (node === undefined) {
    return -1;
  } else {
    return node.height;
  }
}

function Node(intervalTree, record) {
  this.intervalTree = intervalTree;
  this.records = [];
  this.height = 0;
  this.key = record.low;
  this.max = record.high;
  // Save the array of all records with the same key for this node
  this.records.push(record);
}
// Gets the highest record.high value for this node
Node.prototype.getNodeHigh = function () {
  var high = this.records[0].high;
  for (var i = 1; i < this.records.length; i++) {
    if (this.records[i].high > high) {
      high = this.records[i].high;
    }
  }
  return high;
};
// Updates height value of the node. Called during insertion, rebalance, removal
Node.prototype.updateHeight = function () {
  this.height = max(height(this.left), height(this.right)) + 1;
};
// Updates the max value of all the parents after inserting into already existing node, as well as
// removing the node completely or removing the record of an already existing node. Starts with
// the parent of an affected node and bubbles up to root
Node.prototype.updateMaxOfParents = function () {
  if (this === undefined) {
    return;
  }
  var thisHigh = this.getNodeHigh();
  if (this.left !== undefined && this.right !== undefined) {
    this.max = max(max(this.left.max, this.right.max), thisHigh);
  } else if (this.left !== undefined && this.right === undefined) {
    this.max = max(this.left.max, thisHigh);
  } else if (this.left === undefined && this.right !== undefined) {
    this.max = max(this.right.max, thisHigh);
  } else {
    this.max = thisHigh;
  }
  if (this.parent) {
    this.parent.updateMaxOfParents();
  }
};
/*
Left-Left case:

     z                                      y
    / \                                   /   \
   y   T4      Right Rotate (z)          x     z
  / \          - - - - - - - - ->       / \   / \
 x   T3                                T1 T2 T3 T4
/ \
T1   T2

Left-Right case:

   z                               z                           x
  / \                             / \                        /   \
 y   T4  Left Rotate (y)         x  T4  Right Rotate(z)     y     z
/ \      - - - - - - - - ->     / \      - - - - - - - ->  / \   / \
T1   x                           y  T3                      T1 T2 T3 T4
  / \                         / \
T2   T3                      T1 T2
*/
// Handles Left-Left case and Left-Right case after rebalancing AVL tree
Node.prototype._updateMaxAfterRightRotate = function () {
  var parent = this.parent;
  var left = parent.left;
  // Update max of left sibling (x in first case, y in second)
  var thisParentLeftHigh = left.getNodeHigh();
  if (left.left === undefined && left.right !== undefined) {
    left.max = max(thisParentLeftHigh, left.right.max);
  } else if (left.left !== undefined && left.right === undefined) {
    left.max = max(thisParentLeftHigh, left.left.max);
  } else if (left.left === undefined && left.right === undefined) {
    left.max = thisParentLeftHigh;
  } else {
    left.max = max(max(left.left.max, left.right.max), thisParentLeftHigh);
  }
  // Update max of itself (z)
  var thisHigh = this.getNodeHigh();
  if (this.left === undefined && this.right !== undefined) {
    this.max = max(thisHigh, this.right.max);
  } else if (this.left !== undefined && this.right === undefined) {
    this.max = max(thisHigh, this.left.max);
  } else if (this.left === undefined && this.right === undefined) {
    this.max = thisHigh;
  } else {
    this.max = max(max(this.left.max, this.right.max), thisHigh);
  }
  // Update max of parent (y in first case, x in second)
  parent.max = max(
    max(parent.left.max, parent.right.max),
    parent.getNodeHigh()
  );
};
/*
Right-Right case:

z                               y
/ \                            /   \
T1  y     Left Rotate(z)       z     x
 / \   - - - - - - - ->     / \   / \
T2  x                      T1 T2 T3 T4
   / \
  T3 T4

Right-Left case:

 z                            z                            x
/ \                          / \                         /   \
T1  y   Right Rotate (y)     T1  x      Left Rotate(z)   z     y
  / \  - - - - - - - - ->      / \   - - - - - - - ->  / \   / \
 x  T4                        T2  y                   T1 T2 T3 T4
/ \                              / \
T2   T3                           T3 T4
*/
// Handles Right-Right case and Right-Left case in rebalancing AVL tree
Node.prototype._updateMaxAfterLeftRotate = function () {
  var parent = this.parent;
  var right = parent.right;
  // Update max of right sibling (x in first case, y in second)
  var thisParentRightHigh = right.getNodeHigh();
  if (right.left === undefined && right.right !== undefined) {
    right.max = max(thisParentRightHigh, right.right.max);
  } else if (right.left !== undefined && right.right === undefined) {
    right.max = max(thisParentRightHigh, right.left.max);
  } else if (right.left === undefined && right.right === undefined) {
    right.max = thisParentRightHigh;
  } else {
    right.max = max(max(right.left.max, right.right.max), thisParentRightHigh);
  }
  // Update max of itself (z)
  var thisHigh = this.getNodeHigh();
  if (this.left === undefined && this.right !== undefined) {
    this.max = max(thisHigh, this.right.max);
  } else if (this.left !== undefined && this.right === undefined) {
    this.max = max(thisHigh, this.left.max);
  } else if (this.left === undefined && this.right === undefined) {
    this.max = thisHigh;
  } else {
    this.max = max(max(this.left.max, this.right.max), thisHigh);
  }
  // Update max of parent (y in first case, x in second)
  parent.max = max(max(parent.left.max, right.max), parent.getNodeHigh());
};
Node.prototype._leftRotate = function () {
  var rightChild = this.right;
  rightChild.parent = this.parent;
  if (rightChild.parent === undefined) {
    this.intervalTree.root = rightChild;
  } else {
    if (rightChild.parent.left === this) {
      rightChild.parent.left = rightChild;
    } else if (rightChild.parent.right === this) {
      rightChild.parent.right = rightChild;
    }
  }
  this.right = rightChild.left;
  if (this.right !== undefined) {
    this.right.parent = this;
  }
  rightChild.left = this;
  this.parent = rightChild;
  this.updateHeight();
  rightChild.updateHeight();
};
Node.prototype._rightRotate = function () {
  var leftChild = this.left;
  leftChild.parent = this.parent;
  if (leftChild.parent === undefined) {
    this.intervalTree.root = leftChild;
  } else {
    if (leftChild.parent.left === this) {
      leftChild.parent.left = leftChild;
    } else if (leftChild.parent.right === this) {
      leftChild.parent.right = leftChild;
    }
  }
  this.left = leftChild.right;
  if (this.left !== undefined) {
    this.left.parent = this;
  }
  leftChild.right = this;
  this.parent = leftChild;
  this.updateHeight();
  leftChild.updateHeight();
};
// Rebalances the tree if the height value between two nodes of the same parent is greater than
// two. There are 4 cases that can happen which are outlined in the graphics above
Node.prototype._rebalance = function () {
  if (height(this.left) >= 2 + height(this.right)) {
    var left = this.left;
    if (height(left.left) >= height(left.right)) {
      // Left-Left case
      this._rightRotate();
      this._updateMaxAfterRightRotate();
    } else {
      // Left-Right case
      left._leftRotate();
      this._rightRotate();
      this._updateMaxAfterRightRotate();
    }
  } else if (height(this.right) >= 2 + height(this.left)) {
    var right = this.right;
    if (height(right.right) >= height(right.left)) {
      // Right-Right case
      this._leftRotate();
      this._updateMaxAfterLeftRotate();
    } else {
      // Right-Left case
      right._rightRotate();
      this._leftRotate();
      this._updateMaxAfterLeftRotate();
    }
  }
};
Node.prototype.insert = function (record) {
  if (record.low < this.key) {
    // Insert into left subtree
    if (this.left === undefined) {
      this.left = new Node(this.intervalTree, record);
      this.left.parent = this;
    } else {
      this.left.insert(record);
    }
  } else {
    // Insert into right subtree
    if (this.right === undefined) {
      this.right = new Node(this.intervalTree, record);
      this.right.parent = this;
    } else {
      this.right.insert(record);
    }
  }
  // Update the max value of this ancestor if needed
  if (this.max < record.high) {
    this.max = record.high;
  }
  // Update height of each node
  this.updateHeight();
  // Rebalance the tree to ensure all operations are executed in O(logn) time. This is especially
  // important in searching, as the tree has a high chance of degenerating without the rebalancing
  this._rebalance();
};
Node.prototype._getOverlappingRecords = function (currentNode, low, high) {
  if (currentNode.key <= high && low <= currentNode.getNodeHigh()) {
    // Nodes are overlapping, check if individual records in the node are overlapping
    var tempResults = [];
    for (var i = 0; i < currentNode.records.length; i++) {
      if (currentNode.records[i].high >= low) {
        tempResults.push(currentNode.records[i]);
      }
    }
    return tempResults;
  }
  return [];
};
Node.prototype.search = function (low, high) {
  // Don't search nodes that don't exist
  if (this === undefined) {
    return [];
  }
  var leftSearch = [];
  var ownSearch = [];
  var rightSearch = [];
  // If interval is to the right of the rightmost point of any interval in this node and all its
  // children, there won't be any matches
  if (low > this.max) {
    return [];
  }
  // Search left children
  if (this.left !== undefined && this.left.max >= low) {
    leftSearch = this.left.search(low, high);
  }
  // Check this node
  ownSearch = this._getOverlappingRecords(this, low, high);
  // If interval is to the left of the start of this interval, then it can't be in any child to
  // the right
  if (high < this.key) {
    return leftSearch.concat(ownSearch);
  }
  // Otherwise, search right children
  if (this.right !== undefined) {
    rightSearch = this.right.search(low, high);
  }
  // Return accumulated results, if any
  return leftSearch.concat(ownSearch, rightSearch);
};
// Searches for a node by a `key` value
Node.prototype.searchExisting = function (low) {
  if (this === undefined) {
    return undefined;
  }
  if (this.key === low) {
    return this;
  } else if (low < this.key) {
    if (this.left !== undefined) {
      return this.left.searchExisting(low);
    }
  } else {
    if (this.right !== undefined) {
      return this.right.searchExisting(low);
    }
  }
  return undefined;
};
// Returns the smallest node of the subtree
Node.prototype._minValue = function () {
  if (this.left === undefined) {
    return this;
  } else {
    return this.left._minValue();
  }
};
Node.prototype.remove = function (node) {
  var parent = this.parent;
  if (node.key < this.key) {
    // Node to be removed is on the left side
    if (this.left !== undefined) {
      return this.left.remove(node);
    } else {
      return undefined;
    }
  } else if (node.key > this.key) {
    // Node to be removed is on the right side
    if (this.right !== undefined) {
      return this.right.remove(node);
    } else {
      return undefined;
    }
  } else {
    if (this.left !== undefined && this.right !== undefined) {
      // Node has two children
      var minValue = this.right._minValue();
      this.key = minValue.key;
      this.records = minValue.records;
      return this.right.remove(this);
    } else if (parent.left === this) {
      // One child or no child case on left side
      if (this.right !== undefined) {
        parent.left = this.right;
        this.right.parent = parent;
      } else {
        parent.left = this.left;
        if (this.left !== undefined) {
          this.left.parent = parent;
        }
      }
      parent.updateMaxOfParents();
      parent.updateHeight();
      parent._rebalance();
      return this;
    } else if (parent.right === this) {
      // One child or no child case on right side
      if (this.right !== undefined) {
        parent.right = this.right;
        this.right.parent = parent;
      } else {
        parent.right = this.left;
        if (this.left !== undefined) {
          this.left.parent = parent;
        }
      }
      parent.updateMaxOfParents();
      parent.updateHeight();
      parent._rebalance();
      return this;
    }
  }
  // Make linter happy
  return undefined;
};

var MyCalendarThree = function () {
  this.max = 0;
  this.counter = 0;
  this.intersectionPoints = new Set();
  this.intervalTree = new IntervalTree();
};

/**
 * @param {number} start
 * @param {number} end
 * @return {number}
 */
MyCalendarThree.prototype.book = function (start, end) {
  this.intervalTree.insert({
    low: start,
    high: end - 1,
    // prevent duplicate from being ignored
    counter: this.counter,
  });

  this.intersectionPoints.add(start);
  this.intersectionPoints.add(end - 1);
  // console.log(
  //   'TCL ~ this.intervalTree.search(start, start)',
  //   this.intervalTree.search(start, start)
  // );
  // console.log(
  //   'TCL ~ this.intervalTree.search(end - 1, end - 1)',
  //   this.intervalTree.search(end - 1, end - 1)
  // );
  const pointsArr = Array.from(this.intersectionPoints);
  for (let i = 0; i < pointsArr.length; i++) {
    const point = pointsArr[i];
    if (point >= start && point <= end - 1) {
      this.max = Math.max(
        this.max,
        this.intervalTree.search(point, point).length
      );
    }
  }
  // this.max = Math.max(
  //   this.max,
  //   this.intervalTree.search(start, start).length,
  //   this.intervalTree.search(end - 1, end - 1).length
  // );
  this.counter++;
  return this.max;
};

/**
 * Your MyCalendarThree object will be instantiated and called as such:
 * var obj = new MyCalendarThree()
 * var param_1 = obj.book(start,end)
 */

obj1 = new MyCalendarThree();
console.log(obj1.book(10, 20));
console.log(obj1.book(50, 60));
console.log(obj1.book(10, 40));
console.log(obj1.book(5, 15));
console.log(obj1.book(5, 10));
console.log(obj1.book(25, 55));

console.log();

obj2 = new MyCalendarThree();
console.log(obj2.book(0, 1000000000));
console.log(obj2.book(1, 2));
console.log(obj2.book(3, 5));
console.log(obj2.book(1, 6));
console.log(obj2.book(10, 20));
console.log(obj2.book(5, 10));
console.log(obj2.book(5, 10));
console.log(obj2.book(5, 10));
console.log(obj2.book(5, 10));

//  ["MyCalendarThree","book"]
// [[],[0,1000000000]]

console.log();

obj3 = new MyCalendarThree();
// prettier-ignore
var t =["book","book","book","book","book","book","book","book","book","book"]
// prettier-ignore
var a = [[24,40],[43,50],[27,43],[5,21],[30,40],[14,29],[3,19],[3,14],[25,39],[6,19]]
for (let i = 0; i < t.length; i++) {
  // console.log(a[i]);
  console.log(obj3[t[i]](a[i][0], a[i][1]));
}
