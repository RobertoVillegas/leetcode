export const isPalindrome = (x: number): boolean => {
  const stringNumber = x.toString();
  const reversed = stringNumber.split('').reverse().join('');

  return stringNumber === reversed;
}