// src/optics/lens.ts

export type Lens = {
  path: string;
};

export function lens(path: string): Lens {
  return { path };
}