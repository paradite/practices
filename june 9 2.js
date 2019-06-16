// https://leetcode.com/contest/weekly-contest-140/problems/letter-tile-possibilities/

/**
 * @param {string} tiles
 * @return {number}
 */
var numTilePossibilities = function(tiles) {
  let perms = [];
  perms.push([]);
  const permsSet = new Set();
  for (var i = 0; i < tiles.length; i++) {
    const copyTiles = [...tiles];
    const tile = copyTiles.splice(i, 1);
    if (!permsSet.has(tile[0])) {
      permsSet.add(tile[0]);
      perms[0].push([tile, copyTiles]);
    }
  }
  // console.log(perms[0]);
  let ans = perms[0].length;
  for (var i = 1; i < tiles.length; i++) {
    perms[i] = getNextPerms(perms[i-1]);
    ans += perms[i].length;
    // console.log(i);
    // console.log(perms[i]);
  }
  return ans;
};

const getNextPerms = function(prevPerms) {
  let newPerms = [];
  let newPermsSet = new Set();
  for (var i = 0; i < prevPerms.length; i++) {
    const usedTiles = new Set();
    for (var j = 0; j < prevPerms[i][1].length; j++) {
      const prevPermsLeftTiles = [...prevPerms[i][1]];
      const possibleTile = prevPermsLeftTiles.splice(j, 1)[0];
      if (usedTiles.has(possibleTile)) {
        continue;
      } else {
        usedTiles.add(possibleTile);
      }
      for (var k = 0; k < prevPerms[i][0].length; k++) {
        const prevPermCopy = [...prevPerms[i][0]];
        // console.log(prevPermCopy, possibleTile);
        prevPermCopy.splice(k, 0, possibleTile);
        // console.log(prevPermCopy);
        // console.log(newPermsSet);
        if (!newPermsSet.has(prevPermCopy.join())) {
          newPermsSet.add(prevPermCopy.join());
          newPerms.push([prevPermCopy, prevPermsLeftTiles]);
        }
      }
    }
  }
  return newPerms;
}

console.log(numTilePossibilities('AAB'));
console.log(numTilePossibilities('AAABBC'));