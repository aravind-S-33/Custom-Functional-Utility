"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  every: () => every,
  filter: () => filter,
  find: () => find,
  map: () => map,
  reduce: () => reduce,
  reduceRight: () => reduceRight,
  some: () => some
});
module.exports = __toCommonJS(index_exports);

// src/foundation/map.ts
function map(fn, arr) {
  if (!Array.isArray(arr)) return [];
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result[i] = fn(arr[i], i, arr);
  }
  return result;
}

// src/foundation/filter.ts
function filter(predicate, arr) {
  if (!Array.isArray(arr)) return [];
  const result = [];
  let resIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    if (predicate(arr[i], i, arr)) {
      result[resIndex++] = arr[i];
    }
  }
  return result;
}

// src/foundation/reduce.ts
function reduce(reducer, initialValue, arr) {
  if (!Array.isArray(arr)) return initialValue;
  let acc = initialValue;
  for (let i = 0; i < arr.length; i++) {
    acc = reducer(acc, arr[i], i, arr);
  }
  return acc;
}

// src/foundation/reduceRight.ts
function reduceRight(reducer, initialValue, arr) {
  if (!Array.isArray(arr)) return initialValue;
  let acc = initialValue;
  for (let i = arr.length - 1; i >= 0; i--) {
    acc = reducer(acc, arr[i], i, arr);
  }
  return acc;
}

// src/foundation/some.ts
function some(predicate, arr) {
  if (!Array.isArray(arr)) return false;
  for (let i = 0; i < arr.length; i++) {
    if (predicate(arr[i], i, arr)) {
      return true;
    }
  }
  return false;
}

// src/foundation/every.ts
function every(predicate, arr) {
  if (!Array.isArray(arr)) return false;
  for (let i = 0; i < arr.length; i++) {
    if (!predicate(arr[i], i, arr)) {
      return false;
    }
  }
  return true;
}

// src/search/find.ts
function find(arr, arg1, arg2) {
  if (!Array.isArray(arr)) return void 0;
  if (typeof arg1 === "function") {
    const predicate = arg1;
    for (let i = 0; i < arr.length; i++) {
      if (predicate(arr[i], i, arr)) {
        return arr[i];
      }
    }
  } else {
    const key = arg1;
    const value = arg2;
    for (let i = 0; i < arr.length; i++) {
      const item = arr[i];
      if (item != null && item[key] === value) {
        return arr[i];
      }
    }
  }
  return void 0;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  every,
  filter,
  find,
  map,
  reduce,
  reduceRight,
  some
});


// src/index.ts
var index_exports = {};
__export(index_exports, {
  lens: () => lens,
  pluck: () => pluck,
  set: () => set,
  view: () => view
});
module.exports = __toCommonJS(index_exports);

// src/utils/path.ts
function getValue(obj, path) {
  if (!obj || typeof path !== "string") return void 0;
  const keys = path.split(".");
  let current = obj;
  for (let i = 0; i < keys.length; i++) {
    if (current == null) return void 0;
    current = current[keys[i]];
  }
  return current;
}

// src/extraction/pluck.ts
function pluck(selector, arr) {
  if (!Array.isArray(arr)) return [];
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (typeof selector === "string") {
      result[i] = getValue(item, selector);
    } else {
      const picked = {};
      for (let j = 0; j < selector.length; j++) {
        const key = selector[j];
        picked[key] = getValue(item, key);
      }
      result[i] = picked;
    }
  }
  return result;
}

// src/optics/lens.ts
function lens(path) {
  return { path };
}

// src/optics/view.ts
function view(lens2, obj) {
  return getValue(obj, lens2.path);
}

// src/optics/set.ts
function set(lens2, value, obj) {
  if (!obj || typeof lens2.path !== "string") return obj;
  const keys = lens2.path.split(".");
  function cloneAndSet(current, index) {
    var _a;
    const key = keys[index];
    if (index === keys.length - 1) {
      return {
        ...current,
        [key]: value
      };
    }
    return {
      ...current,
      [key]: cloneAndSet((_a = current[key]) != null ? _a : {}, index + 1)
    };
  }
  return cloneAndSet(obj, 0);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  lens,
  pluck,
  set,
  view
});
