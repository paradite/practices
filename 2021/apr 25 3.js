/**
 * @param {string} word
 * @return {number}
 */
var longestBeautifulSubstring = function (word) {
  const map = {
    a: 'e',
    e: 'i',
    i: 'o',
    o: 'u',
  };
  // console.log('TCL ~ map', map);
  let curr = null;
  let start = null;
  let max = 0;
  for (let i = 0; i < word.length; i++) {
    const char = word[i];
    // console.log('TCL ~ i', i);
    // console.log('TCL ~ char', char);
    // console.log('TCL ~ map[curr]', map[curr]);
    // console.log('TCL ~ start', start);
    if (curr === null && char === 'a') {
      curr = 'a';
      start = i;
    } else if (curr === null) {
      // do nothing
    } else if (char === curr && curr === 'u' && i === word.length - 1) {
      const length = i - start + 1;
      if (length > max) max = length;
    } else if (char === 'u' && curr === 'o' && i === word.length - 1) {
      const length = i - start + 1;
      if (length > max) max = length;
    } else if (char === curr) {
      // do nothing
    } else if (char === map[curr]) {
      curr = char;
    } else if (char !== curr && curr === 'u') {
      const length = i - start;
      if (length > max) max = length;
      curr = null;
      start = null;
      if (char === 'a') {
        start = i;
        curr = 'a';
      }
    } else {
      curr = null;
      start = null;
      if (char === 'a') {
        start = i;
        curr = 'a';
      }
    }
  }
  return max;
};

