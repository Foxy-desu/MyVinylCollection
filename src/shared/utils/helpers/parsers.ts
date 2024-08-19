export function parseStringToArray(string: string, delimiter: string): string[] {
  const arrayOfElements = string.split(delimiter);
  return arrayOfElements;
};