const makeSet = () => {
  const singleton = {
    rank: 0,
  };
  singleton.parent = singleton;

  return singleton;
};

const find = (node) => {
  if (node.parent !== node) {
    node.parent = find(node.parent);
  }

  return node.parent;
};

const union = (node1, node2) => {
  const root1 = find(node1);
  const root2 = find(node2);
  if (root1 !== root2) {
    if (root1.rank < root2.rank) {
      root1.parent = root2;
    } else {
      root2.parent = root1;
      if (root1.rank === root2.rank) root1.rank += 1;
    }
  }
};

/**
 * @param {number[][]} points
 * @return {number}
 */
var minCostConnectPoints = function (points) {
  let ans = 0;
  const edges = [];
  const vertices = [];
  const getDist = (i, j) => {
    const [xi, yi] = i;
    const [xj, yj] = j;
    return Math.abs(xi - xj) + Math.abs(yi - yj);
  };
  for (let i = 0; i < points.length; i++) {
    const vertex = makeSet();
    vertices.push(vertex);
  }
  for (let i = 0; i < points.length; i++) {
    const u = points[i];
    let cur = [];
    for (let j = i + 1; j < points.length; j++) {
      const v = points[j];
      const dist = getDist(u, v);
      cur.push([dist, vertices[i], vertices[j]]);
    }
    if (cur.length) {
      for (let j = 0; j < cur.length; j++) {
        edges.push(cur[j]);
      }
    }
  }
  edges.sort((a, b) => {
    return a[0] - b[0];
  });
  for (let i = 0; i < edges.length; i++) {
    const [dist, u, v] = edges[i];
    const root1 = find(u);
    const root2 = find(v);
    if (root1 !== root2) {
      union(u, v);
      ans += dist;
    }
  }
  return ans;
};

// prettier-ignore
console.log(minCostConnectPoints([[0,0],[2,2],[3,10],[5,2],[7,0]]));

