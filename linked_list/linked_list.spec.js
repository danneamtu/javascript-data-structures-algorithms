const L = require('./linked_list');
const List = L.LinkedList;
const Node = L.Node;

test('List is a class', () => {
  expect(typeof List.prototype.constructor).toEqual('function');
});

test('Node is a class', () => {
  expect(typeof Node.prototype.constructor).toEqual('function');
});

describe.skip('A Node', () => {
  test('has properties data and next', () => {
    const node = new Node('a', 'b');
    expect(node.data).toEqual('a');
    expect(node.next).toEqual('b');
  });
});
