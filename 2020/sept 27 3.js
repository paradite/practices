/**
 * @param {string} kingName
 */
var ThroneInheritance = function (kingName) {
  this.root = {
    name: kingName,
    children: [],
  };
  this.map = {};
  this.map[kingName] = this.root;
  // console.log('ThroneInheritance -> this.map', this.map);
};

/**
 * @param {string} parentName
 * @param {string} childName
 * @return {void}
 */
ThroneInheritance.prototype.birth = function (parentName, childName) {
  let obj = this.map[parentName];
  let child = {
    name: childName,
    children: [],
  };
  obj.children.push(child);
  this.map[childName] = child;
  // console.log('ThroneInheritance.prototype.birth -> this.map', this.map);
};

/**
 * @param {string} name
 * @return {void}
 */
ThroneInheritance.prototype.death = function (name) {
  let obj = this.map[name];
  obj.death = true;
};

/**
 * @return {string[]}
 */
ThroneInheritance.prototype.getInheritanceOrder = function () {
  let order = [];
  const dfs = (node) => {
    if (!node.death) {
      order.push(node.name);
    }
    let children = node.children;
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      dfs(child);
    }
  };
  dfs(this.root);
  return order;
};

/**
 * Your ThroneInheritance object will be instantiated and called as such:
 * var obj = new ThroneInheritance(kingName)
 * obj.birth(parentName,childName)
 * obj.death(name)
 * var param_3 = obj.getInheritanceOrder()
 */
