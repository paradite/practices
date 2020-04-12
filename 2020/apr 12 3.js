const _ = require('lodash');

/**
 * @param {string} text
 * @return {string}
 */
var entityParser = function(text) {
  return _.unescape(text)
    .replace(/&frasl;/g, '/')
    .replace(/&apos;/g, "'");
};

console.log(entityParser('&amp; is an HTML entity but &ambassador; is not.'));
console.log(entityParser('and I quote: &quot;...&quot;'));
console.log(entityParser('Stay home! Practice on Leetcode :)'));
console.log(entityParser('x &gt; y &amp;&amp; x &lt; y is always false'));
console.log(entityParser('leetcode.com&frasl;problemset&frasl;all'));
console.log(entityParser(' &frasl; &quot; &apos; ZooP)x:6~'));
