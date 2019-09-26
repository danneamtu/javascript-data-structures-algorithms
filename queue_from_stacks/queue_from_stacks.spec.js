const Queue = require('./queue_from_stacks');

test('Queue is a class', () => {
  expect(typeof Queue.prototype.constructor).toEqual('function');
});

test('can add records to a queue', () => {
  const q = new Queue();
  expect(() => {
    q.add(1);
  }).not.toThrow();
});

test('can remove records from a queue', () => {
  const q = new Queue();
  expect(() => {
    q.add(1);
    q.remove();
  }).not.toThrow();
});

test('order of records stays intact', () => {
  const q = new Queue();
  q.add(1);
  q.add(2);
  q.add(3);
  expect(q.remove()).toEqual(1);
  expect(q.remove()).toEqual(2);
  expect(q.remove()).toEqual(3);
  expect(q.remove()).toEqual(undefined);
});

test('peek returns record, but does not remove the first record', () => {
  const q = new Queue();
  q.add(1);
  q.add(2);
  expect(q.peek()).toEqual(1);
  expect(q.peek()).toEqual(1);
  expect(q.remove()).toEqual(1);
  expect(q.remove()).toEqual(2);
});
