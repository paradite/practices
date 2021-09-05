/**
 * @param {number[][]} students
 * @param {number[][]} mentors
 * @return {number}
 */
var maxCompatibilitySum = function (students, mentors) {
  const comp = 2 ** students[0].length - 1;
  let max = 0;
  students = students.map((responses) => {
    return parseInt(responses.join(''), 2);
  });
  mentors = mentors.map((responses) => {
    return parseInt(responses.join(''), 2);
  });
  const dfs = (index, curr, usedMentorMap) => {
    if (index === students.length) {
      max = Math.max(curr, max);
    }
    for (let i = 0; i < mentors.length; i++) {
      if (usedMentorMap[i]) {
        continue;
      }
      const mentor = mentors[i];
      usedMentorMap[i] = true;
      let binary = mentor ^ students[index];
      // console.log('TCL ~ binary', binary);
      binary = binary ^ comp;
      // console.log('TCL ~ binary', binary);
      const score = binary
        .toString(2)
        .split('')
        .map(Number)
        .reduce(function (a, b) {
          return a + b;
        }, 0);
      // console.log('TCL ~ usedMentorMap', usedMentorMap);
      // console.log('TCL ~ score', score);
      dfs(index + 1, curr + score, usedMentorMap);
      usedMentorMap[i] = false;
    }
  };
  // console.log('TCL ~ students', students);
  // console.log('TCL ~ mentors', mentors);
  dfs(0, 0, {});
  return max;
};

console.log(
  maxCompatibilitySum(
    [
      [1, 1, 0],
      [1, 0, 1],
      [0, 0, 1],
    ],
    [
      [1, 0, 0],
      [0, 0, 1],
      [1, 1, 0],
    ]
  )
);

console.log(
  maxCompatibilitySum(
    [
      [1, 1],
      [0, 1],
      [1, 0],
    ],
    [
      [1, 1],
      [1, 1],
      [1, 1],
    ]
  )
);
