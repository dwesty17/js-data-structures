// TODO should this only have add and remove methods?
// TODO are addFirst and addLast better method names? (I think they are)
// TODO use scratch pad to document how code can be used
class SinglyLinkedList {
  constructor () {
    this.head = null;
  }

  isEmpty() {
    return !this.head;
  }

  add () {
    [...arguments].reverse().forEach((data) => {
      const newNode = new Node(data);
      newNode.next = this.head;
      this.head = newNode;
    });
  }

  remove () {
    if (this.head) {
      const removed = this.head;
      this.head = this.head.next;
      return removed.data;
    }
  }
}

class Node {
  constructor (data) {
    this.data = data;
    this.next = null;
  }
}

module.exports = SinglyLinkedList;