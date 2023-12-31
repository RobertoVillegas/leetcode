export const search = function (nums: number[], target: number): number {
  let start = 0;
  let end = nums.length - 1;
  let middle = Math.floor((start + end) / 2);

  while (nums[middle] !== target && start <= end) {
    if (target < nums[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
  }

  if (nums[middle] === target) {
    return middle;
  } else {
    return -1;
  }
};