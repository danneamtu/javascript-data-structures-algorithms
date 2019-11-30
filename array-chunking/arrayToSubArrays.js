function arrayToSubArrays(array, size) {
  const result = [[]];

  for (let element of array) {
    const popped = result[result.length - 1];

    if (popped.length === size) {
      result.push([element]);
    } else {
      popped.push(element);
    }
  }

  return result;
}

module.exports = {arrayToSubArrays};

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
