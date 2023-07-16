import { containsDuplicate } from './0217_contains_duplicate_02';

describe('0217 Contains Duplicate Test 02', () => {
  it('should return true if any value appears at least twice in the array', () => {
    expect(containsDuplicate([1, 2, 3, 1])).toStrictEqual(true);
    expect(containsDuplicate([1, 2, 3, 4])).toStrictEqual(false);
    expect(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toStrictEqual(true);
  });
});