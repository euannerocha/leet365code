function buildCharMap(str: string): Record<string, number> {
  const charMap: Record<string, number> = {};
  for (const char of str.replace(/\s/g, "").toLowerCase()) {
    charMap[char] = (charMap[char] || 0) + 1;
  }
  return charMap;
}

function areAnagrams(str1: string, str2: string): boolean {
  const mapA = buildCharMap(str1);
  const mapB = buildCharMap(str2);

  if (Object.keys(mapA).length !== Object.keys(mapB).length) return false;

  for (const char in mapA) {
    if (mapA[char] !== mapB[char]) return false;
  }

  return true;
}