class QueueWithStacks {
  constructor() {
    this.in = [];
    this.out = [];
  }

  enqueue(val) {
    this.in.push(val);
  }

  dequeue() {
    if(this.out.length === 0) {
      while(this.in.length > 0) {
        this.out.push(this.in.pop());
      }
    }

    return this.out.pop();
  }

  peek() {
    if(this.out.length === 0) {
      while(this.in.length > 0) {
        this.out.push(this.in.pop());
      }
    }
    return this.out[this.out.length - 1]
  }

  empty() {
    return this.in.length === 0 && this.out.length === 0;
  }
}

const q1 = new QueueWithStacks();
// console.log(q1.enqueue(1,2,3));
q1.enqueue(1);
q1.enqueue(2);
q1.enqueue(3);
console.log(q1.dequeue());
console.log(q1.empty());
console.log(q1.dequeue());
console.log(q1.dequeue());
// console.log(q1.peek());
console.log(q1.empty());





