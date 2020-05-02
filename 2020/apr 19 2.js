/**
 * @param {string[][]} orders
 * @return {string[][]}
 */
var displayTable = function(orders) {
  const table = [];
  const foods = [];
  for (let i = 0; i < orders.length; i++) {
    let [_, t, food] = orders[i];
    if (!foods.includes(food)) {
      foods.push(food);
    }
    t = Number(t);
    if (table[t]) {
      if (table[t][food]) {
        table[t][food] = table[t][food] + 1;
      } else {
        table[t][food] = 1;
      }
    } else {
      table[t] = {};
      table[t][food] = 1;
    }
  }
  foods.sort();
  const ans = [['Table', ...foods]];
  for (let i = 0; i < table.length; i++) {
    const t = table[i];
    if (!t) continue;
    const newRow = [i + ''];
    for (let j = 0; j < foods.length; j++) {
      const f = foods[j];
      if (t[f]) {
        newRow.push(t[f] + '');
      } else {
        newRow.push('0');
      }
    }
    ans.push(newRow);
  }
  // console.log('displayTable -> ans', ans);
  return ans;
};

console.log(
  displayTable([
    ['David', '3', 'Ceviche'],
    ['Corina', '10', 'Beef Burrito'],
    ['David', '3', 'Fried Chicken'],
    ['Carla', '5', 'Water'],
    ['Carla', '5', 'Ceviche'],
    ['Rous', '3', 'Ceviche']
  ])
);

console.log(
  displayTable([
    ['James', '12', 'Fried Chicken'],
    ['Ratesh', '12', 'Fried Chicken'],
    ['Amadeus', '12', 'Fried Chicken'],
    ['Adam', '1', 'Canadian Waffles'],
    ['Brianna', '1', 'Canadian Waffles']
  ])
);

console.log(
  displayTable([
    ['Laura', '2', 'Bean Burrito'],
    ['Jhon', '2', 'Beef Burrito'],
    ['Melissa', '2', 'Soda']
  ])
);
