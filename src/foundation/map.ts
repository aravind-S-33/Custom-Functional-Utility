// src/foundation/map.ts

export function map<T, U>(
  fn: (item: T, index: number, array: T[]) => U,
  arr: T[]
): U[] {
  if (!Array.isArray(arr)) return [];

  const result: U[] = [];

  for (let i = 0; i < arr.length; i++) {
    result[i] = fn(arr[i], i, arr);
  }

  return result;
}