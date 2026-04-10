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
export {
  every,
  filter,
  find,
  map,
  reduce,
  reduceRight,
  some
};
