// // Actual function implementation 
// const zigzagLevelOrder = root => {
//   if(!root) return [];

//   const queue = [root];
//   const result = [];
//   let count = 0;

//   while(queue.length) {
//     let len = queue.length;

//     result.push(queue.map(node => node.val));

//     while(len--) {
//       let node = queue.shift();
//       if(node.left) queue.push(node.left);
//       if(node.right) queue.push(node.right)
//     }
//   }
//   return result;
// }

// // Node Implementation 
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// // Implementation with real Tree
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  zigzagLevelOrder = () => {
    // console.log('this.root',this.root);
    if(!this.root) return [];
  
    const queue = [this.root];
    const result = [];
    let count = 0;
  
    while(queue.length) {
      let len = queue.length;
      // console.log('queue',queue);
      if(count % 2 === 0) result.push(queue.map(node => node.value));
      else result.push(queue.map(node => node.value).reverse());
      count++;
      // console.log('result', result);
  
      while(len--) {
        let node = queue.shift();
        if(node.left) queue.push(node.left);
        if(node.right) queue.push(node.right)
      }
    }
    return result;
  }

  insertNode(root, newNode) {
    if (newNode.value < root.value) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
    } else {
      if (root.right === null) {
        root.right = newNode;
      } else {
        this.insertNode(root.right, newNode);
      }
    }
  }

  isEmpty() {
    return this.root === null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }
}

const bst = new BinarySearchTree();

bst.insert(10);
bst.insert(5);
bst.insert(3);
bst.insert(8);
bst.insert(15);
bst.insert(14);
bst.insert(16);


console.log(bst.zigzagLevelOrder());
