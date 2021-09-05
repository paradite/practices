ans = 0;
for (let i = 0; i < 8; i++) {
  for (let j = 0; j < 8; j++) {
    for (let k = 0; k < 8; k++) {
      for (let l = 0; l < 8; l++) {
        if (i !== j && i !== k && i !== l && j !== k && j !== l && k !== l) {
          let o = i - 1;
          let p = 9 - j;
          let q = 7 - l;
          let r = k - 2;
          if (
            i !== o &&
            i !== p &&
            i !== q &&
            i !== r &&
            j !== o &&
            j !== p &&
            j !== q &&
            j !== r &&
            k !== o &&
            k !== p &&
            k !== q &&
            k !== r &&
            l !== o &&
            l !== p &&
            l !== q &&
            l !== r
          ) {
            if (
              o !== p &&
              o !== q &&
              o !== r &&
              p !== q &&
              p !== r &&
              q !== r &&
              o <= 8 &&
              o >= 0 &&
              p <= 8 &&
              p >= 0 &&
              q <= 8 &&
              q >= 0 &&
              r <= 8 &&
              r >= 0
            ) {
              ans++;
              console.log(i, o);
              console.log(j, p);
              console.log(l, q);
              console.log(k, r);
              console.log('---');
            }
          }
        }
      }
    }
  }
}

console.log(ans);
