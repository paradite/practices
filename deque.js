class Deque {
  constructor() {
    this.queue = [];
    this.count = 0;
    this.start = 0;
  }
  addBack(item) {
    this.queue[this.count] = item;
    this.count++;
  }
  addFront(item) {
    if (this.isEmpty()) {
      this.addBack(item);
    } else if (this.start > 0) {
      // empty space to add
      const addPostion = this.start - 1;
      this.queue[addPostion] = item;
      this.start = addPostion;
    } else {
      // no space to add, shift by one
      for (let i = this.count; i > 0; i--) {
        this.queue[i] = this.queue[i - 1];
      }
      this.count++;
      this.queue[0] = item;
    }
  }
  removeFront() {
    if (this.isEmpty()) {
      return undefined;
    }
    let res = this.queue[this.start];
    delete this.queue[this.start];
    this.start++;
    return res;
  }
  removeBack() {
    if (this.isEmpty()) {
      return undefined;
    }
    let res = this.queue[this.count - 1];
    delete this.queue[this.count - 1];
    this.count--;
    return res;
  }
  peakFront() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.queue[this.start];
  }
  peakBack() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.queue[this.count - 1];
  }
  clear() {
    this.queue = [];
    this.count = 0;
    this.start = 0;
  }
  isEmpty() {
    return this.count === this.start;
  }
  size() {
    return this.count - this.start;
  }
  toString() {
    if (this.isEmpty()) {
      return '';
    }
    let s = this.queue[this.start] + '';
    for (let i = this.start + 1; i < this.count; i++) {
      s = s + ',' + this.queue[i];
    }
    return s;
  }
}

const deque = new Deque();

deque.addBack(1);
deque.addBack(2);
deque.addFront(3);
deque.addFront(4);
deque.addFront(5);
console.log(deque.toString());
console.log(deque.peakFront());
console.log(deque.peakBack());
console.log(deque.removeFront());
console.log(deque.removeBack());
console.log(deque.peakFront());
console.log(deque.peakBack());
console.log(deque.toString());
