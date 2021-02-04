export const toCamelCase = (str: string): string =>
  str
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+(.)/g, (_, letter) => letter.toUpperCase());