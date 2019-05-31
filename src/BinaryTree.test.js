const BinaryTree = require("./BinaryTree");
const BinaryTreeNode = require("./BinaryTreeNode");

describe("BinaryTree", () => {

  let tree;
  let callback;
  beforeEach(() => {
    const leftChild = new BinaryTreeNode(1);
    const rightChild = new BinaryTreeNode(3);
    const root = new BinaryTreeNode(2, leftChild, rightChild);
    tree = new BinaryTree(root);
    callback = jest.fn();
  });

  test("inOrderTraverse", () => {
    tree.inOrderTraverse(callback);

    expect(callback.mock.calls).toHaveLength(3);
    expect(callback.mock.calls[0][0]).toBe(1);
    expect(callback.mock.calls[1][0]).toBe(2);
    expect(callback.mock.calls[2][0]).toBe(3);
  });

  test("preOrderTraverse", () => {
    tree.preOrderTraverse(callback);

    expect(callback.mock.calls).toHaveLength(3);
    expect(callback.mock.calls[0][0]).toBe(2);
    expect(callback.mock.calls[1][0]).toBe(1);
    expect(callback.mock.calls[2][0]).toBe(3);
  });

  test("postOrderTraverse", () => {
    tree.postOrderTraverse(callback);

    expect(callback.mock.calls).toHaveLength(3);
    expect(callback.mock.calls[0][0]).toBe(1);
    expect(callback.mock.calls[1][0]).toBe(3);
    expect(callback.mock.calls[2][0]).toBe(2);
  });

});