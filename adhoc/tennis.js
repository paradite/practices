let finish3 = 0;
let finish2 = 0;

for (let n = 0; n < 10000; n++) {
  let win = 0;
  let loss = 0;

  let res = '';
  for (let i = 0; i < 3; i++) {
    const n = Math.round(Math.random() - 0.2);
    if (n === 0) {
      win++;
      res += 'w';
      // console.log({ i }, 'win');
    } else {
      res += 'l';
      loss++;
      // console.log({ i }, 'loss');
    }

    if (i === 1 && (win >= 2 || loss >= 2)) {
      finish2++;
      // console.log({ i, res }, 'finish2');
      break;
    }
    if (i === 2) {
      // console.log({ i, res }, 'finish3');
      finish3++;
    }
  }
}

console.log({ finish2, finish3 });
