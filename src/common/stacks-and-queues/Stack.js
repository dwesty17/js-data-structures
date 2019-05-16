const { SinglyLinkedList } = require("../linked-lists");

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
    return this.linkedList.head && this.linkedList.head.getData();
  }

  remove () {
    return this.linkedList.remove();
  }
}

module.exports = Stack;