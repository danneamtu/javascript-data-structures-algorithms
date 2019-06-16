function chunk(array, size) {
  let chunks = [];

  return array.reduce((result, element, index) => {
    if (chunks.length < size) {
      chunks.push(element);
    } else {
      result.push(chunks)
      chunks = []
      chunks.push(element)
    }
    return result
  }, []);
}

module.exports = chunk;
