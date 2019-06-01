const MinHeap = require("./MinHeap");
const BinaryTreeNode = require("./BinaryTreeNode");

describe("MinHeap", () => {

  let minHeap;
  beforeEach(() => {
    minHeap = new MinHeap();
  });

  test("Returns undefined if the tree is empty", () => {
    const min = minHeap.extract();
    expect(min).toBeUndefined();
  });

  test("extract returns the minimum element", () => {
    minHeap.insert(new BinaryTreeNode(3));
    minHeap.insert(new BinaryTreeNode(4));
    minHeap.insert(new BinaryTreeNode(1));
    minHeap.insert(new BinaryTreeNode(5));
    minHeap.insert(new BinaryTreeNode(2));

    expect(minHeap.extract()).toBe(1);
    expect(minHeap.extract()).toBe(2);
    expect(minHeap.extract()).toBe(3);
    expect(minHeap.extract()).toBe(4);
    expect(minHeap.extract()).toBe(5);
    expect(minHeap.extract()).toBeUndefined();
  });

});