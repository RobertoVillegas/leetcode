export const romanToInt = (s: string): number => {
  const hashmap: {
    [key: string]: number;
  } = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;

  for (let index = 0; index < s.length; index++) {
    const current = hashmap[s[index]];
    const next = hashmap[s[index + 1]];

    if (current < next) {
      result -= current;
    } else {
      result += current;
    }
  }

  return result;
};