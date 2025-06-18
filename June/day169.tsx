function flatten<T>(array: (T | T[])[]): T[] {
  return array.reduce<T[]>((acc, val) => {
    if (Array.isArray(val)) {
      return acc.concat(flatten(val));
    }
    return acc.concat(val);
  }, []);
}

const nested = [1, [2, [3, 4], 5], 6];
const result = flatten(nested);
console.log(result);