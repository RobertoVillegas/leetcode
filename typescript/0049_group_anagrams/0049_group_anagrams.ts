export const groupAnagrams = (strs: string[]): string[][] => {
  const hashmap: Map<string, Array<string>> = new Map();
  const result: string[][] = [];

  for (let i = 0; i < strs.length; i++) {
    const word = strs[i];
    const key = word.split('').sort().join('');

    if (hashmap.has(key)) {
      hashmap.get(key)!.push(word);
    } else {
      hashmap.set(key, [word]);
    }
  }

  hashmap.forEach((value) => result.push(value.sort()));

  return result.reverse();
};