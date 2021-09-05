console.log(123);
const arr = [3, 6, 1, 0];
console.log(arr.sort((a, b) => a - b));

function test() {
  const args = Array.prototype.slice.call(arguments);
  const args2 = Array.from(arguments);
  console.log(args);
  console.log(args2);
}

test(1, 2, 3, 'df', undefined, null, 999);
