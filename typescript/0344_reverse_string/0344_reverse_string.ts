export const reverseString = (str: string[]) => {
  const middle = Math.floor(str.length / 2);
  let lower = 0;

  while (lower != middle) {
    const temp = str[str.length - lower - 1];
    str[str.length - lower - 1] = str[lower];
    str[lower] = temp;

    lower++;
  }

  return str;
}