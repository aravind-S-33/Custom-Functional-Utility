// src/foundation/reduce.ts

export function reduce<T, U>(
  reducer: (acc: U, current: T, index: number, array: T[]) => U,
  initialValue: U,
  arr: T[]
): U {
  if (!Array.isArray(arr)) return initialValue;

  let acc = initialValue;

  for (let i = 0; i < arr.length; i++) {
    acc = reducer(acc, arr[i], i, arr);
  }

  return acc;
}