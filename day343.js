function findDuplicates(nums) {
  const res = [];

  for (let i = 0; i < nums.length; i++) {
    const idx = Math.abs(nums[i]) - 1;
    if (nums[idx] < 0) res.push(idx + 1);
    nums[idx] = -nums[idx];
  }

  return res;
}