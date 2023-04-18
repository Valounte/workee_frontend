/**
 * Return numbers from string
 * @param string
 */
export const getNumbersFromString = (string: string) => {
  const numbers = string.replace(/\D/g, '');
  return numbers ? parseInt(numbers, 10) : undefined;
};
