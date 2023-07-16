import { topKFrequent } from './0327_top_k_frequent_elements';

describe('Top K Frequent Elements Test', () => {
  it('should return the top k frequent elements', () => {
    expect(topKFrequent([1, 1, 1, 2, 2, 3], 2)).toEqual([1, 2]);
    expect(topKFrequent([1], 1)).toEqual([1]);
  });
});
