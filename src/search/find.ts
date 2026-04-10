export function find<T>(
  arr: T[],
  arg1: ((item: T, index: number, array: T[]) => boolean) | keyof T,
  arg2?: any
): T | undefined {
  if (!Array.isArray(arr)) return undefined;

  // CASE 1: Predicate function
  if (typeof arg1 === 'function') {
    const predicate = arg1;

    for (let i = 0; i < arr.length; i++) {
      if (predicate(arr[i], i, arr)) {
        return arr[i];
      }
    }
  }

  // CASE 2: Key-value search
  else {
    const key = arg1;
    const value = arg2;

    for (let i = 0; i < arr.length; i++) {
      const item = arr[i] as any;

      if (item != null && item[key] === value) {
        return arr[i];
      }
    }
  }

  return undefined;
}