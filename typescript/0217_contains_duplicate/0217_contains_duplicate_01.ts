export const containsDuplicate = (nums: number[]) => {
  const hashmap = new Set();

  for (const num of nums) {
    if (hashmap.has(num)) {
      return true;
    } else {
      hashmap.add(num);
    }
  }

  return false;
};