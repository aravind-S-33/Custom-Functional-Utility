// src/optics/view.ts

import { Lens } from './lens';
import { getValue } from '../utils/path';

export function view<T>(lens: Lens, obj: T): any {
  return getValue(obj, lens.path);
}