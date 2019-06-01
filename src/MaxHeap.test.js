const MaxHeap = require("./MaxHeap");

describe("MaxHeap", () => {

  let maxHeap;
  beforeEach(() => {
    maxHeap = new MaxHeap();
  });

  test("Returns undefined if the tree is empty", () => {
    const max = maxHeap.extract();
    expect(max).toBeUndefined();
  });

  test("extract returns the maximum element", () => {
    maxHeap.insert(3);
    maxHeap.insert(4);
    maxHeap.insert(1);
    maxHeap.insert(5);
    maxHeap.insert(2);

    expect(maxHeap.extract()).toBe(5);
    expect(maxHeap.extract()).toBe(4);
    expect(maxHeap.extract()).toBe(3);
    expect(maxHeap.extract()).toBe(2);
    expect(maxHeap.extract()).toBe(1);
    expect(maxHeap.extract()).toBeUndefined();
  });

});