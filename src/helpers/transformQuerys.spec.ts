import { transformQuerys } from './transformQuerys';

describe('transformQuerys', () => {
  it('should be able to return a string of all querys params', () => {
    const expected = 'per_page=10&sort=updated';
    const result = transformQuerys({ per_page: 10, sort: 'updated' });
    expect(result).toBe(expected);
  });

  it('should be able to throw a error with query type is not a Object', () => {
    expect(() => transformQuerys(undefined)).toThrow('query must be a object');
  });
});
