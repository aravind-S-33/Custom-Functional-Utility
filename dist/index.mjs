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
export {
  lens,
  pluck,
  set,
  view
};
