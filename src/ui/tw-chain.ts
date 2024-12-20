export const twChain = (prefix: string, ...classNames: string[]) =>
  classNames.map((className) => `${prefix}${className}`).join(" ");
