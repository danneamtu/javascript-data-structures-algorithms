const L = require('./linked_list');
const List = L.LinkedList;
const Node = L.Node;

test('List is a class', () => {
  expect(typeof List.prototype.constructor).toEqual('function');
});

test('Node is a class', () => {
  expect(typeof Node.prototype.constructor).toEqual('function');
});

describe('A Node', () => {
  test('has properties data and next', () => {
    const node = new Node('a', 'b');
    expect(node.data).toEqual('a');
    expect(node.next).toEqual('b');
  });
});

describe('Insert First', () => {
  test('appends a node to the start of the list', () => {
    const l = new List();
    l.insertFirst(1);
    expect(l.head.data).toEqual(1);
    l.insertFirst(2);
    expect(l.head.data).toEqual(2);
  });
});

describe('Size', () => {
  test('returns the number of nodes in a linked list', () => {
    const l = new List();
    expect(l.size()).toEqual(0);
    l.insertFirst(1);
    l.insertFirst(1);
    l.insertFirst(1);
    l.insertFirst(1);
    expect(l.size()).toEqual(4);
  });
});

describe('getFirst', () => {
  test('returns the first node', () => {
    const l = new List();
    l.insertFirst(1);
    expect(l.getFirst().data).toEqual(1);
    l.insertFirst(2);
    expect(l.getFirst().data).toEqual(2);
  });
});

describe('getLast', () => {
  test('returns the last node', () => {
    const l = new List();
    l.insertFirst(1);
    expect(l.getLast().data).toEqual(1);
    expect(l.getLast()).toEqual({data: 1, next: null});
    l.insertFirst(2);
    expect(l.getLast().data).toEqual(1);
    expect(l.getLast()).toEqual({data: 1, next: null});
    l.insertFirst(3);
    expect(l.getLast().data).toEqual(1);
    expect(l.getLast()).toEqual({data: 1, next: null});
  });

  describe('clear', () => {
    test('removes all nodes from list', () => {
      const l = new List();
      expect(l.size()).toEqual(0);
      l.insertFirst(1);
      l.insertFirst(1);
      l.insertFirst(1);
      l.insertFirst(1);
      expect(l.size()).toEqual(4);
      l.clear();
      expect(l.size()).toEqual(0);
    });
  });

  describe('removeFirst', () => {
    test('removes first node from list', () => {
      const l = new List();
      l.insertFirst('a');
      l.removeFirst();
      expect(l.size()).toEqual(0);
      expect(l.getFirst()).toEqual(null);
    });
  });

  describe('removeLast', () => {
    test('removes last node from list, when list is empty', () => {
      const l = new List();
      expect(() => {
        l.removeLast();
      }).not.toThrow();
    });

    test('removes last node from list, when list length is 1', () => {
      const l = new List();
      l.insertFirst('a');
      l.removeLast();
      expect(l.head).toEqual(null);
    });

    test('removes last node from list, when list is length 2', () => {
      const l = new List();
      l.insertFirst('b');
      l.insertFirst('a');
      l.removeLast();
      expect(l.size()).toEqual(1);
      expect(l.head.data).toEqual('a');
    });

    test('removes last node from list, when list is length 3', () => {
      const l = new List();
      l.insertFirst('c');
      l.insertFirst('b');
      l.insertFirst('a');
      l.removeLast();
      expect(l.size()).toEqual(2);
      expect(l.getLast()).toEqual('b');
      expect(l.head.data).toEqual('a');
    });
  });
});
