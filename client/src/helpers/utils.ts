export const toCamelCase = (str: string): string =>
  str
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+(.)/g, (_, letter) => letter.toUpperCase());

export const toPascalCase = (str: string): string =>
  str
    .replace(/\w\S*/g, (letter) => letter.charAt(0).toUpperCase() + letter.substr(1).toLowerCase());

export const toKebabCase = (str: string): string => {
  const words = str.match(/[A-Z]{2,}(?=[A-Z][a-z0-9]*|\b)|[A-Z]?[a-z0-9]*|[A-Z]|[0-9]+/g);
  return words ? words
    .filter(Boolean)
    .map(x => x.toLowerCase())
    .join('-') : '';
  }
