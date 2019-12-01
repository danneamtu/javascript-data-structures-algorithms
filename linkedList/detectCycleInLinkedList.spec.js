const detectCycleInLinkedList = require('./detectCycleInLinkedList');
const L = require('./linked_list');
const List = L.LinkedList;
const Node = L.Node;

test('detectCycleInLinkedList', () => {
  expect(typeof detectCycleInLinkedList).toEqual('function');
});

test('detectCycleInLinkedList detects cycle linked lists', () => {
  const l = new List();
  const a = new Node('a');
  const b = new Node('b');
  const c = new Node('c');

  l.head = a;
  a.next = b;
  b.next = c;
  c.next = b;

  expect(detectCycleInLinkedList(l)).toEqual(true);
});

test('detectCycleInLinkedList detects cycle linked lists linked at the head', () => {
  const l = new List();
  const a = new Node('a');
  const b = new Node('b');
  const c = new Node('c');

  l.head = a;
  a.next = b;
  b.next = c;
  c.next = a;

  expect(detectCycleInLinkedList(l)).toEqual(true);
});

test('detectCycleInLinkedList detects non-cycled linked lists', () => {
  const l = new List();
  const a = new Node('a');
  const b = new Node('b');
  const c = new Node('c');

  l.head = a;
  a.next = b;
  b.next = c;
  c.next = null;

  expect(detectCycleInLinkedList(l)).toEqual(false);
});
