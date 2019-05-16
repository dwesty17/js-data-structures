// TODO
//  - create a test file to test parity with Array
//  - create performance benchmark tests
//  - add typescript definition files for each class
//  - simplify test suite
//  - consider breaking up test suit into multiple files

class List {
  constructor () {
    this.length = 0;

    if (arguments.length > 0) {
      if (
        typeof arguments[0].length === "number"
        && typeof arguments[0].forEach === "function"
      ) {
        this.length = arguments[0].length;
        arguments[0].forEach((item, index) => {
          this[index] = item;
        });
      }

      if (typeof arguments[0] === "number") {
        this.length = arguments[0];
      }
    }
  }

  forEach (callback) {
    for (let i = 0; i < this.length; i++) {
      callback(this[i], i, this);
    }
  }

  push () {
    for (let argument of arguments) {
      this[this.length++] = argument;
    }
    return this.length;
  }

  pop () {
    if (this.length > 0) {
      const removed = this[this.length - 1];
      delete this[this.length - 1];
      this.length--;
      return removed;
    }
  }

  shift () {
    if (this.length > 0) {
      const removed = this[0];
      delete this[0];
      this.length--;
      for (let i = 0; i < this.length; i++) {
        this[i] = this[i + 1];
      }
      delete this[this.length];
      return removed;
    }
  }

  unshift () {
    for (let i = this.length - 1; i >= 0; i--) {
      this[i + arguments.length] = this[i];
    }
    this.length += arguments.length;

    for (let i = 0; i < arguments.length; i++) {
      this[i] = arguments[i];
    }
    return this.length;
  }

  indexOf (searchElement, fromIndex = 0) {
    fromIndex = Math.max(fromIndex >= 0 ? fromIndex : this.length + fromIndex, 0);
    for (let i = fromIndex; i < this.length; i++) {
      if (this[i] === searchElement) { return i; }
    }

    return -1;
  }

  splice (start, deleteCount) {
    const startIndex = Math.max(start >= 0 ? start : this.length + start, 0);
    deleteCount = deleteCount || this.length - startIndex;

    const removed = new List();
    const addBack = new List();

    while (this.length > startIndex) {
      if (this.length <= startIndex + deleteCount) {
        removed.unshift(this.pop());
      } else {
        addBack.push(this.pop());
      }
    }

    for (let i = 2; i < arguments.length; i++) {
      this.push(arguments[i]);
    }

    while (addBack.length) {
      this.push(addBack.pop());
    }

    return removed;
  }

  slice (begin = 0, end = this.length) {
    begin = Math.max(begin >= 0 ? begin : this.length + begin, 0);
    end = Math.min(end >= 0 ? end : this.length + end, this.length);

    const copy = new List();

    for (let i = begin; i < end; i++) {
      copy.push(this[i]);
    }

    return copy;
  }

  concat () {}

  copyWithin () {}

  entries () {}

  every () {}

  fill () {}

  filter () {}

  find () {}

  findIndex () {}

  flat () {}

  flatMap () {}

  includes () {}

  join () {}

  keys () {}

  lastIndexOf () {}

  map () {}

  reduce () {}

  reduceRight () {}

  reverse () {}

  some () {}

  sort () {}

  toLocaleString () {}

  toSource () {}

  toString () {}

  values () {}
}

List.from = () => {};
List.isList = () => {};
List.of = () => {};

module.exports = List;