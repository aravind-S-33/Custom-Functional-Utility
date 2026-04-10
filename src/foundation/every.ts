export function every<T>(
  predicate: (item: T, index: number, array: T[]) => boolean,
  arr: T[]
): boolean {
  if (!Array.isArray(arr)) return false;

  for (let i = 0; i < arr.length; i++) {
    if(!predicate(arr[i], i, arr)) {
      return false;
    }
  }
  return true;
}