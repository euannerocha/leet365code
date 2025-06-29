function uniqueBy<T, K>(array: T[], keyFn: (item: T) => K): T[] {
  const seen = new Set<K>();
  return array.filter(item => {
    const key = keyFn(item);
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

const users = [
  { id: 1, name: "Ana" },
  { id: 2, name: "João" },
  { id: 1, name: "Ana" },
];

const uniqueUsers = uniqueBy(users, user => user.id);
console.log(uniqueUsers);