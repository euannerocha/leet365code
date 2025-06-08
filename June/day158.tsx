function groupAnagrams(words: string[]): string[][] {
  const map: Map<string, string[]> = new Map();

  for (const word of words) {
    const sorted = word.split('').sort().join('');
    const group = map.get(sorted) || [];
    group.push(word);
    map.set(sorted, group);
  }

  return Array.from(map.values());
}

const input = ["eat", "tea", "tan", "ate", "nat", "bat"];
const result = groupAnagrams(input);
console.log(result);