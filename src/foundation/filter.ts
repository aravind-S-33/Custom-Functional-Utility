// src/foundation/filter.ts

export function filter<T>(
  predicate: (item: T, index: number, array: T[]) => boolean,
  arr: T[]
): T[] {
  if (!Array.isArray(arr)) return [];

  const result: T[] = [];
  let resIndex = 0;

  for (let i = 0; i < arr.length; i++) {
    if (predicate(arr[i], i, arr)) {
      result[resIndex++] = arr[i];
    }
  }

  return result;
}