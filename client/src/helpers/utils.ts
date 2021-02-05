export const toCamelCase = (str: string): string =>
  str
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+(.)/g, (_, letter) => letter.toUpperCase());

export const toPascalCase = (str: string): string =>
  str
    .replace(/\w\S*/g, (letter) => letter.charAt(0).toUpperCase() + letter.substr(1).toLowerCase());
