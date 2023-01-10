class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor()  {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  prepend(value) {
    const node = new Node(value);
    if(this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++
  }

  print() {
    if(this.isEmpty()) {
      console.log('List is empty');
    } else {
      let list = '';
      let curr = this.head;
      console.log(curr);
      while(curr.next) {
        console.log(curr);
        list += `${curr.value}-->`;
        curr = curr.next;
      }
      console.log(list);
    }
  }
}

const list = new LinkedList()
list.prepend(1);
list.print();