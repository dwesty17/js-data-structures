class BinaryTree {

  constructor (root) {
    this.root = root;
  }

  inOrderTraverse (callback, node = this.root) {
    node.leftChild && this.inOrderTraverse(callback, node.leftChild);
    callback(node.data);
    node.rightChild && this.inOrderTraverse(callback, node.rightChild);
  }

  preOrderTraverse (callback, node = this.root) {
    callback(node.data);
    node.leftChild && this.preOrderTraverse(callback, node.leftChild);
    node.rightChild && this.preOrderTraverse(callback, node.rightChild);
  }

  postOrderTraverse (callback, node = this.root) {
    node.leftChild && this.postOrderTraverse(callback, node.leftChild);
    node.rightChild && this.postOrderTraverse(callback, node.rightChild);
    callback(node.data);
  }

}

module.exports = BinaryTree;