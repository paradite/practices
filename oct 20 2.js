var isSub = function(map, folder) {
  let components = folder.split('/');
  components = components.slice(1, components.length - 1);
  // console.log('TCL: components', components);
  while (components.length >= 1) {
    if (components.length === 1) {
      return map['/' + components[0]];
    } else {
      const prefix = '/' + components.join('/');
      // console.log('TCL: prefix', prefix);
      if (map[prefix]) {
        return true;
      }
      components = components.slice(0, components.length - 1);
    }
  }
};

/**
 * @param {string[]} folder
 * @return {string[]}
 */
var removeSubfolders = function(folder) {
  let map = {};
  for (let i = 0; i < folder.length; i++) {
    const element = folder[i];
    map[element] = true;
  }
  let ans = [];
  for (let i = 0; i < folder.length; i++) {
    const element = folder[i];
    const sub = isSub(map, element);
    if (!sub) {
      ans.push(element);
    }
  }
  return ans;
};

console.log(removeSubfolders(['/a', '/a/b', '/c/d', '/c/d/e', '/c/f']));
console.log(removeSubfolders(['/a', '/a/b/c', '/a/b/d']));
console.log(removeSubfolders(['/a/b/c', '/a/b/ca', '/a/b/d']));
console.log(removeSubfolders(['/a/b/c']));
console.log(removeSubfolders(['/a']));
