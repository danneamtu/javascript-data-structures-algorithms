function validateIP(ip) {
  /**
	@param ip: string
	@return: boolean
	*/
  // TODO in case 'oops'

  // "12.34.56.oops"
  // '192.168.0.1'
  // split str by .
  // ['12', "34", '56', 'oops']
  // 1. if length is 4, otherwise return fasle
  // 2. if each element is 0 - 255, otherwise return false
  //

  const arr = ip.split('.');

  if (arr.length > 4) {
    return false;
  }

  // TODO in case 'oops'
  // 'abc'
  // if 'oops' length is > 3
  //

  for (let element of arr) {
    if (+element < 0 || +element > 255 || element.length === 0) {
      return false;
    }
  }

  return true;
}

console.log(validateIP('192.168.123.456'));
