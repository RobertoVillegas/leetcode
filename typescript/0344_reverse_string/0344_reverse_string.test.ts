import { reverseString } from './0344_reverse_string';

describe('0344 Reverse String Test', () => {
  it('should reverse the string', () => {
    expect(reverseString(['h', 'e', 'l', 'l', 'o'])).toStrictEqual(['o', 'l', 'l', 'e', 'h']);
    expect(reverseString(['H', 'a', 'n', 'n', 'a', 'h'])).toStrictEqual(['h', 'a', 'n', 'n', 'a', 'H']);
  });
});