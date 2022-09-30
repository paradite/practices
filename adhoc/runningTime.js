const ns = [10, 100, 1000];

for (let x = 0; x < ns.length; x++) {
  const n = ns[x];
  let count = 0;

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j += i) {
      count++;
    }
  }

  console.log(n, count);
}
