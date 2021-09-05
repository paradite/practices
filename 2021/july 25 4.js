/**
 * @param {string[][]} paths
 * @return {string[][]}
 */
var deleteDuplicateFolder = function (paths) {
  let exist = {};
  for (let i = 0; i < paths.length; i++) {
    const element = paths[i];
    if (element.length > 1) {
      const suffix = element.slice(1).join('/');
      console.log('TCL ~ suffix', suffix);
      exist[suffix] = exist[suffix] ? 1 + exist[suffix] : 1;
    }
  }
  console.log('TCL ~ exist', exist);
  let result = [];
  let prefix = [];
  for (let i = 0; i < paths.length; i++) {
    const element = paths[i];
    if (element.length > 1) {
      const suffix = element.slice(1).join('/');
      if (!exist[suffix] || exist[suffix] === 1) {
        result.push(element);
      } else {
        prefix.push(element.slice(0, -1).join('/'));
      }
    } else {
      result.push(element);
    }
  }
  console.log('TCL ~ result', result);
  console.log('TCL ~ prefix', prefix);
  let result2 = [];
  for (let i = 0; i < result.length; i++) {
    const element = result[i];
    // console.log("TCL ~ element.join('/') ", element.join('/'));
    if (prefix.includes(element.join('/'))) {
      continue;
    } else {
      result2.push(element);
    }
  }
  console.log('TCL ~ result2', result2);
  return result2;
};

console.log(
  deleteDuplicateFolder([
    ['a'],
    ['c'],
    ['d'],
    ['a', 'b'],
    ['c', 'b'],
    ['d', 'a'],
  ])
);

console.log(
  deleteDuplicateFolder([
    ['a'],
    ['c'],
    ['a', 'b'],
    ['c', 'b'],
    ['a', 'b', 'x'],
    ['a', 'b', 'x', 'y'],
    ['w'],
    ['w', 'y'],
  ])
);
