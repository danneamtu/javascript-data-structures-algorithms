const Queue = require('./queue_from_stacks');

test('Queue is a class', () => {
  expect(typeof Queue.prototype.constructor).toEqual('function');
});

