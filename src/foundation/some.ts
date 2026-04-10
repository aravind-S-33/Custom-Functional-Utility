// src/foundation/some.ts

export function some<T>(
  predicate: (item: T, index: number, array: T[]) => boolean,
  arr: T[]
): boolean {
  if (!Array.isArray(arr)) return false;

  for (let i = 0; i < arr.length; i++) {
    if (predicate(arr[i], i, arr)) {
      return true; // early exit
    }
  }

  return false;
}