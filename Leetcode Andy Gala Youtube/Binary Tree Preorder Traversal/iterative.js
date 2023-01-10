const preorderTraversal = root => {
  if (!root) return [];
  const stack = [root];
  const result = [];

  while(stack.length) {
    let node = stack.pop();

    result.push(node.val);
    if(node.right) stack.push(node.right);
    if(node.left) stack.push(node.left);
  }

  return result;
}

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

  preorderTraversal = () => {
    if (!this.root) return [];
    const stack = [this.root];
    const result = [];
  
    while(stack.length) {
      let node = stack.pop();
  
      result.push(node.value);
      if(node.right) stack.push(node.right);
      if(node.left) stack.push(node.left);
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


console.log(bst.preorderTraversal());