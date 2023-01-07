export function transformQuerys(query: object) {
  const queryArray = Object.entries(query);
  const stringQuery = queryArray.map((query) => query.join('=')).join('&');
  return stringQuery;
}
