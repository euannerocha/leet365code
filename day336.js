function checkSubarraySum(nums, k) {
  const map = { 0: -1 };
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    const mod = k === 0 ? sum : sum % k;

    if (map[mod] !== undefined) {
      if (i - map[mod] > 1) return true;
    } else {
      map[mod] = i;
    }
  }

  return false;
}