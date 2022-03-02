/** @format */

// create binary search tree with function
function BinarySearchTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

BinarySearchTree.prototype.insert = function (value) {
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
};

BinarySearchTree.prototype.contains = function (value) {
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
};

BinarySearchTree.prototype.depthFirstLog = function (cb) {
  cb(this.value);
  if (this.left) {
    this.left.depthFirstLog(cb);
  }
  if (this.right) {
    this.right.depthFirstLog(cb);
  }
};

// create a method that will return preorder traversal of the tree
BinarySearchTree.prototype.preorder = function () {
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
};
// create a method that will return inorder traversal of the tree
BinarySearchTree.prototype.inorder = function () {
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
};
// create a method that will return postorder traversal of the tree
BinarySearchTree.prototype.postorder = function () {
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
};

const tree = new BinarySearchTree(50);
tree.insert(30);
tree.insert(70);
tree.insert(100);
tree.insert(60);
console.log(tree.contains(30));
console.log(tree.contains(70));
console.log(tree.contains(100));
console.log(tree.contains(60));
// call depthfirstlog on tree
tree.depthFirstLog(console.log);
// call preorder on tree with 'ini preorder : '
console.log('ini preorder : ', tree.preorder());
// call inorder on tree with 'ini inorder : '
console.log('ini inorder : ', tree.inorder());
// call postorder on tree with 'ini postorder : '
console.log('ini postorder : ', tree.postorder());
