let evenhead = 0;
let oddhead = 0;

for (let n = 0; n < 10000000; n++) {
  let head = 0;
  let tail = 0;

  for (let i = 0; i < 100; i++) {
    const n = Math.round(Math.random());
    if (n === 0) {
      head++;
    } else {
      tail++;
    }
  }
  const isevenhead = head % 2 === 0;
  if (isevenhead) {
    evenhead++;
  } else {
    oddhead++;
  }

  // console.log({ head, tail, isevenhead });
}

console.log({ evenhead, oddhead });
