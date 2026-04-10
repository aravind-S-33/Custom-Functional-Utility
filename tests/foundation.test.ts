import { describe, test, expect } from 'vitest';
import { map } from '../src/foundation/map';
import { filter } from '../src/foundation/filter';
import { reduce } from '../src/foundation/reduce';

describe('Foundation Functions', () => {

  // ===================== MAP =====================
  describe('map', () => {
    test('doubles numbers', () => {
      expect(map(x => x * 2, [1, 2, 3])).toEqual([2, 4, 6]);
    });

    test('maps strings to lengths', () => {
      expect(map(str => str.length, ['hi', 'hello'])).toEqual([2, 5]);
    });

    test('returns empty array for empty input', () => {
      expect(map(x => x, [])).toEqual([]);
    });

    test('does not mutate original array', () => {
      const input = [1, 2, 3];
      map(x => x * 2, input);

      expect(input).toEqual([1, 2, 3]);
    });
  });

  // ===================== FILTER =====================
  describe('filter', () => {
    test('filters even numbers', () => {
      expect(filter(x => x % 2 === 0, [1, 2, 3, 4])).toEqual([2, 4]);
    });

    test('filters objects based on condition', () => {
      const users = [
        { active: true },
        { active: false }
      ];

      expect(filter(u => u.active, users)).toEqual([{ active: true }]);
    });

    test('returns empty array when no match', () => {
      expect(filter(x => x > 10, [1, 2, 3])).toEqual([]);
    });

    test('does not mutate original array', () => {
      const input = [1, 2, 3];
      filter(x => x > 1, input);

      expect(input).toEqual([1, 2, 3]);
    });
  });

  // ===================== REDUCE =====================
  describe('reduce', () => {
    test('sums numbers', () => {
      expect(reduce((a, b) => a + b, 0, [1, 2, 3])).toBe(6);
    });

    test('multiplies numbers', () => {
      expect(reduce((a, b) => a * b, 1, [2, 3, 4])).toBe(24);
    });

    test('builds object from array', () => {
      const result = reduce((acc, val) => {
        acc[val] = true;
        return acc;
      }, {} as Record<number, boolean>, [1, 2, 3]);

      expect(result).toEqual({ 1: true, 2: true, 3: true });
    });

    test('returns initial value for empty array', () => {
      expect(reduce((a, b) => a + b, 10, [])).toBe(10);
    });

    test('does not mutate original array', () => {
      const input = [1, 2, 3];
      reduce((a, b) => a + b, 0, input);

      expect(input).toEqual([1, 2, 3]);
    });
  });

});