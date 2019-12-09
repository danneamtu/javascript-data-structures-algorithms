// Time complexity O(n) - Where n is the length of the input string.
// Space complexity O(n) - Where n is the length of the splitted array.

function validateIP(ip) {
  const arr = ip.split('.');

  if (arr.length !== 4) {
    return false;
  }

  for (let element of arr) {
    if (!checkByte(element)) {
      return false;
    }
  }

  return true;
}

function checkByte(str) {
  if (str.length === 0) {
    return false;
  }

  if (+str === NaN) {
    return false;
  }

  if (str[0] === '0' && str.length > 1) {
    return false;
  }

  if (+str >= 0 && +str <= 255) {
    return true;
  } else {
    return false;
  }
}
