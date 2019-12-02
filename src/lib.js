export function recurseSetValueByPath(target, path, value) {
  let key = path.shift();
  if (path.length === 0) {
    if (Array.isArray(target)) {
      return [...target.slice(0, key), value, ...target.slice(key + 1)];
    } else {
      return { ...target, [key]: value };
    }
  } else {
    if (Array.isArray(target)) {
      return [
        ...target.slice(0, key),
        recurseSetValueByPath(
          target[key] === undefined ? {} : target[key],
          path,
          value
        ),
        ...target.slice(key + 1)
      ];
    } else {
      return {
        ...target,
        [key]: recurseSetValueByPath(
          target[key] === undefined
            ? typeof path[0] === "number"
              ? []
              : {}
            : target[key],
          path,
          value
        )
      };
    }
  }
}
