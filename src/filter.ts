export const filterLongWords = (
  words: string[],
  minLength: number
): string[] => {
  return words.filter(word => word.length > minLength);
};
