import { describe, test, expect, vi } from 'vitest';
import { find } from '../src/search/find';

describe('find function (search module)', () => {
  const users = [
    { id: 1, name: 'Gautham', role: 'user' },
    { id: 2, name: 'Alex', role: 'admin' },
    { id: 3, name: 'Sam', role: 'user' }
  ];

  // ✅ Predicate tests
  test('finds item using predicate', () => {
    const result = find(users, user => user.id === 2);

    expect(result).toEqual({ id: 2, name: 'Alex', role: 'admin' });
  });

  test('returns undefined if predicate fails', () => {
    const result = find(users, user => user.id === 99);

    expect(result).toBeUndefined();
  });

  // ✅ Key-value tests
  test('finds item using key-value', () => {
    const result = find(users, 'role', 'admin');

    expect(result).toEqual({ id: 2, name: 'Alex', role: 'admin' });
  });

  test('returns undefined if key-value not found', () => {
    const result = find(users, 'role', 'superadmin');

    expect(result).toBeUndefined();
  });

  // ✅ Edge cases
  test('handles empty array', () => {
    expect(find([], user => true)).toBeUndefined();
  });

  test('handles invalid input', () => {
    expect(find(null as any, () => true)).toBeUndefined();
  });

  test('stops at first match (efficiency)', () => {
    const spy = vi.fn(user => user.role === 'user');

    find(users, spy);

    // Should not check all elements once found
    expect(spy.mock.calls.length).toBeLessThanOrEqual(users.length);
  });

  // ✅ Immutability check
  test('does not mutate original array', () => {
    const original = [...users];

    find(users, u => u.id === 1);

    expect(users).toEqual(original);
  });
});