export function transformQuerys(query: object) {
  if (typeof query !== 'object' || query === null) {
    throw new Error('query must be a object');
  }
  const queryArray = Object.entries(query);
  const stringQuery = queryArray.map((query) => query.join('=')).join('&');
  return stringQuery;
}
