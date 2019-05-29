const DoublyLinkedList = require("./DoublyLinkedList");

describe("DoublyLinkedList", () => {
  let list;
  beforeEach(() => {
    list = new DoublyLinkedList();
  });

  describe("constructor", () => {
    test("creates an empty singly linked list", () => {
      expect(list.head).toBeNull();
      expect(list.tail).toBeNull();
    });
  });

  describe("isEmpty", () => {
    test("returns true before anything has been added to the list", () => {
      expect(list.isEmpty()).toBeTruthy();
    });

    test("returns false after nodes have been added", () => {
      list.addFront(1);
      expect(list.isEmpty()).toBeFalsy();
    });

    test("returns true after all the nodes have been removed", () => {
      list.addFront(1);
      list.removeFront();
      expect(list.isEmpty()).toBeTruthy();
    });
  });

  describe("addFront", () => {
    beforeEach(() => {
      list.addFront(10);
    });

    test("does nothing if there are zero arguments", () => {
      list.addFront();
      expect(list.head.getData()).toBe(10);
      expect(list.head.next).toBeNull();
      expect(list.head.prev).toBeNull();
    });

    test("accepts a single argument and adds it to the front of the list", () => {
      list.addFront(20);
      expect(list.head.getData()).toBe(20);
      expect(list.head.next.getData()).toBe(10);
      expect(list.head.prev).toBeNull();
      expect(list.head.next.next).toBeNull();
      expect(list.head.next.prev).toBe(list.head);
    });

    test("accepts multiple arguments and adds them to the front of the list", () => {
      list.add(30, 20);
      expect(list.head.getData()).toBe(30);
      expect(list.head.next.getData()).toBe(20);
      expect(list.head.next.next.getData()).toBe(10);
      expect(list.head.next.next.next).toBeNull();
    });
  });

  describe("removeFront", () => {
    test("does nothing if list is empty", () => {
      expect(list.remove()).toBeUndefined();
    });

    test("removes the current head if it isn't null", () => {
      list.add(10);
      expect(list.remove()).toBe(10);
    });

    test("updates list to point to the new head", () => {
      list.add(10, 20);

      list.remove();
      expect(list.head.getData()).toBe(20);

      list.remove();
      expect(list.head).toBeNull();
    });
  });

  describe("addBack", () => {
    beforeEach(() => {
      list.add(10);
    });

    test("does nothing if there are zero arguments", () => {
      list.add();
      expect(list.head.getData()).toBe(10);
      expect(list.head.next).toBeNull();
    });

    test("accepts a single argument and adds it to the front of the list", () => {
      list.add(20);
      expect(list.head.getData()).toBe(20);
      expect(list.head.next.getData()).toBe(10);
      expect(list.head.next.next).toBeNull();
    });

    test("accepts multiple arguments and adds them to the front of the list", () => {
      list.add(30, 20);
      expect(list.head.getData()).toBe(30);
      expect(list.head.next.getData()).toBe(20);
      expect(list.head.next.next.getData()).toBe(10);
      expect(list.head.next.next.next).toBeNull();
    });
  });

  describe("removeBack", () => {
    test("does nothing if list is empty", () => {
      expect(list.remove()).toBeUndefined();
    });

    test("removes the current head if it isn't null", () => {
      list.add(10);
      expect(list.remove()).toBe(10);
    });

    test("updates list to point to the new head", () => {
      list.add(10, 20);

      list.remove();
      expect(list.head.getData()).toBe(20);

      list.remove();
      expect(list.head).toBeNull();
    });
  });
});