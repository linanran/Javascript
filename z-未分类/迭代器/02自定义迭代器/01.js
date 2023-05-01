class Counter {
  // Counter instance should iterate <limit> times
  constructor(limit) {
    this.count = 1;
    this.limit = limit;
  }

  next() {
    if (this.count <= this.limit) {
      return { done: false, value: this.count++ };
    } else {
      return { done: true, value: undefined };
    }
  }

  [Symbol.iterator]() {
    return this;
  }
}

let counter = new Counter(3);

// for (let i of counter) {
//   console.log(i);
// }
console.log(...counter);
console.log(...counter);
// 1
// 2
// 3
var iterable = {
  [Symbol.iterator](){
    var v = 0;

    //返回iterator
    return {
      next: function () {
        return {
          value: ++v,
          done: v > 3
        };
      }

    };
  }
}

console.log(...iterable);    //1 2 3
console.log(...iterable);    //1 2 3
