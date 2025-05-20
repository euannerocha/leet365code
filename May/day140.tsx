const messedArr = ["bat", "tab", "tap", "pat", "cat", "act"]


function groupAnagrams(words: string[]): string[][] {
  const map: { [key: string]: string[] } = {};

  for (const word of words) {
    const key = word.split('').sort().join('');
    if (!map[key]) {
      map[key] = [];
    }
    map[key].push(word);
  }

  return Object.values(map);
}
