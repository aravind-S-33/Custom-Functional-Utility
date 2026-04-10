import { describe, test, expect, vi } from 'vitest';
import { pluck } from '../src/extraction/pluck';

describe('pluck function', () => {
  const data = [
    { id: 1, info: { email: 'a@test.com' }, tags: ['dev'] },
    { id: 2, info: { email: 'b@test.com' }, tags: ['hr'] }
  ];

  test('pluck simple key', () => {
    expect(pluck('id', data)).toEqual([1, 2]);
  });

  test('pluck deep path', () => {
    expect(pluck('info.email', data)).toEqual([
      'a@test.com',
      'b@test.com'
    ]);
  });

  test('pluck multiple keys', () => {
    expect(pluck(['id', 'tags'], data)).toEqual([
      { id: 1, tags: ['dev'] },
      { id: 2, tags: ['hr'] }
    ]);
  });

  test('immutability check', () => {
    const original = [...data];
    pluck('id', data);

    expect(data).toEqual(original);
  });

  test('handles invalid input', () => {
    expect(pluck('id', null as any)).toEqual([]);
  });
});