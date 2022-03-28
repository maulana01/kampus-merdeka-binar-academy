/** @format */

// create binary search tree class
// create insert method
// create contains method
// create depthFirstLog method
class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
  insert(value) {
    if (value <= this.value) {
      if (!this.left) {
        this.left = new BinarySearchTree(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (!this.right) {
        this.right = new BinarySearchTree(value);
      } else {
        this.right.insert(value);
      }
    }
  }
  contains(value) {
    if (value === this.value) {
      return true;
    } else if (value < this.value) {
      if (!this.left) {
        return false;
      } else {
        return this.left.contains(value);
      }
    } else {
      if (!this.right) {
        return false;
      } else {
        return this.right.contains(value);
      }
    }
  }
  depthFirstLog(cb) {
    cb(this.value);
    if (this.left) {
      this.left.depthFirstLog(cb);
    }
    if (this.right) {
      this.right.depthFirstLog(cb);
    }
  }
  // create a method that will return preorder traversal of the tree
  preorder() {
    let result = [];
    let _walk = (node) => {
      result.push(node.value);
      if (node.left) {
        _walk(node.left);
      }
      if (node.right) {
        _walk(node.right);
      }
    };
    _walk(this);
    return result;
  }
  // create a method that will return inorder traversal of the tree
  inorder() {
    let result = [];
    let _walk = (node) => {
      if (node.left) {
        _walk(node.left);
      }
      result.push(node.value);
      if (node.right) {
        _walk(node.right);
      }
    };
    _walk(this);
    return result;
  }
  // create a method that will return postorder traversal of the tree
  postorder() {
    let result = [];
    let _walk = (node) => {
      if (node.left) {
        _walk(node.left);
      }
      if (node.right) {
        _walk(node.right);
      }
      result.push(node.value);
    };
    _walk(this);
    return result;
  }
  // create a method that will return breadth first traversal of the tree
  breadthFirstLog() {
    let result = [];
    let queue = [];
    queue.push(this);
    while (queue.length) {
      let node = queue.shift();
      result.push(node.value);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    return result;
  }
}

const bst = new BinarySearchTree(10);
bst.insert(6);
bst.insert(15);
bst.insert(3);
bst.insert(8);
bst.insert(20);
console.log('preorder: ', bst.preorder());
console.log('inorder: ', bst.inorder());
console.log('postorder: ', bst.postorder());
