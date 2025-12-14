function maxProduct(nums) {
  let max = nums[0];
  let min = nums[0];
  let res = nums[0];

  for (let i = 1; i < nums.length; i++) {
    const n = nums[i];
    const tempMax = Math.max(n, max * n, min * n);
    min = Math.min(n, max * n, min * n);
    max = tempMax;
    res = Math.max(res, max);
  }

  return res;
}