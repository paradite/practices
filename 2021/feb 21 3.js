// prettier-ignore
if (typeof _ === 'undefined') {
  _ = require('lodash');
}

// map utils
const mapPush = (map, key, value) => {
  if (map[key]) {
    map[key].push(value);
  } else {
    map[key] = [value];
  }
};

const mapAdd = (map, key) => {
  if (map[key]) {
    map[key] = map[key] + 1;
  } else {
    map[key] = 1;
  }
};

// Remove
Array.prototype.remove = function (val) {
  const index = this.indexOf(val);
  if (index > -1) {
    this.splice(index, 1);
  }
  return this;
};

const mod = Math.pow(10, 9) + 7;

// set equal
const isSetsEqual = (a, b) =>
  a.size === b.size && [...a].every((value) => b.has(value));

/**
 * @param {number[]} nums
 * @param {number[]} multipliers
 * @return {number}
 */
var maximumScore = function (nums, multipliers) {
  let max = -Infinity;
  let dp = new Array(nums.length + 1);
  for (let i = -1; i < dp.length; i++) {
    dp[i] = [];
  }
  dp[0][nums.length + 1] = 0;
  dp[0][nums.length] = nums[0] * multipliers[0];
  for (let i = 1; i < nums.length; i++) {
    if (i >= multipliers.length) {
      dp[i][nums.length] = -Infinity;
    } else {
      dp[i][nums.length] = dp[i - 1][nums.length] + nums[i] * multipliers[i];
    }
  }
  if (dp[nums.length - 1][nums.length] > max)
    max = dp[nums.length - 1][nums.length];
  dp[-1][nums.length] = 0;
  dp[-1][nums.length - 1] = nums[nums.length - 1] * multipliers[0];
  for (let i = nums.length - 2; i >= 0; i--) {
    if (nums.length - 1 - i >= multipliers.length) {
      dp[-1][i] = -Infinity;
    } else {
      dp[-1][i] = dp[-1][i + 1] + nums[i] * multipliers[nums.length - 1 - i];
    }
  }
  if (dp[-1][0] > max) max = dp[-1][0];
  const recurse = (left, right) => {
    if (dp[left][right] !== undefined) return;
    if (left < -1) return;
    if (right > nums.length) return;
    if (left >= right) return;

    const index = left + (nums.length - right);
    // console.log('TCL ~ left, right index', left, right, index);
    // console.log('TCL ~ dp', dp);
    let dpleft = -Infinity;
    if (left - 1 >= -1) {
      dpleft = dp[left - 1][right] + nums[left] * multipliers[index];
      if (Number.isNaN(dpleft)) {
        dpleft = -Infinity;
      }
    }
    // console.log('TCL ~ dpleft', dpleft);
    let dpright = -Infinity;
    if (right + 1 <= nums.length) {
      dpright = dp[left][right + 1] + nums[right] * multipliers[index];
      if (Number.isNaN(dpright)) {
        dpright = -Infinity;
      }
    }
    // console.log('TCL ~ dpright', dpright);
    dp[left][right] = Math.max(dpleft, dpright);
    if (index === multipliers.length - 1) {
      if (dp[left][right] > max) max = dp[left][right];
    } else {
      recurse(left + 1, right);
      recurse(left, right - 1);
    }
  };

  recurse(0, nums.length - 1);
  recurse(-1, nums.length - 1);
  // console.log('TCL ~ dp', dp);
  return max;
};

console.log(maximumScore([1, 2, 3], [3, 2, 1]));
console.log(maximumScore([-5, -3, -3, -2, 7, 1], [-10, -5, 3, 4, 6]));

// prettier-ignore
console.log(maximumScore([-854,-941,10,299,995,-346,294,-393,351,-76,210,897,-651,920,624,969,-629,985,-695,236,637,-901,-817,546,-69,192,-377,251,542,-316,-879,-764,-560,927,629,877,42,381,367,-549,602,139,-312,-281,105,690,-376,-705,-906,85,-608,639,752,770,-139,-601,341,61,969,276,176,-715,-545,471,-170,-126,596,-737,130]
  , [83,315,-442,-714,461,920,-737,-93,-818,-760,558,-584,-358,-228,-220]));

// prettier-ignore
console.log(maximumScore([-947,897,328,-467,14,-918,-858,-701,-518,-997,22,259,-4,968,947,582,-449,895,-121,-403,633,490,64,543,-396,-997,841,-398,247,297,-147,-708,804,-199,-765,-547,-599,406,-223,-11,663,746,-365,-859,256,-25,919,-334,490,-511,865,-139,-968,961,-793,451,317,645,-294,240,-312,-822,961,-572,309,579,161,780,525,-622,-511,423,946,-28,-199,822,-123,-316,-913,113,-458,-428,-414,49,922,722,-854,323,-219,581,302,124,164,31,727,186,308,-936,-937,-862,939,213,966,-74,-76,-1,521,777,-966,454,-199,526,-895,447,-749,-518,-639,849,-771,979,-760,-763,-601,-201,40,-911,207,890,-942,-352,700,267,830,-396,536,877,-896,-687,262,-60,-373,-373,526]
  ,  [864,849,586,769,309,-413,318,652,883,-690,796,251,-648,433,1000,-969,422,194,-785,-242,-118,69,187,-925,-418,-556,88,-399,-619,-383,-188,206,-793,-9,738,-587,878,360,640,318,-399,-366,365,-291,-75,-451,-674,-199,177,862,1,11,390,-52,-101,127,-354,-717,-717,180,655,817,-898,28,-641,-35,-563,-737,283,-223,-322,-59,955,172,230,512,-205,-180,899,169,-663,-253,270,651,168,417,613,-443,980,-189,417,372,-891,-272,993,-877,906,680,-630,-328,-873,-811,78,-667,-2,190,-773,878,529,620,-951,-687,314,-989,-48,-601,-950,31,-789,-663,-480,750,-872,-358,529,-426,-111,517,750,-536,-673,370]));
