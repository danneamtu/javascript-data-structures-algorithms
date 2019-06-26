const Queue = require('./queue')

test('Queue is a class', () => {
  expect(typeof Queue.prototype.constructor).toEqual('function')
})

test('can add elements to a queue', () => {
  const q = new Queue()
  expect(() => {
    q.add(1)
  }).not.toThrow()
})

test('can remove elements from a queue', () => {
  const q = new Queue()
  expect(() => {
    q.add(1)
    q.remove()
  }).not.toThrow()
})
