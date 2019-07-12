const midpoint = require('./midpoint');
const L = require('./linkedlist');

const Node = L.Node;
const LinkedList = L.LinkedList;

test('midpoint is a function', () => {
  expect(typeof midpoint).toEqual('function');
});

