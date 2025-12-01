function sortedSquares(nums) {
  let l = 0;
  let r = nums.length - 1;
  const res = Array(nums.length);
  let i = nums.length - 1;

  while (l <= r) {
    const left = nums[l] * nums[l];
    const right = nums[r] * nums[r];

    if (left > right) {
      res[i] = left;
      l++;
    } else {
      res[i] = right;
      r--;
    }
    i--;
  }

  return res;
}