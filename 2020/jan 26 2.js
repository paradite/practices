/**
 * @param {number[][]} restaurants
 * @param {number} veganFriendly
 * @param {number} maxPrice
 * @param {number} maxDistance
 * @return {number[]}
 */
var filterRestaurants = function(restaurants, veganFriendly, maxPrice, maxDistance) {
  restaurants = restaurants.filter(r => {
    const [id, rating, ve, price, distance] = r;
    let include = true;
    if (veganFriendly === 1 && ve === 0) {
      include = false;
    }
    if (price > maxPrice) {
      include = false;
    }
    if (distance > maxDistance) {
      include = false;
    }
    return include;
  });

  restaurants.sort((a, b) => {
    const [id, rating, ve, price, distance] = a;
    const [id2, rating2, ve2, price2, distance2] = b;
    if (rating < rating2) {
      return -1;
    } else if (rating > rating2) {
      return 1;
    } else if (id < id2) {
      return -1;
    } else {
      return 1;
    }
  });
  return restaurants.map((r, i) => r[0]).reverse();
};

console.log(
  filterRestaurants(
    [
      [1, 4, 1, 40, 10],
      [2, 8, 0, 50, 5],
      [3, 8, 1, 30, 4],
      [4, 10, 0, 10, 3],
      [5, 1, 1, 15, 1]
    ],
    1,
    50,
    10
  )
);

console.log(
  filterRestaurants(
    [
      [1, 4, 1, 40, 10],
      [2, 8, 0, 50, 5],
      [3, 8, 1, 30, 4],
      [4, 10, 0, 10, 3],
      [5, 1, 1, 15, 1]
    ],
    0,
    50,
    10
  )
);

console.log(
  filterRestaurants(
    [
      [1, 4, 1, 40, 10],
      [2, 8, 0, 50, 5],
      [3, 8, 1, 30, 4],
      [4, 10, 0, 10, 3],
      [5, 1, 1, 15, 1]
    ],
    0,
    30,
    3
  )
);
