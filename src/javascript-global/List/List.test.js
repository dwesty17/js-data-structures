const List = require("./List");

describe("List", () => {
  let list;
  beforeEach(() => {
    list = new List();
  });

  describe("constructor", () => {
    test("Creates empty list if there are no arguments", () => {
      expect(list.length).toBe(0);
    });

    test("Accepts an array as an argument", () => {
      list = new List([0, 1]);

      expect(list.length).toBe(2);
      expect(list[0]).toBe(0);
      expect(list[1]).toBe(1);
    });

    test("Accepts a list as an argument", () => {
      const initList = new List();
      initList.push(0, 1);
      list = new List(initList);

      expect(list.length).toBe(2);
      expect(list[0]).toBe(0);
      expect(list[1]).toBe(1);
    });

    test("Accepts list length as an argument", () => {
      list = new List(1);
      list.push(1);

      expect(list.length).toBe(2);
      expect(list[0]).toBeUndefined();
      expect(list[1]).toBe(1);
    });
  });

  describe("Property access", () => {
    test("Using square brackets", () => {
      list.push(1);
      expect(list[0]).toBe(1);
    });
  });

  describe("forEach", () => {
    let mockCallback;
    beforeEach(() => {
      mockCallback = jest.fn();
    });
    
    test("Iterates over all the elements", () => {
      list.push(0, 1, 2);
      list.forEach(mockCallback);

      expect(mockCallback.mock.calls.length).toBe(3);
    });
    
    test("Provides the items in the list as the first argument to the callback", () => {
      list.push(1, 2, 3);
      list.forEach(mockCallback);

      expect(mockCallback.mock.calls[0][0]).toBe(1);
      expect(mockCallback.mock.calls[1][0]).toBe(2);
      expect(mockCallback.mock.calls[2][0]).toBe(3);
    });
    
    test("Provides the index of each item as the second argument to the callback", () => {
      list.push(1, 2, 3);
      list.forEach(mockCallback);

      expect(mockCallback.mock.calls[0][1]).toBe(0);
      expect(mockCallback.mock.calls[1][1]).toBe(1);
      expect(mockCallback.mock.calls[2][1]).toBe(2);
    });
    
    test("Provides the list as the third argument to the callback", () => {
      list.push(1, 2, 3);
      list.forEach(mockCallback);

      expect(mockCallback.mock.calls[0][2]).toBe(list);
      expect(mockCallback.mock.calls[1][2]).toBe(list);
      expect(mockCallback.mock.calls[2][2]).toBe(list);
    });
  });

  describe("push", () => {
    test("Ignores empty argument", () => {
      list.push();
      expect(list.length).toBe(0);
    });

    test("Adds arguments to the end of a list in their argument order", () => {
      list.push(10);
      expect(list.length).toBe(1);
      expect(list).toEqual( new List([10]) );

      list.push(20, 30);
      expect(list.length).toBe(3);
      expect(list).toEqual( new List([10, 20, 30]) );
    });

    test("Returns the length of the new list on each insert", () => {
      expect(list.push(10)).toBe(1);
      expect(list.push(20, 30)).toBe(3);
    });
  });

  describe("pop", () => {
    test("Returns undefined if list is empty", () => {
      expect(list.pop()).toBeUndefined();
      expect(list.length).toBe(0);
    });

    test("Removes the last element in the list", () => {
      list.push(10, 20);

      list.pop();
      expect(list).toEqual( new List([10]) );
      expect(list.length).toBe(1);

      list.pop();
      expect(list).toEqual( new List() );
      expect(list.length).toBe(0);
    });

    test("Returns the last element in the list", () => {
      list.push(10, 20);
      expect(list.pop()).toBe(20);
      expect(list.pop()).toBe(10);
    });
  });

  describe("shift", () => {
    test("Returns undefined if list is empty", () => {
      expect(list.shift()).toBeUndefined();
      expect(list.length).toBe(0);
    });

    test("Removes the first element in the list", () => {
      list.push(10, 20);

      list.shift();
      expect(list).toEqual( new List([20]) );
      expect(list.length).toBe(1);

      list.shift();
      expect(list).toEqual( new List([]) );
      expect(list.length).toBe(0);
    });

    test("Returns the first element in the list", () => {
      list.push(10, 20);
      expect(list.shift()).toBe(10);
      expect(list.shift()).toBe(20);
    });
  });

  describe("unshift", () => {
    test("Ignores empty argument", () => {
      list.unshift();
      expect(list.length).toBe(0);
    });

    test("Adds arguments to the beginning of a list in their argument order", () => {
      list.unshift(10);
      expect(list.length).toBe(1);
      expect(list).toEqual( new List([10]) );

      list.unshift(20, 30);
      expect(list.length).toBe(3);
      expect(list).toEqual( new List([20, 30, 10]) );
    });

    test("Returns the length of the new list on each insert", () => {
      expect(list.push(10)).toBe(1);
      expect(list.push(20, 30)).toBe(3);
    });
  });

  describe("indexOf", () => {
    describe("With default fromIndex of 0", () => {
      test("Returns -1 if there is no matching searchElement", () => {
        list.push(10, 20, 30);
        expect(list.indexOf(40)).toBe(-1);
      });

      test("Returns the index of the first matching searchElement", () => {
        list.push(10, 20, 10, 20);
        expect(list.indexOf(20)).toBe(1);
      });
    });

    describe("Starting search at optional fromIndex argument", () => {
      test("Returns -1 if fromIndex is greater than or equal to the length of the list", () => {
        list.push(10, 10, 10);
        expect(list.indexOf(10, list.length)).toBe(-1);
        expect(list.indexOf(10, list.length + 1)).toBe(-1);
      });

      describe("For positive fromIndex values", () => {
        test("Returns -1 if there is no matching searchElement", () => {
          list.push(10, 20, 10, 20);
          expect(list.indexOf(10, 3)).toBe(-1);
        });

        test("Returns the index of the first matching searchElement", () => {
          list.push(10, 20, 10, 20);
          expect(list.indexOf(20, 1)).toBe(1);
          expect(list.indexOf(20, 2)).toBe(3);
        });
      });

      describe("For negative fromIndex values", () => {
        test("Returns -1 if there is no matching searchElement ", () => {
          list.push(10, 20, 10, 20);
          expect(list.indexOf(10, -1)).toBe(-1);
        });

        test("Returns the index of the first matching searchElement", () => {
          list.push(10, 20, 10, 20);
          expect(list.indexOf(20, -1)).toBe(3);
          expect(list.indexOf(20, -2)).toBe(3);
          expect(list.indexOf(20, -3)).toBe(1);
          expect(list.indexOf(20, -5)).toBe(1);
        });
      });
    });
  });

  describe("splice", () => {
    describe("With default value for deleteCount", () => {
      describe("For positive start value", () => {
        test("Deletes elements from the start index to the end of the list", () => {
          list.push(10, 20, 30, 40);

          list.splice(2);
          expect(list).toEqual( new List([10, 20]) );
        });

        test("Returns the deleted elements", () => {
          list.push(10, 20, 30, 40);

          expect(list.splice(2)).toEqual( new List([30, 40]) );
        });
      });

      describe("For negative start value", () => {
        test("Deletes elements ", () => {
          list.push(10, 20, 30, 40);

          list.splice(-1);
          expect(list).toEqual( new List([10, 20, 30]) );

          list.splice(-4);
          expect(list).toEqual( new List([]) );
        });

        test("Returns the deleted elements", () => {
          list.push(10, 20, 30, 40);

          expect(list.splice(-1)).toEqual( new List([40]) );
          expect(list.splice(-4)).toEqual( new List([10, 20, 30]) );
        });
      });
    });

    describe("With optional deleteCount argument", () => {
      test("Deletes the specified amount of entries", () => {
        list.push(10, 20, 30, 40);

        list.splice(1, 2);
        expect(list).toEqual( new List([10, 40]) );
      });

      test("Returns just the deleted elements", () => {
        list.push(10, 20, 30, 40);

        expect(list.splice(1, 2)).toEqual( new List([20, 30]) );
      });
    });

    describe("With optional items to add", () => {
      test("Inserts the items in the order they appear after the start index", () => {
        list.push(10, 20, 30, 40);

        list.splice(1, 2, 50, 60);
        expect(list).toEqual( new List([10, 50, 60, 40]) );
      });

      test("Returns just the deleted elements", () => {
        list.push(10, 20, 30, 40);

        expect(list.splice(1, 2, 50, 60)).toEqual( new List([20, 30]) );
      });
    });
  });

  describe("slice", () => {
    test("Returns a shallow copy of the whole array by default", () => {
      list.push(10, 20, 30, 40);

      const shallowCopy = list.slice();
      expect(shallowCopy).toEqual(list);
      expect(shallowCopy).not.toBe(list);
    });

    test("Returns a shallow copy from begin to end without modifying the original array", () => {
      list.push(10, 20, 30, 40);
      expect(list.slice(0, 2)).toEqual( new List([10, 20]) );
      expect(list).toEqual( new List([10, 20, 30, 40]) )
    });

    test("handles negative arguments correctly", () => {
      list.push(10, 20, 30, 40);
      expect(list.slice(-2, 4)).toEqual( new List([30, 40]) );
      expect(list.slice(0, -2)).toEqual( new List([10, 20]) );
      expect(list.slice(-3, -1)).toEqual( new List([20, 30]) );
      expect(list).toEqual( new List([10, 20, 30, 40]) );
    })
  });
});