console.log(longestBeautifulSubstring('aeiaaioaaaaeiiiiouuuooaauuaeiu'));
console.log(longestBeautifulSubstring('aeeeiiiioooauuuaeiou'));
// prettier-ignore
console.log(longestBeautifulSubstring("eieuuoeeueauueeoiiueaeuioeiiieioaouoeeoiiauiueiiuieueeeoaeaeoooiuauiaaueieoeeeeioauaouueiioeiaaaaooeaaaeoouoaoioauoaeuiioaiuuiaaaiieiuiuoiaeuuiooeiiuoaauoioeaeieaeeeiouieuaaaaaeoaeiaeeeaoaeooueieaaaeieooouueaueeiaiuoioiioieuoeeoeaaeeaauoaiaoaauaauioaueiaiooeoiiaiauaooiiauaiaoaoeaioeiaeeuueioauoueuaaiiouoeoeoiaeeooaauieoeaiueioiaieouiaeauaeiaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooouuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuiuaeouiioieouieeiuaeeuoiooioiiaoueioeuaeeoaauoaaeeaaoiuueoeaeoaaeueoueeiiiuiouieaiuoieeoooueiiiaeeuaaieeaaoiuuoeuoauouiieuaeeiueaeeeaaoieaeuiuoeuoaaiueieiouiiiaoueuuiuooeioaeooaeueouiaeuaaiueuoeeiouioiiueiueaaiuoaieuiaoeuoeaeaiuaaoeeuouiiioeeoueuuauoieiaoaeeaeioouoaiieueoauaoeeoeouaiaoaueioiuaooouiueuieuauieeoeaiouoaoeeeueuoeuieooaaaaaiuoououiuuueoioieueuueaueaeuaieueeaieioieuuuueoooueueoiaoiuuiooiauaaiiiiuoaaueeaiiaeaauaooooeaaeuiaaouooauaaaaiieiaeeeeeiauiiuaueieuieaoeeiauiuaueouaeoaaoiuaoiaiouaiaeoiaooieeioiieieioeeioeuioeiooouiiioaiaeeaaieouoaooaiaiueeuieoiuaeuieeiuaoaueiouoieauieiuoooieuiaooeaeaoiueaeeuieaioiuoaeieuaaeouuoiieioeoiaeuiiiuiuaaaoeaaaoiuauaiiuaaaaiieeueeoieuiueuaueiiaioaoaoueiieueoauuueeeeuuueoiuuaiaaeuauuiaeuuaeiaiiioiooeaeiaeoeaeouuaouueeiieaoaeoaueuaoouoioeiaiuiouaueuaiaoeouoeoooioiuioaeeoeaaoioeiioiuoaiiuioiiioeuiiaaaieaoaaeoaeieuiiiuieiieaaioaueoiiiuueeiouuueoiiaeuuaeaaiauaeeieoaioiiuueuaoieieiuiaioeaeuiiaioaieeeaoaieoooiuiaeuuuieeaeeeeuoeueioeiiaaieaiaiiieiouueaouoooueeoiauooeieeoeuoueioauieoeuooiiaiueeouiiuuiaiuuouoaaiuiiiouuuaiiiuiiuouiioaoauiaoeiioaooeuoaauaiiieiuueuueioeaioaaieuuoioeaeeeuauouuiaauuiauuuaiiiooaiaeaeeuioaueeaoiaioiieooueaieoeieoiaouuuuioaieauioeuoauauaaeaoueeiaaoooauoioueaieeaaiuuiieieaaaeoiueeoeoeoaaoioaueeoeoiooeiioiaoeieieaeiaaaoeeuoiueaueoeoaueeiioauuuoaiaeaooaiaaauuieaioeaaoeioouaiauiaaoieiiieeioeeuaiauuaeeooiuuuaeeieaeieoaaiioaoooeaaeaooouaaoeaoiiuaiauooaiuoeauoeiaeaaeueeiaiooaeaoioeuuauaioaiiioioeuuueiuaeoeaiiuaioiueooioeiueaaeueeiauoiaoeooiuaeuoaououiiiauuaaeeuaiuueaaoioueouaooaaiieeeiueieeouoieiuoueeueauauoueaooaoiuouuiauaeoiouaoeaauaaaoaaueoaeaoeuaiiiaueeiiaaoeuaouiaaiauoeeueueiaooeiooaeuooiieioaaeiueuieuoueiaeiiiaaueaaaoauiauaooaeoeouaaoeeoieuioeuooeaeeoioeeoouieiouuooeaioooouoaoeeouueioaeuoeoiioeouoeuiuuaaouaiuaioaiiuiiuuieaoiiieaaeeioeeiuuouioiuoaiuuuouoeauuoauoeiuuoiiuauoaeuieaiaaoaoiieoeeiaoaueuuoiaauioueeiueeaouioiiauoeuaooiueaaeuuiiiooioeiuioaeuuaouieeiuooaeeaeiiiaiieoaeeoaoioieiuiaeiaiiiouoeoeaeuiuaoeuiiouoaeioiouioiaouiaoooioooieiieaeeaiaaiuoaaaaeoauioiouaaaoeiiueaooeieieueaoiuiaiueaaauiuiuooeaaaaeoiooeueiaaueeaeaoouoioouoeouaoaooauieeuuoeooaauuoaueoaaauiiueoaauiiaaiaoaiuoeeooiiauaueeuoiuooaiueeeauaoeeaiieeoeaaaoueaeiouaouioauoouaeoiauaauouuuaoeuaaeueeeouoaouueaooiueeauuiiioeaeeieoaoeaooauaiiiueoaiauoueeiooueeiooiaouauiaoooioaaaaoeiaieoeaeaeeoaoaeeaeeuuuuioouaioeouuiuouuoeoaeeaaaeeaoooiaeieiuiuauouuieuiauooioiuoeeoieooeeouoiaaoueoaaiaiuauaauouiauiuoiioiiiauiuooiaooeeiuoeaoaeouuauueiueiuoioeiiaiioueeuiiiueoaieuueaoaiioeeuuauuuiuaueooeaaeeioieuieuuieaeoeoaaoeaoaoueiiaueuouiuuaauiiiuuoaaouaeioioooieoaioeouiiuoeaiaiiueoauaaiaeaaeouaeoiouieuaiaeuieuuioueiueueuaooiiouaioeuooeuaaoooieuauuaueiieoeiouaoaeuiaoaooeoeiaoieeaiiuaeaeauoaieeoeoeoauiauiaooouioaoiueuiueaueaaaoaouoeauueaieeuaiueiuauiueaoieoaioouiaaeuiiiueuaiuaiaeiaouooeioaoeaoiaieaeiuouaieeieoaiaaoioaeau"));
