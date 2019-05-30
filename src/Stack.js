const { SinglyLinkedList } = require("./SinglyLinkedList");

class Stack {
  constructor () {
    this.linkedList = new SinglyLinkedList();
  }

  isEmpty () {
    return this.linkedList.isEmpty();
  }

  add () {
    this.linkedList.add(...arguments);
  }

  peek () {
    return this.linkedList.head && this.linkedList.head.data;
  }

  remove () {
    return this.linkedList.remove();
  }
}

module.exports = Stack;