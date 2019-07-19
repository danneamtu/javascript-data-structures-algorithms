const Node = require('./binary_search_tree');

test('Node is a constructor', () => {
  expect(typeof Node.prototype.constructor).toEqual('function');
});
