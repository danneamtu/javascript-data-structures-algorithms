ƒ/*
 * Complete the 'balancedBrackets' function below.
 *
 * The function is expected to return a BOOLEAN.
 * The function accepts STRING string as parameter.
 */
// ||[]
function balancedBrackets(string) {
  const bracket_map = {
    ']': '[',
    ')': '(',
    '}': '{',
    '|': '|'
  };

  const available_brackets = new Set(['[', ']', '(', ')', '{', '}', '|']);

  const stack = []; //
  let pipe_counter = 0;

  for (let char of string) {
    if (char === '|' && pipe_counter === 0) {
      pipe_counter += 1;
      stack.push(char);
    } else if (char in bracket_map) {
      if (bracket_map[char] === stack[stack.length - 1]) {
        if (char === '|') {
          pipe_counter -= 1;
        }
        stack.pop();
      } else {
        return 0;
      }
    } else {
      if (available_brackets.has(char)) {
        stack.push(char);
      }
    }
  }

  return stack.length === 0 ? 1 : 0;
}
