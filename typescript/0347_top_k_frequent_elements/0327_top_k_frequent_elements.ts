export const topKFrequent = (nums: number[], k: number): number[] => {
  const hashmap: Map<number, number> = new Map();

  for (const num of nums) {
    hashmap.set(num, (hashmap.get(num) ?? 0) + 1);
  }

  return [...hashmap.entries()]
    .sort((a, b) => b[1] - a[1])
    .splice(0, k)
    .map((value) => value[0]);
};