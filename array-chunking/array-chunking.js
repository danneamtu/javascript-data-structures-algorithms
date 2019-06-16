function chunk(array, size) {
  let chunks = [];

  return array.reduce((result, element, index) => {
    if (chunks.length < size) {
      chunks.push(element);
      if (array.length - 1 === index) {
        result.push(chunks);
      }
    } else {
      result.push(chunks);
      chunks = [];
      chunks.push(element);
      if (array.length - 1 === index) {
        result.push(chunks);
      }
    }
    return result;
  }, []);
}

module.exports = chunk;
