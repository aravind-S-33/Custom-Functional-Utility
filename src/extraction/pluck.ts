// src/extraction/pluck.ts

import { getValue } from '../utils/path';

export function pluck<T>(
  selector: string | string[],
  arr: T[]
): any[] {
  if (!Array.isArray(arr)) return [];

  const result: any[] = [];

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];

    // CASE 1: Single key or deep path
    if (typeof selector === 'string') {
      result[i] = getValue(item, selector);
    }

    // CASE 2: Multiple keys
    else {
      const picked: any = {};

      for (let j = 0; j < selector.length; j++) {
        const key = selector[j];
        picked[key] = getValue(item, key);
      }

      result[i] = picked;
    }
  }

  return result;
}