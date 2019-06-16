function chunk(array, size) {
  const chunked = [];
  let index = 0;

  while (index < array.length) {
    chunked.push(array.slice(index, index + size));
    index += size;
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

// SECOND SOLUTION
// function chunk(array, size) {
//   const chunked = [];

//   for (let element of array) {
//     const lastChunked = chunked[chunked.length - 1];

//     if (!lastChunked || lastChunked.length === size) {
//       chunked.push([element]);
//     } else {
//       lastChunked.push(element);
//     }
//   }

//   return chunked;
// }
