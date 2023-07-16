export const subsets = (nums: number[]): number[][] => {
  const setSize = nums.length;
  const subsetsCount = 2 ** setSize;
  const result = [];

  for (let i = 0; i < subsetsCount; i++) {
    const currentSubsetSelection = getBinaryNumber(i);
    const currentSubset = [];

    for (let j = 0; j < currentSubsetSelection.length; j++) {
      const isValid = Number(currentSubsetSelection[j]);

      if (isValid) {
        currentSubset.push(nums[j]);
      }
    }

    result.push(currentSubset);
  }

  return result;
};

const getBinaryNumber = (num: number) => {
  return (num >>> 0).toString(2).split('').reverse().join('');
};