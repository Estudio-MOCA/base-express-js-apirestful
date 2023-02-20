export const env = (key: string, defaultValue: any = null): any => {
  const value = process.env[key];
  if (value === undefined) {
    return defaultValue;
  }
  return value;
}