import { subsets } from './0078_subsets';

describe('0078 Subsets Test', () => {
  it('should return all possible subsets', () => {
    expect(subsets([1, 2, 3])).toStrictEqual([[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]);
    expect(subsets([0])).toStrictEqual([[], [0]]);
  });
});