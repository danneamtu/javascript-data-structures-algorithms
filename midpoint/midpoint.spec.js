const midpoint = require('./midpoint');
const L = require('./linkedlist');

const Node = L.Node;
const LinkedList = L.LinkedList;

test('midpoint is a function', () => {
  expect(typeof midpoint).toEqual('function');
});

test('when the list has 5 elements', () => {
  const l = new LinkedList();
  l.insertLast('a');
  l.insertLast('b');
  l.insertLast('c');
  l.insertLast('d');
  l.insertLast('e');
  expect(midpoint(l).data).toEqual('c');
});
