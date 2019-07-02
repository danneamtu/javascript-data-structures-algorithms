const L = require('./linked_list')
const List = L.LinkedList
const Node = L.Node

test('List is a class', () => {
  expect(typeof List.prototype.constructor).toEqual('function')
})

test('Node is a class', () => {
  expect(typeof Node.prototype.constructor).toEqual('function')
})

