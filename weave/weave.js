const Queue = require('./queue');

// Linear runtime complexity
function weave(sourceOne, sourceTwo) {
  const weaved = new Queue();

  while (sourceOne.peek() && sourceTwo.peek()) {
    if (sourceOne.peek()) {
      weaved.add(sourceOne.remove());
    }

    if (sourceTwo.peek()) {
      weaved.add(sourceTwo.remove());
    }
  }

  return weaved;
}

module.exports = weave;

// FIRST SOLUTION - LINEAR RUNTIME COMPLEXITY
// function weave(sourceOne, sourceTwo) {
//   const weaved = new Queue();
//   // while sourceOne.remove() !== undefined
//   // weave.add(sourceOne.peek())

//   // create a copy of sourceone and source two
//   // Linear runtime complexity

//   while (sourceOne.peek() !== undefined && sourceTwo.peek() !== undefined) {
//     if (sourceOne.peek() !== undefined) {
//       weaved.add(sourceOne.peek());
//     }

//     if (sourceTwo.peek() !== undefined) {
//       weaved.add(sourceTwo.peek());
//     }

//     sourceOne.remove();
//     sourceTwo.remove();
//   }

//   return weaved;
// }
