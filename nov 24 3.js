/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function(products, searchWord) {
  const ans = [];
  products.sort();
  // console.log(products);
  for (let i = 0; i < searchWord.length; i++) {
    let top = [];
    const char = searchWord.slice(0, i + 1);
    for (let j = 0; j < products.length; j++) {
      const product = products[j];
      if (product.startsWith(char)) {
        top.push(product);
        if (top.length === 3) {
          break;
        }
      }
    }
    ans.push(top);
  }
  return ans;
};

console.log(suggestedProducts(['mobile', 'mouse', 'moneypot', 'monitor', 'mousepad'], 'mouse'));
console.log(suggestedProducts(['havana'], 'havana'));
console.log(suggestedProducts(['bags', 'baggage', 'banner', 'box', 'cloths'], 'bags'));
console.log(suggestedProducts(['havana'], 'tatiana'));
