function sum(term, a, next, b) {
  return a > b ? 0 : term(a) + sum(term, next(a), next, b);
}

function identity(x) {
  return x;
}

function inc(n) {
  return n + 1;
}

function sum_integers(a, b) {
  return sum(identity, a, inc, b);
}

// sum_integers(1, 100);
// 5050

// compute an approximation to π
function pi_sum(a, b) {
  function pi_term(x) {
    return 1 / (x * (x + 2));
  }
  function pi_next(x) {
    return x + 4;
  }
  return sum(pi_term, a, pi_next, b);
}

// 8 * pi_sum(1, 5000);
// 3.141192653605793

class Person {
  constructor(first, last) {
    this.name = {
      first,
      last,
    };
  }

  greeting() {
    console.log(`Hi! I'm ${this.name.first}`);
  }
}

class Teacher extends Person {
  constructor(first, last, subject) {
    super(first, last);
    this.subject = subject;
  }

  greeting() {
    console.log(`Hi! I'm ${this.name.first}. I teach ${this.subject}.`);
  }
}

let han = new Person('Han', 'Solo');
// han.greeting();
// Hi! I'm Han

let snape = new Teacher('Severus', 'Snape', 'Dark arts');
// snape.greeting();
// Hi! I'm Severus. I teach Dark arts.

// function getValidEntries(entries) {
//   return entries.filter((entry) => entry > 1);
// }

// // arr from somewhere else
// const arr = [1, 3, 5, 6];

// getValidEntries(arr);
// [ 3, 5, 6 ]

function getValidEntries(entries) {
  return entries.filter((entry) =>
    entries.type === 'special' ? entry > 5 : entry > 1
  );
}

// arr from somewhere else
const arr = [1, 3, 5, 6];

// set the flag on the arr Object/Array
arr.type = 'special';

getValidEntries(arr);
// [ 6 ]
