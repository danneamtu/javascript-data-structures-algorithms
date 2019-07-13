const fromLast = require('./fromlast');
const L = require('../linked_list/linked_list');
const List = L.LinkedList;
const Node = L.Node;

test('fromLast is a function', () => {
  expect(typeof fromLast).toEqual('function');
});
