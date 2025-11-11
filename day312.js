function canPartition(nums) {
  const total = nums.reduce((a, b) => a + b, 0);
  if (total % 2 !== 0) return false;

  const target = total / 2;
  const dp = new Set([0]);

  for (const num of nums) {
    const next = new Set(dp);
    for (const sum of dp) {
      if (sum + num === target) return true;
      if (sum + num < target) next.add(sum + num);
    }
    dp.clear();
    for (const val of next) dp.add(val);
  }

  return dp.has(target);
}

