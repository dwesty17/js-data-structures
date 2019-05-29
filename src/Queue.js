const { DoublyLinkedList } = require("./linked-lists");

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
    return this.linkedList.head.getData();
  }

  remove () {
    return this.linkedList.removeFront();
  }
}

module.exports = Queue;