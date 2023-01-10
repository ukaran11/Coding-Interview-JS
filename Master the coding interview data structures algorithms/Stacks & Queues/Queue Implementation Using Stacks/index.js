class CrazyQueue {
  constructor(){
    this.first = [];
    this.last = [];
  }

  enqueue(value) {
    for(let i=0; i < this.first.length; i++) {
      this.last.push(this.first.pop());
    }
    this.last.push(value);
    return this;
  }

  dequeue() {
    for(let i=0; i <this.last.length; i++) {
      this.first.push(this.last.pop());
    }
    this.first.pop();
    return this;
  }

  peek() {
    if(this.last.length > 0){
      return this.last[0];
    }
    return this.first[this.first.length - 1];
  }
}

const myQueue = new CrazyQueue();
myQueue.enqueue('Joy');
console.log(myQueue);
myQueue.enqueue('Matt');
console.log(myQueue);
console.log(myQueue.peek());
myQueue.enqueue('Pavel');
console.log(myQueue);

myQueue.dequeue();
console.log(myQueue);
myQueue.dequeue();
console.log(myQueue);
myQueue.dequeue();
console.log(myQueue);
// myQueue.peek();