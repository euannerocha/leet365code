function generatePermutations<T>(arr: T[]): T[][] {
  if (arr.length === 0) return [[]];
  return arr.flatMap((item, index) =>
    generatePermutations([...arr.slice(0, index), ...arr.slice(index + 1)]).map(p => [item, ...p])
  );
}

const nums = [1, 2, 3];
const perms = generatePermutations(nums);
console.log(perms);