// prettier-ignore
console.log(minCostConnectPoints([[-677415,-125000],[-1000000,812500],[-612898,0],[612925,875000],[-290313,625000],[-225796,375000],[870993,-812500],[-870966,-375000],[-483864,-312500],[-290313,-625000],[-32245,937500],[-1000000,-312500],[935510,-937500],[806476,-562500],[935510,-500000],[-96762,-62500],[-677415,-500000],[-612898,-125000],[-419347,375000],[32272,-250000],[935510,-187500],[-677415,687500],[161306,187500],[741959,-62500],[-419347,-687500],[-96762,-1000000],[-612898,-625000],[-548381,750000],[677442,-375000],[-225796,-187500],[354857,687500],[612925,-500000],[96789,-812500],[-612898,875000],[290340,-437500],[-225796,-437500],[96789,-937500],[548408,-437500],[96789,-562500],[-225796,187500],[-419347,687500],[225823,750000],[32272,312500],[612925,-375000],[612925,625000],[419374,-562500],[-870966,812500],[-225796,-625000],[-419347,562500],[-612898,187500],[-1000000,-250000],[612925,-562500],[161306,-187500],[96789,0],[-354830,-62500],[-741932,-375000],[-419347,-500000],[-870966,-562500],[-290313,375000],[483891,-62500],[161306,-562500],[-741932,-250000],[354857,187500],[-483864,0],[-161279,-312500],[806476,812500],[-32245,625000],[290340,-625000],[-483864,-625000],[419374,-1000000],[-741932,-437500],[806476,-500000],[741959,-250000],[-548381,-937500],[548408,62500],[-806449,125000],[-677415,375000],[-354830,-750000],[-225796,-500000],[-419347,312500],[612925,-312500],[-870966,-62500],[-290313,750000],[-32245,875000],[870993,-187500],[-677415,-812500],[-935483,-687500],[483891,125000],[-548381,625000],[-1000000,875000],[-548381,-375000],[419374,-62500],[-548381,-875000],[-354830,-437500],[419374,-875000],[935510,250000],[-1000000,-687500],[290340,0],[677442,-687500],[483891,562500],[-548381,312500],[-741932,375000],[354857,-62500],[-290313,-312500],[419374,-437500],[-677415,562500],[-1000000,250000],[-612898,125000],[935510,0],[806476,-687500],[870993,-1000000],[-548381,500000],[483891,437500],[612925,-750000],[96789,812500],[225823,0],[-161279,-687500],[-290313,187500],[806476,375000],[419374,875000],[-161279,125000],[225823,-312500],[161306,-812500],[161306,625000],[935510,312500],[-612898,-687500],[-290313,-500000],[290340,-1000000],[161306,687500],[548408,-250000],[290340,-687500],[-612898,-375000],[290340,-250000],[-806449,-62500],[32272,-187500],[-354830,-312500],[-419347,-125000],[806476,-437500],[-612898,-1000000],[935510,-812500],[-290313,-750000],[-870966,-125000],[-806449,-250000],[-290313,-187500],[-935483,875000],[548408,750000],[-290313,-687500],[-354830,-812500],[548408,-875000],[354857,750000],[96789,500000],[-161279,750000],[-935483,-1000000],[548408,-687500],[-483864,-937500],[741959,-875000],[-483864,-250000],[-806449,-562500],[-483864,687500],[-870966,-500000],[-1000000,-437500],[806476,750000],[677442,875000],[677442,812500],[-612898,937500],[-935483,437500],[419374,-687500],[-225796,125000],[-612898,62500],[354857,250000],[-1000000,-750000],[483891,250000],[-870966,250000],[-419347,187500],[96789,187500],[419374,-625000],[96789,-687500],[-225796,-875000],[290340,187500],[-548381,562500],[548408,562500],[419374,750000],[32272,-62500],[-32245,-250000],[32272,562500],[-870966,562500],[-677415,-875000],[96789,-125000],[-290313,812500],[419374,500000],[483891,-937500],[419374,687500],[-225796,500000],[-161279,500000],[-870966,312500],[483891,-187500],[-870966,750000],[-1000000,-500000],[-741932,625000],[-354830,-500000],[-419347,-812500],[-290313,-62500],[935510,-625000],[677442,625000],[96789,-500000],[290340,-375000],[290340,687500],[935510,-125000],[677442,-312500],[-806449,250000],[-1000000,-875000],[290340,312500],[677442,-125000],[-935483,0],[-741932,0],[-1000000,187500],[741959,312500],[-225796,62500],[741959,437500],[225823,875000],[-935483,562500],[870993,187500],[-677415,-625000],[354857,-625000],[-32245,750000],[225823,-250000],[419374,-500000],[96789,687500],[677442,125000],[483891,687500],[677442,-500000],[806476,500000],[-806449,375000],[870993,-750000],[-741932,-1000000],[-935483,-437500],[-548381,-187500],[-161279,-62500],[-870966,-625000],[-290313,-250000],[-32245,312500],[419374,437500],[-548381,62500],[612925,562500],[-225796,-375000],[-483864,750000],[161306,250000],[-741932,687500],[-1000000,375000],[-419347,62500],[354857,-937500],[548408,-500000],[-419347,875000],[548408,250000],[548408,-62500],[741959,-437500],[-32245,-750000],[419374,-187500],[225823,-187500],[741959,-937500],[741959,-125000],[225823,-750000],[-290313,562500],[-806449,-500000],[-612898,-875000],[935510,-437500],[32272,812500],[-548381,-562500],[-548381,250000],[161306,-687500],[-96762,62500],[677442,-250000],[-483864,-687500],[419374,-750000],[419374,937500],[935510,937500],[-32245,-62500],[870993,62500],[290340,125000],[225823,937500],[741959,-687500],[-1000000,-937500],[-290313,-375000],[806476,937500],[32272,-750000],[-419347,437500],[-161279,-937500],[-806449,-687500],[548408,-562500],[96789,-187500],[-741932,-125000],[-548381,-812500],[354857,125000],[-935483,375000],[-419347,-250000],[32272,875000],[-96762,437500],[-290313,437500],[-612898,625000],[419374,375000],[-677415,937500],[612925,187500],[870993,625000],[935510,437500],[225823,62500],[-419347,-312500],[96789,937500],[161306,437500],[161306,812500],[-677415,-312500],[419374,62500],[483891,0],[548408,-625000],[-741932,-500000],[-161279,625000],[419374,-312500],[-225796,937500],[161306,500000],[-96762,-187500],[419374,-250000],[-741932,937500],[741959,812500],[870993,-312500],[-677415,312500],[-290313,125000],[-870966,437500],[225823,-562500],[548408,687500],[-806449,-1000000],[806476,-1000000],[-161279,875000],[741959,750000],[-32245,125000],[354857,0],[-741932,312500],[-96762,-437500],[-548381,-62500],[96789,562500],[-96762,812500],[870993,750000],[741959,-312500],[741959,562500],[161306,750000],[-1000000,-1000000],[-483864,187500],[-806449,875000],[-96762,187500],[-354830,250000],[225823,-375000],[935510,-875000],[-806449,687500],[-419347,-937500],[-32245,-437500],[-1000000,312500],[741959,375000],[419374,-812500],[161306,0],[-290313,-812500],[32272,-937500],[290340,625000],[-548381,-750000],[677442,-812500],[-548381,937500],[612925,62500],[-290313,-937500],[-225796,-562500],[96789,875000],[483891,-625000],[290340,250000],[612925,-125000],[-806449,0],[-483864,375000],[806476,250000],[-161279,375000],[-354830,625000],[96789,625000],[-806449,-312500],[-677415,-687500],[483891,-687500],[-806449,-187500],[870993,312500],[-935483,-375000],[-741932,-62500],[-483864,312500],[548408,-937500],[-225796,875000],[806476,-312500],[161306,-312500],[32272,-562500],[354857,-875000],[741959,250000],[-354830,-562500],[32272,-375000],[96789,250000],[-32245,500000],[548408,500000],[-1000000,937500],[548408,0],[354857,-312500],[-32245,-375000],[870993,-687500],[32272,500000],[419374,562500],[32272,-312500],[-483864,500000],[-290313,-437500],[-741932,875000],[-1000000,437500],[354857,875000],[96789,437500],[935510,-562500],[-612898,312500],[935510,375000],[548408,937500],[290340,-750000],[96789,-250000],[-419347,-625000],[-483864,-875000],[806476,625000],[-419347,0],[-290313,312500],[-548381,-312500],[354857,-1000000],[935510,750000],[-870966,875000],[225823,562500],[-32245,-562500],[-677415,-187500],[870993,-125000],[-419347,625000],[-161279,-1000000],[-419347,-187500],[806476,-187500],[225823,500000],[-1000000,750000],[483891,-437500],[-677415,187500],[-677415,-937500],[-161279,312500],[870993,0],[161306,-125000],[354857,-500000],[-354830,937500],[-161279,62500],[-548381,-625000],[-419347,812500],[-354830,687500],[-225796,-937500],[935510,-250000],[-225796,812500],[-161279,562500],[96789,62500],[-32245,62500],[935510,875000],[-677415,-437500],[741959,-562500],[-290313,500000],[741959,-812500],[354857,-750000],[677442,-875000],[-677415,812500],[96789,-875000],[-935483,500000],[-225796,625000],[161306,-625000],[32272,-437500],[354857,-375000],[-32245,687500],[-96762,0],[-1000000,625000],[-419347,-875000],[-870966,-875000],[-354830,812500],[612925,812500],[-806449,-812500],[677442,0],[-612898,-437500],[-870966,-687500],[-935483,-562500],[419374,0],[935510,62500],[-32245,-1000000],[354857,-437500],[-354830,-625000],[677442,62500],[-548381,875000],[677442,-437500],[-548381,187500],[-741932,-312500],[-161279,-187500],[-806449,-937500],[483891,625000],[483891,937500],[548408,125000],[806476,-937500],[677442,687500],[-32245,-687500],[806476,-62500],[161306,-250000],[-548381,0],[-870966,-750000],[419374,187500],[-870966,-312500],[161306,562500],[-225796,562500],[935510,-687500],[741959,687500],[-1000000,0],[-870966,-187500],[935510,500000],[-32245,-625000],[483891,62500],[-225796,312500],[-32245,-500000],[870993,-562500],[935510,-312500],[-612898,-62500],[225823,-500000],[-1000000,-62500],[290340,-187500],[677442,-1000000],[-806449,562500],[354857,437500],[-806449,750000],[419374,125000],[806476,562500],[354857,-812500],[419374,312500],[-32245,-812500],[-483864,-62500],[612925,-187500],[-290313,250000],[225823,-125000],[-32245,187500],[-161279,-875000],[96789,750000],[-612898,437500],[32272,62500],[290340,-500000],[-741932,-875000],[354857,62500],[-677415,62500],[677442,562500],[612925,-437500],[225823,-687500],[677442,-750000],[-806449,312500],[-161279,937500],[741959,500000],[-96762,-687500],[225823,312500],[-935483,-937500],[870993,-437500],[612925,-250000],[612925,937500],[-354830,125000],[290340,750000],[-870966,62500],[-741932,-187500],[-483864,-500000],[-483864,937500],[-96762,312500],[32272,250000],[741959,-187500],[-1000000,125000],[-419347,-1000000],[-677415,-250000],[-548381,687500],[-806449,-375000],[612925,125000],[225823,-1000000],[290340,-812500],[-32245,-875000],[548408,-812500],[-612898,-500000],[-419347,125000],[-741932,750000],[935510,562500],[96789,-1000000],[-935483,687500],[-483864,437500],[225823,-937500],[870993,687500],[32272,-875000],[-354830,-250000],[32272,437500],[-161279,-562500],[-290313,-125000],[483891,-500000],[290340,375000],[741959,-375000],[935510,-1000000],[354857,312500],[96789,-750000],[612925,750000],[548408,-750000],[612925,312500],[290340,-312500],[-935483,-125000],[-870966,-437500],[870993,-625000],[354857,500000],[677442,-937500],[-870966,500000],[612925,-1000000],[-741932,-937500],[-354830,562500],[-741932,562500],[-161279,187500],[-354830,-187500],[806476,-125000],[161306,937500],[32272,-500000],[612925,-62500],[-419347,250000],[-677415,437500],[225823,-875000],[32272,937500],[-1000000,-375000],[612925,437500],[-161279,812500],[-419347,937500],[806476,687500],[96789,-625000],[354857,375000],[870993,812500],[870993,-62500],[-677415,-375000],[-677415,625000],[612925,687500],[-96762,-250000],[-935483,-187500],[-96762,-875000],[-548381,-687500],[-612898,-750000],[-32245,-312500],[-483864,250000],[-225796,-62500],[-612898,-812500],[-677415,0],[935510,812500],[419374,250000],[741959,-750000],[483891,-875000],[354857,-687500],[-935483,312500],[483891,-562500],[-419347,-375000],[-96762,-812500],[-483864,-125000],[-806449,625000],[741959,187500],[-870966,-1000000],[-354830,-1000000],[290340,937500],[-483864,-562500],[-419347,-562500],[870993,562500],[870993,500000],[-935483,750000],[225823,687500],[-225796,437500],[32272,-687500],[-225796,-750000],[-96762,-750000],[225823,-625000],[-483864,562500],[-935483,937500],[225823,625000],[-354830,187500],[161306,-875000],[-806449,-625000],[-483864,-187500],[32272,-125000],[96789,-437500],[-935483,812500],[-161279,437500],[-161279,-750000],[-1000000,562500],[-806449,500000],[354857,937500],[96789,125000],[-96762,875000],[741959,625000],[-612898,562500],[-612898,-187500],[-32245,0],[290340,875000],[-677415,-562500],[548408,187500],[225823,-62500],[-806449,62500],[-677415,750000],[677442,437500],[548408,-1000000],[-354830,0],[-1000000,62500],[-96762,-500000],[225823,187500],[-677415,-1000000],[-354830,-937500],[-741932,-812500],[-32245,250000],[161306,-437500],[-870966,-937500],[806476,125000],[161306,-937500],[806476,-250000],[548408,812500],[-32245,562500],[-483864,-375000],[548408,375000],[-1000000,687500],[-677415,-62500],[-96762,500000],[935510,-750000],[612925,-812500],[741959,0],[161306,62500],[-419347,-750000],[483891,-250000],[-935483,250000],[-483864,125000],[-483864,625000],[290340,62500],[548408,437500],[161306,-750000],[-548381,375000],[-96762,-312500],[-225796,-687500],[-548381,812500],[483891,-125000],[-96762,562500],[225823,812500],[-96762,750000],[870993,-500000],[-935483,-875000],[-483864,812500],[806476,-875000],[741959,875000],[-419347,500000],[-96762,687500],[-870966,0],[-96762,-125000],[-483864,-437500],[870993,125000],[935510,625000],[-354830,375000],[-870966,687500],[-870966,-250000],[483891,500000],[-870966,375000],[935510,687500],[225823,-812500],[96789,375000],[677442,-187500],[-483864,875000],[161306,-62500],[741959,937500],[548408,-375000],[806476,-625000],[32272,-625000],[741959,62500],[161306,-1000000],[-548381,437500],[-612898,-562500],[806476,437500],[483891,-375000],[419374,-125000],[483891,-812500],[-548381,-250000],[-741932,187500],[-1000000,500000],[483891,-312500],[-677415,-750000],[-290313,875000],[612925,375000],[612925,-625000],[935510,-62500],[-548381,125000],[-870966,187500],[419374,-937500],[-935483,125000],[741959,-500000],[935510,187500],[-806449,187500],[161306,-500000],[548408,-187500],[483891,812500],[612925,500000],[-96762,250000],[-741932,812500],[32272,187500],[-612898,750000],[161306,-375000],[-741932,-750000],[225823,375000],[-354830,-375000],[-96762,625000],[-354830,-125000],[-741932,125000],[806476,-375000],[-225796,-250000],[-161279,-625000],[-225796,-312500],[-741932,62500],[677442,375000],[-161279,-812500],[-483864,62500],[483891,875000],[-354830,312500],[548408,875000],[-483864,-750000],[-225796,-1000000],[290340,812500],[-354830,875000],[419374,-375000],[161306,125000],[483891,187500],[-161279,687500],[-483864,-812500],[-741932,250000],[-225796,750000],[741959,125000],[96789,-312500],[870993,875000],[32272,750000],[-870966,125000],[806476,187500],[354857,625000],[-419347,750000],[-935483,-750000],[-419347,-437500],[870993,937500],[-935483,187500],[-225796,250000],[290340,-125000],[-354830,-875000],[-806449,937500],[-161279,-437500],[806476,312500],[96789,312500],[483891,312500],[-612898,687500],[-354830,-687500],[354857,-125000],[612925,0],[32272,687500],[-612898,375000],[32272,625000],[-225796,0],[-935483,-312500],[-1000000,-812500],[-806449,-750000],[-161279,-250000],[-96762,-375000],[354857,812500],[-225796,-812500],[677442,750000],[354857,562500],[612925,-937500],[-290313,687500],[-806449,812500],[-1000000,-562500],[-741932,500000],[-1000000,-187500],[-612898,812500],[-483864,-1000000],[-225796,687500],[612925,250000],[-96762,375000],[-225796,-125000],[-354830,500000],[32272,375000],[-354830,437500],[290340,-62500],[-32245,-125000],[677442,937500],[161306,312500],[806476,62500],[-612898,-250000],[-935483,-500000],[419374,625000],[806476,-750000],[806476,875000],[935510,125000],[-677415,250000],[-677415,125000],[290340,500000],[-741932,-625000],[225823,-437500],[419374,812500],[870993,-875000],[-290313,0],[-32245,812500],[-806449,437500],[677442,250000],[225823,437500],[677442,-625000],[225823,250000],[32272,-812500],[290340,-937500],[677442,-62500],[870993,-937500],[-96762,-562500],[-1000000,-125000],[290340,562500],[870993,437500],[354857,-562500],[-612898,-937500],[-741932,437500],[-677415,875000],[290340,-875000],[-935483,625000],[-612898,250000],[-1000000,-625000],[677442,500000],[483891,750000],[-870966,937500],[-935483,-250000],[483891,-750000],[-612898,500000],[-161279,-375000],[-870966,625000],[96789,-62500],[-612898,-312500],[-806449,-437500],[-290313,-562500],[354857,-250000],[-96762,-625000],[-806449,-125000],[612925,-875000],[870993,-250000],[-677415,500000],[-32245,375000],[870993,375000],[-290313,-1000000],[161306,375000],[-32245,437500],[290340,437500],[-935483,-62500],[-548381,-1000000],[-290313,937500],[-419347,-62500],[-354830,62500],[225823,125000],[-548381,-437500],[-96762,125000],[-741932,-687500],[612925,-687500],[-32245,-937500],[-741932,-562500],[677442,312500],[-161279,-125000],[-548381,-125000],[96789,-375000],[548408,625000],[870993,250000],[677442,187500],[677442,-562500],[-161279,0],[32272,-1000000],[-161279,250000],[806476,-812500],[-806449,-875000],[354857,-187500],[-935483,-812500],[935510,-375000],[741959,-625000],[-354830,750000],[-96762,-937500],[-32245,-187500],[32272,0],[-290313,-875000],[32272,125000],[161306,875000],[870993,-375000],[806476,0],[548408,-312500],[-548381,-500000],[-96762,937500],[290340,-562500],[483891,375000],[-290313,62500],[548408,312500],[-161279,-500000],[-870966,-812500],[-935483,-625000],[-935483,62500],[741959,-1000000],[483891,-1000000],[548408,-125000]]));
