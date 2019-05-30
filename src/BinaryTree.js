class BinaryTree {

  constructor (root) {
    this.root = root;
  }

  inOrderTraverse (callback, node = this.root) {
    callback(node);
    node.leftChild && this.inOrderTraverse(callback, this.root.leftChild);
    node.rightChild && this.inOrderTraverse(callback, this.root.rightChild);
  }

  preOrderTraverse (callback, node = this.root) {
    callback(node);
    node.leftChild && this.preOrderTraverse(callback, this.root.leftChild);
    node.rightChild && this.preOrderTraverse(callback, this.root.rightChild);
  }

  postOrderTraverse (callback, node = this.root) {
    node.leftChild && this.postOrderTraverse(callback, this.root.leftChild);
    node.rightChild && this.postOrderTraverse(callback, this.root.rightChild);
    callback(node);
  }

}

module.exports = BinaryTree;