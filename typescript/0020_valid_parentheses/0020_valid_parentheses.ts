export const isValid = (input: string): boolean => {
  const hashmap: {
    [key: string]: string;
  } = {
    '(': ')',
    '{': '}',
    '[': ']',
  };

  const stack = [];

  for (let i = 0; i < input.length; i++) {
    const char = input[i];

    if (hashmap.hasOwnProperty(char)) {
      stack.push(hashmap[char]);
    } else if (stack.pop() !== char) {
      return false;
    }
  }

  return stack.length === 0;
};