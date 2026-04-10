import { describe, test, expect, vi } from 'vitest';
import { lens } from '../src/optics/lens';
import { view } from '../src/optics/view';
import { set } from '../src/optics/set';

describe('optics (lens)', () => {
  const user = {
    id: 1,
    profile: {
      settings: {
        theme: 'light'
      }
    }
  };

  test('view works', () => {
    const l = lens('profile.settings.theme');
    expect(view(l, user)).toBe('light');
  });

  test('set updates immutably', () => {
    const l = lens('profile.settings.theme');
    const updated = set(l, 'dark', user);

    expect(updated.profile.settings.theme).toBe('dark');
    expect(user.profile.settings.theme).toBe('light'); // immutability
  });

  test('deep path creation', () => {
    const l = lens('a.b.c');
    const result = set(l, 10, {});

    expect(result).toEqual({
      a: { b: { c: 10 } }
    });
  });
});