// Example 1:

// Input: nums = [1, 2, 3, 4]
// Output: [24, 12, 8, 6]
// Example 2:

// Input: nums = [-1, 1, 0, -3, 3]
// Output: [0, 0, 9, 0, 0]

import { productExceptSelf } from './0238_product_of_array_except_self';

describe('0238 Product of Array Except Self Test', () => {
  it('should return the product of array except self', () => {
    expect(productExceptSelf([1, 2, 3, 4])).toEqual([24, 12, 8, 6]);
    expect(productExceptSelf([-1, 1, 0, -3, 3])).toEqual([0, 0, 9, 0, 0]);
  });
});