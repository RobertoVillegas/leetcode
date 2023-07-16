export const isAnagram = (input: string, sample: string) => {
  const letterCounter = new Map<string, number>();

  for (let i = 0; i < input.length; i++) {
    const letter = input[i];

    if (letterCounter.get(letter)) {
      letterCounter.set(letter, letterCounter.get(letter)! + 1);
    } else {
      letterCounter.set(letter, 1);
    }
  }

  for (let i = 0; i < sample.length; i++) {
    const letter = sample[i];

    if (letterCounter.get(letter)) {
      letterCounter.set(letter, letterCounter.get(letter)! - 1);
    } else {
      letterCounter.set(letter, -1);
    }
  }

  for (const value of letterCounter.values()) {
    if (value !== 0) {
      return false;
    }
  }

  return true;
};