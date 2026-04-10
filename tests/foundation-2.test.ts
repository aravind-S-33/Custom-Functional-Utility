import { describe, test, expect, vi } from 'vitest';
import { reduceRight } from '../src/foundation/reduceRight';
import { some } from '../src/foundation/some';
import { every } from '../src/foundation/every';

describe('Stage 2 Functions', () => {

  // ===================== REDUCE RIGHT =====================
  describe('reduceRight', () => {
    test('subtracts right to left', () => {
      const result = reduceRight((acc, val) => acc - val, 100, [10, 5]);
      expect(result).toBe(85);
    });

    test('concatenates strings in reverse order', () => {
      const result = reduceRight((acc, val) => acc + val, '', ['a', 'b', 'c']);
      expect(result).toBe('cba');
    });

    test('returns initial value for empty array', () => {
      expect(reduceRight((a, b) => a + b, 10, [])).toBe(10);
    });

    test('does not mutate original array', () => {
      const input = [1, 2, 3];
      reduceRight((a, b) => a + b, 0, input);

      expect(input).toEqual([1, 2, 3]);
    });
  });

  // ===================== SOME =====================
  describe('some', () => {
    test('returns true if at least one matches', () => {
      expect(some(x => x > 3, [1, 2, 4])).toBe(true);
    });

    test('returns false if none match', () => {
      expect(some(x => x > 10, [1, 2, 3])).toBe(false);
    });

    test('works with objects', () => {
      const users = [{ active: false }, { active: true }];
      expect(some(u => u.active, users)).toBe(true);
    });

    test('stops early when condition is met', () => {
      const spy = vi.fn(x => x > 2);

      some(spy, [1, 2, 3, 4]);

      expect(spy.mock.calls.length).toBeLessThan(4);
    });

    test('returns false for empty array', () => {
      expect(some(x => true, [])).toBe(false);
    });
  });

  // ===================== EVERY =====================
  describe('every', () => {
    test('returns true if all match', () => {
      expect(every(x => x > 0, [1, 2, 3])).toBe(true);
    });

    test('returns false if one fails', () => {
      expect(every(x => x > 2, [1, 2, 3])).toBe(false);
    });

    test('works with objects', () => {
      const users = [{ active: true }, { active: true }];
      expect(every(u => u.active, users)).toBe(true);
    });

    test('stops early when condition fails', () => {
      const spy = vi.fn(x => x > 2);

      every(spy, [3, 4, 1, 5]);

      expect(spy.mock.calls.length).toBeLessThan(4);
    });

    test('returns true for empty array (vacuous truth)', () => {
      expect(every(x => false, [])).toBe(true);
    });
  });

});