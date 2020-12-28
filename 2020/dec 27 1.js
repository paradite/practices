/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function (s) {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  const count = (s) => {
    let t = 0;
    for (let i = 0; i < s.length; i++) {
      const element = s[i];
      if (vowels.includes(element)) t++;
    }
    return t;
  };
  return (
    count(s.substr(0, s.length / 2)) ===
    count(s.substr(s.length / 2, s.length / 2))
  );
};
