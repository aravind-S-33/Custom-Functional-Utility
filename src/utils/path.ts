// src/utils/path.ts

export function getValue(obj: any, path: string): any {
  if (!obj || typeof path !== 'string') return undefined;

  const keys = path.split('.');
  let current = obj;

  for (let i = 0; i < keys.length; i++) {
    if (current == null) return undefined;
    current = current[keys[i]];
  }

  return current;
}