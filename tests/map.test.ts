import { describe, test, expect } from 'vitest';
import { map } from '../src/foundation/map';

describe('map function', () => {

  test('doubles numbers', () => {
    const input = [1, 2, 3];
    const result = map(x => x * 2, input);

    expect(result).toEqual([2, 4, 6]);
    expect(input).toEqual([1, 2, 3]); // immutability
  });

  test('maps strings to uppercase', () => {
    const input = ['a', 'b', 'c'];
    const result = map(str => str.toUpperCase(), input);

    expect(result).toEqual(['A', 'B', 'C']);
    expect(input).toEqual(['a', 'b', 'c']); // immutability
  });

  test('returns empty array for empty input', () => {
    const result = map(x => x, []);

    expect(result).toEqual([]);
  });

});