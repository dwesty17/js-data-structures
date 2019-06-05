// TODO are addFirst and addLast better method names? (I think they are)
// TODO use scratch pad to document how code can be used
class DoublyLinkedList {

  constructor () {
    this.head = null;
    this.tail = null;
  }

  isEmpty() {
    return !this.head || !this.tail;
  }

  addFront () {
    [...arguments].reverse().forEach((data) => {
      const newNode = new Node(data);
      newNode.next = this.head;
      this.head = newNode;

      if (this.head.next) {
        this.head.next.prev = this.head;
      } else {
        this.tail = this.head;
      }
    });
  }

  removeFront () {
    if (this.head) {
      const removed = this.head;
      if (this.head === this.tail) {
        this.head = null;
        this.tail = null;
      } else {
        this.head = this.head.next;
        this.head.prev = null;
      }
      return removed.data;
    }
  }

  addBack () {
    [...arguments].forEach((data) => {
      const newNode = new Node(data);
      newNode.prev = this.tail;
      this.tail = newNode;

      if (this.tail.prev) {
        this.tail.prev.next = this.tail;
      } else {
        this.head = this.tail;
      }
    });
  }

  removeBack () {
    if (this.tail) {
      const removed = this.tail;
      if (this.tail === this.head) {
        this.head = null;
        this.tail = null;
      } else {
        this.tail = this.tail.prev;
        this.tail.next = null;
      }
      return removed.data;
    }
  }

}

class Node {

  constructor (data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }

}

module.exports = DoublyLinkedList;