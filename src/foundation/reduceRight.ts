// src/foundation/reduceRight.ts

export function reduceRight<T, U>(
  reducer: (acc: U, current: T, index: number, array: T[]) => U,
  initialValue: U,
  arr: T[]
): U {
  if (!Array.isArray(arr)) return initialValue;

  let acc = initialValue;

  for (let i = arr.length - 1; i >= 0; i--) {
    acc = reducer(acc, arr[i], i, arr);
  }

  return acc;
}