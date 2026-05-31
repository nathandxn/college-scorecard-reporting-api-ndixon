export const MAX_LIMIT = 1000;
export const DEFAULT_LIMIT = 100;

export const setLimit = (requestedLimit) => {
  const parsedLimit = Number.parseInt(requestedLimit, 10);
  const limit = Number.isFinite(parsedLimit)
    ? Math.min(Math.max(parsedLimit, 1), MAX_LIMIT)
    : DEFAULT_LIMIT;
  return limit;
};
