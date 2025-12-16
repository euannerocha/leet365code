function maxSubarraySumCircular(nums) {
  let total = 0;
  let maxSum = nums[0];
  let curMax = 0;
  let minSum = nums[0];
  let curMin = 0;

  for (let n of nums) {
    curMax = Math.max(curMax + n, n);
    maxSum = Math.max(maxSum, curMax);

    curMin = Math.min(curMin + n, n);
    minSum = Math.min(minSum, curMin);

    total += n;
  }

  return maxSum > 0 ? Math.max(maxSum, total - minSum) : maxSum;
}