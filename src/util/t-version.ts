export const tVersion = (t: string, version?: string) =>
  [t, version].filter(Boolean).join("-");
