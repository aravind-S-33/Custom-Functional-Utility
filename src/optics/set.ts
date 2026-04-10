// src/optics/set.ts

import { Lens } from './lens';

export function set<T>(
  lens: Lens,
  value: any,
  obj: T
): T {
  if (!obj || typeof lens.path !== 'string') return obj;

  const keys = lens.path.split('.');

  // recursive clone + update
  function cloneAndSet(current: any, index: number): any {
    const key = keys[index];

    // last key → set value
    if (index === keys.length - 1) {
      return {
        ...current,
        [key]: value
      };
    }

    return {
      ...current,
      [key]: cloneAndSet(current[key] ?? {}, index + 1)
    };
  }

  return cloneAndSet(obj, 0);
}