function isAnagram(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  const count: Record<string, number> = {};
  for (const char of a) count[char] = (count[char] || 0) + 1;
  for (const char of b) {
    if (!count[char]) return false;
    count[char]--;
  }
  return true;
}

console.log(isAnagram("listen", "silent"));
console.log(isAnagram("hello", "world"));