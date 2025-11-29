function longestConsecutive(nums) {
  const set = new Set(nums);
  let longest = 0;

  for (let n of set) {
    if (!set.has(n - 1)) {
      let curr = n;
      let length = 1;
      while (set.has(curr + 1)) {
        curr++;
        length++;
      }
      if (length > longest) longest = length;
    }
  }

  return longest;
}