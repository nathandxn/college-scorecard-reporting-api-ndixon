export const MAX_LIMIT = 1000;
export const DEFAULT_LIMIT = 100;

export const setLimit = (requestedLimit) => {
  if (!/^-?\d+(\.\d+)?$/.test(String(requestedLimit).trim())) {
    return DEFAULT_LIMIT;
  }
  const parsedLimit = Number.parseInt(requestedLimit, 10);
  return Math.min(Math.max(parsedLimit, 1), MAX_LIMIT);
};
