/**
 * @param {string} s
 * @return {number}
 */
var balancedString = function(s) {
  let memo = {};
  var dfs = function(q, w, e, r, s, index, start, end) {
    // console.log([q, w, e, r, index, start].join('.'));

    if (q === 0 && w === 0 && e === 0 && r === 0) {
      if (start === -1) {
        min = 0;
      } else if (end - start + 1 < min) {
        min = end - start + 1;
        // console.log('TCL: start', start);
        // console.log('TCL: end', end);
        // console.log('TCL: min', min);
      }
    }

    // if (memo[[q, w, e, r, index, start].join('.')]) {
    //   return;
    // }
    // memo[[q, w, e, r, index, start].join('.')] = true;

    if (index - start > min) {
      return;
    }

    if (index >= s.length) {
      return;
    }

    const remaining = q + w + e + r;
    const left = s.length - index;
    if (remaining > left) {
      return;
    }
    // console.log('TCL: remaining', remaining);
    // console.log('TCL: left', left);

    const element = s[index];
    if (start === -1) {
      start = index;
    }
    // console.log(memo);

    if (element === 'Q' && q > 0) {
      dfs(q - 1, w, e, r, s, index + 1, start, index); // use
    } else if (element === 'W' && w > 0) {
      dfs(q, w - 1, e, r, s, index + 1, start, index); // use
    } else if (element === 'E' && e > 0) {
      dfs(q, w, e - 1, r, s, index + 1, start, index); // use
    } else if (element === 'R' && r > 0) {
      dfs(q, w, e, r - 1, s, index + 1, start, index); // use
    } else {
      dfs(q, w, e, r, s, index + 1, start, end); // ignore
    }
  };

  const required = s.length / 4;
  let map = {
    Q: 0,
    W: 0,
    E: 0,
    R: 0
  };
  let excess = {
    Q: 0,
    W: 0,
    E: 0,
    R: 0
  };
  for (let i = 0; i < s.length; i++) {
    const element = s[i];
    map[element] = map[element] + 1;
    if (map[element] > required) {
      excess[element] = excess[element] + 1;
    }
  }
  // console.log('TCL: excess', excess);
  let min = s.length;
  dfs(excess.Q, excess.W, excess.E, excess.R, s, 0, -1, -1);
  if (min === 0) {
    return min;
  }
  for (let i = 0; i < s.length; i++) {
    dfs(excess.Q, excess.W, excess.E, excess.R, s, i, i, -1);
  }
  // console.log(memo);

  return min;
};

// console.log(balancedString('QWER'));
// console.log(balancedString('QQWE'));
// console.log(balancedString('QQQE'));
// console.log(balancedString('WQWRQQQW'));
// console.log(balancedString('WEWEQQRWRRWREQWEEWEQERQWWWRERRWEWWQWQQWQEREQRQRRREQWWERRERQWWRRWRWRQRWWQWRWWWWREWWWW'));
// console.log(balancedString('RERQREWQEEQQWRREREQEQWQRQQRQERERQWWWEQRWWQWEWWERWRWWQQWQERWEQWQEWQWEQRWQWEQRRRQWRQERRQQEQEWWQWRRRRRRQQERQEWEWQRREQQW'));
// console.log(balancedString('REQEEEQWREREWEWREEEEQWEEWEWQRRRRWWEEWWWWWRREWQEEWWQEEWRRQWRQEWQQRRREWERRREREEEQEQEEWEQRWWRQWQEEQEQEREWEQEREWQQRREWQRRRRQEEWQEQEERQQWRRQEQWWRRRQWREWQEREWEEERRQWEWQEEEEQRWERWWEWRQERWWEQRWQQRRERQEWWRRWREQEQWEQRRWQRREEEEQRRRRQQRRWQRRQWREWWQQEWREQWERQWRRWQEWRWRQQRQWQEQWRERWEQRQQQQQRWRRQRREWREWWWQQEWEREREQRERWEWEERERWEQRWQEEQWWEERWRERQEREWQEWWRQQRQQWEWWRRWQWQQQQEQWRWERWQEQQEREQWQEQWEEQWQEQRRRRERRRRQEQWRWQQWEQQREEWRQRQEQRRRWEWWRQQEWRQRRWEQRWREEEEWRERWERQQERQQWWERERWWREREERRRRQQQEEQRWEWRWWQWRWWQEREEWREWRRQRRWQRWQWWWREWWWWEREWWQEEEEREQRWERRWRWQQEEQEEWWRRQRQRWRRWEWRQQWRWRQQEEQEQRRWERERWWRQEQWQRRRQRERWWEEERWQWQEEEQEREWRQWEWEWQRWWEQRQQRWQQRQWWQEREQEREQREEERWWWQEEWRQERRWRREERREWWQQREWEQEWREREERWREREQWWRWERRRQQWQQRWEREEWQEERQERQQRQEEREWRRQQRRWQQWEQWWQRWQWQEQWWWEWERQQRQEEWWRQREERWRRREWWEQERWEQREWRWEQRQWR'));
// console.log(balancedString('QWERQQQQEEWERWQWERER'));
// console.log(balancedString('QWERQQQQEEWERWQWERER'));

// QWERQQQQQQWERWQWERER
