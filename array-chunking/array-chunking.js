function chunk(array, size) {
  let chunked = [];

  for (let element of array) {
    let lastChunked = chunked[chunked.length - 1];

    if (!lastChunked || lastChunked.length === size) {
      chunked.push([element]);
    } else {
      lastChunked.push(element);
    }
  }

  return chunked;
}

module.exports = chunk;

// FIRST SOLUTION:
// function chunk(array, size) {
//   let chunks = [];

//   return array.reduce((result, element, index) => {
//     if (chunks.length < size) {
//       chunks.push(element);
//       if (array.length - 1 === index) {
//         result.push(chunks);
//       }
//     } else {
//       result.push(chunks);
//       chunks = [];
//       chunks.push(element);
//       if (array.length - 1 === index) {
//         result.push(chunks);
//       }
//     }
//     return result;
//   }, []);
// }
