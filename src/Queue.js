const { DoublyLinkedList } = require("./DoublyLinkedList");

class Queue {
  constructor () {
    this.linkedList = new DoublyLinkedList();
  }

  isEmpty () {
    return this.linkedList.isEmpty();
  }

  add () {
    this.linkedList.addBack(...arguments);
  }

  peek () {
    return this.linkedList.head.data;
  }

  remove () {
    return this.linkedList.removeFront();
  }
}

module.exports = Queue;