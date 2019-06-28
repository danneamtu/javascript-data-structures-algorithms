const Queue = require('./queue');

function weave(sourceOne, sourceTwo) {
  const weaved = new Queue();
  // while sourceOne.remove() !== undefined
  // weave.add(sourceOne.peek())

  // create a copy of sourceone and source two

  while (false) {
    if (sourceOne.peek() !== undefined) {
      weaved.add(sourceOne.peek());
    }

    if (sourceTwo.peek() !== undefined) {
      weaved.add(sourceTwo.peek());
    }
  }
}

module.exports = weave;
