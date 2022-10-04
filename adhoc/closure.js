const obj = { a: 1 };

function outerFunc() {
  return () => {
    return (obj.a = obj.a + 1);
  };
}

const res = outerFunc();

res();

obj.a = 2;

console.log(res());
